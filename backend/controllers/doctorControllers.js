const { Doctors } = require('../schema/Schema');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
const {signupValidate ,signinValidation } = require('../utils/zodValidation');
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
  try {
    const body = req.body;
    
    if (!body) {
      return res.status(401).json({
        success: false,
        message:"email and password is required."
      })
    }
    
    const validate = signinValidation.safeParse(body);
    if (!validate.success) {
      return res.status(402).json({
        success: false,
        message: "zod validation failed",
        error: err.message
      })
    }
    
    const { email, password } = body;
    
    //find the user
    const user = await Doctors.findOne({ email });
    //verify the enter password
    const passwordVerify = await bcrypt.compare(user.password, password);

    //creating the json web token
    const token = jwt.sign({
      _id: user._id
    }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      success: true,
      message: "user logged in Successfully",
      token:token
    })
  }
  catch (err) {
    return res.status(500).json({
      success: false,
      message: "internal server Error",
      error:err.message,
      })
  }
}

const getDoctorProfile = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const doctorProfile = await Doctors.findById(doctorId);
    if (!doctorProfile) {
      return res.status(402).json({
        success: false,
         message:'Doctor profile does not exist'
        })
    }
    
    res.status(200).json({
      success: true,
      message: "user found",
      doctorProfile:doctorProfile
    })
  }
  catch (err) {
    return res.status(500).json({
      success:false,
      message: "internal Server Error",
      error:err.message
     })
  }
}


const getAllProfile = async (req, res) => {
  try {
    const allProfile = await Doctors.find();
    res.status(200).json({
      success: true,
      message: "all profile fetched successfully",
      allProfile:allProfile
    })
  }
  catch (err) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
      error:err.message,
     })
  }
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
        streamifier.createReadStream(buffer).pipe(stream); //create the stream to upload for cloudinary
      });
    };

    const uploadResult = await streamUpload(buffer);  //image upload to cloudinary;

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
  uploadDoctorProfile,
    getAllProfile
}

