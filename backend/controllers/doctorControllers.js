//signup
const signupDoctor = async (req, res) => {
  res.json("user signUp done");
}


const signinDoctor = async (req, res) => {
  res.json("user signIn done");
}

const getDoctorProfile = async (req, res) => {
  res.json("doctor profile fetched successfully");
}

const uploadDoctorFiles = async (req, res) => {
  res.json("doctore upload files successfully");
}


module.exports={
    signinDoctor,
    signupDoctor,
    getDoctorProfile,
    uploadDoctorFiles
}

