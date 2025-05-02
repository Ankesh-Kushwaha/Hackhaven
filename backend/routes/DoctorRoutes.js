const express = require('express');
const router = express.Router();
const { signinDoctor, signupDoctor, getDoctorProfile, uploadDoctorProfile, getAllProfile } = require('../controllers/doctorControllers');
const { authMiddleware } = require('../middleware/authMiddleware');


//doctor profile section
router.post('/doctor/signup', signupDoctor);
router.post('/doctor/signin', signinDoctor);
router.use(authMiddleware);
router.get('/doctor/profile/:doctorId',getDoctorProfile);
router.post('/doctor/upload/:doctorId',uploadDoctorProfile);
router.get('/doctor/profiles',getAllProfile);




module.exports = router;
