const {Cases}=require('../schema/Schema')
const { CreatecaseValidation } = require('../utils/zodValidation')
const { cloudinary } = require('../utils/cloudinaryconfig');
const streamifier = require('streamifier');



const createPost = async (req, res) => {
  try {
    const body = req.body;
    const result = CreatecaseValidation.safeParse(body);
    const doctorId = req.params.doctorId; 
    if (!result.success) {
      return res.status(402).json({
        success: false,
        message: "zod validation failed",
        error: result.error.errors,  // correct here
      });
    }

    console.log(doctorId)
    const { title, description, specialties, diseaseTags, generalTags, patientAge, patientGender } = body; // extract data from the body
   
    // creating a new Case
    const newCase = new Cases({
      title,
      description,
      specialties,
      diseaseTags,
      generalTags,
      patientAge,
      patientGender,
      createdBy: doctorId.toString()
    });

    await newCase.save();
    
    res.status(200).json({
      success: true,
      message: "post created successfully",
      case: newCase,
    });
  }
  catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      message: "internal server Error",
      error: err.message
    });
  }
}





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