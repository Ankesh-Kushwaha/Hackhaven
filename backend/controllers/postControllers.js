const {Cases}=require('../schema/Schema')
const { CreatecaseValidation } = require('../utils/zodValidation')
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
    const doctorId = req.params.doctorId;

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
  res.json('post updated successfully');
}

//controller for getting all the posts
const getAllPosts = async (req, res) => {
  try {
    const allCases = await Cases.find();
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
  res.json('upvote is increase by 1');
}

//controller for getting the all post  of a particular doctor;
const getDoctorPosts = async (req, res) => {
  const doctorId = req.params.id;
  const cases = await Cases.find({createdBy:doctorId})
  res.json({
     data:cases,
  })
}




module.exports = {
  createPost,
  updatePost,
  getAllPosts,
  getOnePost,
  deletePost,
  upvotePost,
  getDoctorPosts
}