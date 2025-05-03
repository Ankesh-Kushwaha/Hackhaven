const {Cases}=require('../schema/Schema')
const { CreatecaseValidation ,updateCaseValidation} = require('../utils/zodValidation')
const { cloudinary } = require('../utils/cloudinaryconfig');
const streamifier = require('streamifier');

//function to convert the coming body to its specified types
const parseArray = (value) => {
  if (!value) return undefined;
  return typeof value === 'string' ? value.split(',').map(v => v.trim()) : value;
};

const parseNumber = (value) => {
  const num = Number(value);
  return isNaN(num) ? undefined : num;
};

const parseDate = (value) => {
  const date = new Date(value);
  return isNaN(date.getTime()) ? undefined : date;
};


//controller for creating a full new post with the image;
const createPost = async (req, res) => {
  try {
        const body = { //parsing the array before passing for zod validation
          ...req.body,
      specialties: parseArray(req.body.specialties),
      diseaseTags: parseArray(req.body.diseaseTags),
      generalTags: parseArray(req.body.generalTags),
      upvotedBy: parseArray(req.body.upvotedBy),

      patientAge: parseNumber(req.body.patientAge),
      upvotes: parseNumber(req.body.upvotes),
      views: parseNumber(req.body.views),

      createdAt: req.body.createdAt ? parseDate(req.body.createdAt) : undefined,
      updatedAt: req.body.updatedAt ? parseDate(req.body.updatedAt) : undefined, 
    };
    
    const file = req.file;  //etracting the image file from the req;
      

    const result = CreatecaseValidation.safeParse(body); //checking the validation check
    const doctorId = req.user.user;  //take the doctor id from the authMiddleware

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Zod validation failed",
        error: result.error.errors,
      });
    }

    const {
      title,
      description,
      specialties,
      diseaseTags,
      generalTags,
      patientAge,
      patientGender,
    } = body;

    let uploadResult = null;

    if (file) {
      const streamUpload = (buffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: 'casePost-image',
              resource_type: 'image',
            },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          streamifier.createReadStream(buffer).pipe(stream);
        });
      };

      uploadResult = await streamUpload(file.buffer);   //uploading the stream to the cloudinary
    }

    const newCase = new Cases({
      title,
      description,
      specialties,
      diseaseTags,
      generalTags,
      patientAge,
      patientGender,
      caseFiles: uploadResult
        ? {
            url: uploadResult.secure_url,
            publicId: uploadResult.public_id,
            file: '.jpg', // or derive from file.mimetype
          }
        : null,
      createdBy: doctorId,
    });


    await newCase.save();

    res.status(200).json({
      success: true,
      message: "Post created successfully",
      case: newCase,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

//controller for updating a particular post
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const casetoUpdate = await Cases.findById(postId);
    if (!casetoUpdate) {
      return res.status(400).json({
        success: false,
        message:'case does not exist'
       })
    }

    //find the post and update it with the given body
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        success: false,
        message: "Case data is required for update",
      })
    }
    //check for the zod Validation
    const success = updateCaseValidation.safeParse(body);
    if (!success.success) {
      return res.status(400).json({
        success: true,
        message:"zod validation failed"
        })
    }

    const userId = req.user.user; //get the user id of the doctor from the authMiddleware
    if (userId.toString() !== casetoUpdate.createdBy.toString()) {
      return res.status(400).json({
        success: false,
        message:"you are not authorised to update this post"
        })
    }

    //const find the post with the given postId and update the post;
    const updtaedCase = await Cases.findByIdAndUpdate(
          postId,
         { $set:body },
         { new: true, runValidators: true }
    )
  
    if (!updtaedCase) {
      return res.status(400).json({
        success: false,
        message:"Error while updating the Case",
       })
    }
    else {
      res.status(200).json({
        success: true,
        message: "Case updated Successfully",
        case:updtaedCase
       })
    }
  }
  catch (err) {
    res.status(500).json({
      success: true,
      message: "Internal server Error",
      error:err.message
     })
  }
}


//controller for getting all the posts
const getAllPosts = async (req, res) => {
  try {
    const allCases = await Cases.find().sort({upvotes:-1}).limit(5);
    res.status(200).json({
      success: true,
      message: "All post fetched successfully",
      cases:allCases
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server errror",
      error: err.message
      })
   }
}



//controller for getting a single post
const getOnePost = async (req, res) => {
  try {
    const caseId = req.params.id;  //asscess the caseId from the req
    const singleCase = await Cases.findById(caseId);
    if (!singleCase) {
      return res.status(200).json(  //if the case does not found no need to extend further;
        {
          success: true,
          message:"Case not found"
        }
      )
    }
   
    res.status(200).json({  //return the found case with the given id;
      success: false,
      message: "case found successfully",
      case:singleCase
    })

  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error:err.message,
      })
  }
}

//controller  for deleting the post of a particular doctor
const deletePost = async (req, res) => {
  try {
    const caseId = req.params.id;
    const doctorId = req.user.user; //access the logged in user id from the authMiddleware
    
    const casetoBeDelete = await Cases.findById(caseId);
    if (!casetoBeDelete) {
      return res.status(401).json({
        success: false,
        message: "case does not found",
       })
    }

    if (doctorId !== casetoBeDelete.createdBy.toString()) { //compare the doctorId with the cases createdBy
      return res.status(401).json({
        success: false,
        message:"you are not authorized to delete this post",
       })
    }


    const deleteCase = await Cases.findByIdAndDelete(caseId);
    if (!deleteCase) {
      return res.status(400).json({
        success: true,
        message:"Error while deleting the post"
      })
    }
   
    res.status(200).json({
      success: true,
      message:"post deleted successfully"
    })
  }
  catch (err) {
    res.status(500).json({
      success: true,
      message: "Internal server error",
      err: err.message,
      })
  }
}


//controller for creating the upvotes of the user
const upvotePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.user;  //etract the user id from the authMiddleware
    //find the particula post for upvotes
    const post = await Cases.findById(postId);
    
    if (!post) {
      return res.status(400).json({
        success: true,
        message:"Case not found"
       })
    }

    //check if the user had already upvotes the post
    const alreadyUpvoted = post.upvotedBy.includes(userId);
    if (alreadyUpvoted) {
      return res.status(400).json({
        success: false,
        message:"You already upvoted"
      })
    }

    //upvotes the case
    post.upvotes += 1;
    post.upvotedBy.push(userId);
    //save the post
    await post.save();
    res.status(200).json({
      success: true,
      message: "You upvoted the case successFully",
    })
  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      err:err.message,
      })
  }
}

const downvotePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.user;
    const post = await Cases.findById(postId);

    if (!post) {
      return res.status(400).json({
        success: false,
        message:"case does not found",
      })
    }

    //check if the user is upvoted the post or not
    const alreadyUpvoted = post.upvotedBy.includes(userId);
    if (!alreadyUpvoted) {
      return res.status(400).json({
        success: false,
        message:"You do not upvoted the case"
        })
    }

    post.upvotedBy = post.upvotedBy.filter(id => id.toString() !== userId);
    post.upvotes = Math.max(0, post.upvotes - 1);
    await post.save();
    
  return res.status(200).json({
      success: true,
      message: 'Upvote removed',
      upvotes: post.upvotes,
  })
  }
  catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server Error",
      error:err.message,
    })
  }
}


//controller for getting the all post  of a particular doctor;
const getDoctorPosts = async (req, res) => {
  const doctorId = req.params.id;
  const cases = await Cases.find({createdBy:doctorId})
  res.json({
     data:cases,
  })
}


const globalSearch = async (req,res) => {
  try {
    const q = req.query.q
    //if the query is not found than return from there 
    if (!q || q.trim() ===" ") {
      return res.status(400).json({
        success: false,
        message:"query is required"
        })
    }

   const results = await Cases.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { diseaseTags: { $elemMatch: { $regex: q, $options: 'i' } } },
        { specialties: { $elemMatch: { $regex: q, $options: 'i' } } },
        { generalTags: { $elemMatch: { $regex: q, $options: 'i' } } },
      ],
          caseFiles: { $exists: true, $ne: [] }, // you likely meant this instead of 'image'
    });

    res.status(200).json({
      success: true,
      message: "Post fetched successfully",
      cases:results,
  })
  }
  catch (err) {
    res.status(500).json({
      success: true,
      message: "Internal Server Error",
      error:err.message
      })
  }
};


module.exports = {
  globalSearch,
  createPost,
  updatePost,
  getAllPosts,
  getOnePost,
  deletePost,
  upvotePost,
  getDoctorPosts,
  downvotePost,
}