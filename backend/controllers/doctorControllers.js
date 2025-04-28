const { Doctors } = require('../schema/Schema');
const bcrypt = require('bcryptjs');
const webtoken=require('jsonwebtoken')
const {signupValidate } = require('../utils/zodValidation');
const {cloudinary } = require('../utils/cloudinaryconfig');
const { FaSleigh } = require('react-icons/fa');
const streamifier = require('streamifier');

//signup
const signupDoctor = async (req, res) => {
  try {
    const body = req.body;
    //checking the zod validation
    const result = signupValidate.safeParse(body);
    if (!result.success) {
      return res.status(401).json({
        success: false,
        message: "invalid data",
        error:"zod validation error"
        })
    }

    const { fullName, email, password, licenseNumber, licenseState, licenseCountry ,bio} = body;

    //search for the previous existence of the user
    const user = await Doctors.findOne({email});
    if (user) {
      return res.status(200).json({
        success: false,
        message:"user already exist."
      })
    }

    //hash the received password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating a new user
    const newUser = new Doctors({
      fullName,
      email,
      password:hashedPassword,
      licenseNumber,
      licenseState,
      licenseCountry,
      bio
    })

    //save the newly created user
    await newUser.save();

    if (newUser) {
      return res.status(200).json({
        success: true,
        message: "user created successfully!",
        data:newUser
        })
    }
  }
  catch (err) {
    console.error("Error while signup:", err);
    res.status(500).json({
      success: false,
      message: 'something went wrong.Try after sometime',
      error:err.message,
      })
  }
}


const signinDoctor = async (req, res) => {
  res.json("user signIn done");
}

const getDoctorProfile = async (req, res) => {
  res.json("doctor profile fetched successfully");
}




const uploadDoctorProfile = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const buffer = req.body; // Buffer directly

    if (!buffer || buffer.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No file provided",
      });
    }

    const user = await Doctors.findById(doctorId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exist",
      });
    }

    // Upload buffer to Cloudinary using stream
    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: 'doctor-profiles',
            resource_type: 'image',
          },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        streamifier.createReadStream(buffer).pipe(stream);
      });
    };

    const uploadResult = await streamUpload(buffer);
    
    // Update doctor document
    const updatedDoctor = await Doctors.findByIdAndUpdate(
      doctorId,
      {
        profilePicture: {
          url: uploadResult.secure_url,
          publicId: uploadResult.public_id,
        },
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (updatedDoctor) {
      res.status(200).json({
        success: true,
        message: "Profile picture updated successfully!",
        data: updatedDoctor,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Profile update failed",
      });
    }
  } catch (err) {
    console.error('Error in uploadDoctorProfile:', err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};


module.exports={
    signinDoctor,
    signupDoctor,
    getDoctorProfile,
    uploadDoctorProfile
}

