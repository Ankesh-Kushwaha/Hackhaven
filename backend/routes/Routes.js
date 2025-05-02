const express = require('express');
const router = express.Router();
const { signinDoctor, signupDoctor, getDoctorProfile, uploadDoctorProfile, getAllProfile } = require('../controllers/doctorControllers');
const { createPost,updatePost, getAllPosts, getOnePost, upvotePost, getDoctorPosts, deletePost } = require('../controllers/postControllers')
const { authMiddleware } = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); // store in memory



//doctor profile section
router.post('/doctor/signup', signupDoctor);
router.post('/doctor/signin', signinDoctor);
router.get('/doctor/profile/:doctorId', authMiddleware, getDoctorProfile);
router.post('/doctor/upload/:doctorId', authMiddleware, uploadDoctorProfile);
router.get('/doctor/profiles',getAllProfile);


//post route
router.post('/post/create/:doctorId', authMiddleware,upload.single('image'),createPost);
router.put('/post/update/:id', authMiddleware, updatePost);
router.get('/post/getall',authMiddleware, getAllPosts);
router.get('/post/:id', authMiddleware,getOnePost);
router.delete('/post/delete/:id', authMiddleware, deletePost);
router.post('/post/upvote/:id', authMiddleware, upvotePost);
router.get('/post/doctor/:id', getDoctorPosts);

module.exports = router;
