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


//routes for creating a new post and also uploading the proper image;
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



const updatePost = async (req, res) => {
  res.json('post updated successfully');
}

const getAllPosts = async (req, res) => {
  res.json('post fetched successfully');
}

const getOnePost = async (req, res) => {
  res.json('a single post fetched successfully');
}

const deletePost = async (req, res) => {
  res.json('post deleted successfully');
}

const upvotePost = async (req, res) => {
  res.json('upvote is increase by 1');
}

const getDoctorPosts = async (req, res) => {
  res.json('doctor post fetched successfully!');
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