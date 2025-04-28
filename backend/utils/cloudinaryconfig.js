const cloudinary = require('cloudinary').v2

const cloudConfig = () => {
  try {
      cloudinary.config({ 
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
      api_key:process.env.CLOUDINARY_API_KEY, 
      api_secret: process.env.CLOUDINARY_API_SECRET 
      });
  }
  catch (err) {
    console.log("error while configuring cloudinary:", err);
  }
}

cloudConfig();

module.exports = {
  cloudinary
}