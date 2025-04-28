const express = require('express');
const router = express.Router();
const { signinDoctor, signupDoctor, getDoctorProfile, uploadDoctorProfile } = require('../controllers/doctorControllers');
const { createPost, updatePost, getAllPosts, getOnePost, upvotePost, getDoctorPosts, deletePost } = require('../controllers/postControllers')
const {authMiddleware} =require('../middleware/authMiddleware')


//doctor profile section
router.post('/doctor/signup', signupDoctor);
router.post('/doctor/login', signinDoctor);
router.get('/doctor/profile', authMiddleware, getDoctorProfile);
router.post('/doctor/upload/:doctorId', authMiddleware, uploadDoctorProfile);


//post route
router.post('/create/:doctorId', authMiddleware, createPost);
router.put('/update/:id', authMiddleware, updatePost);
router.get('/getall', getAllPosts);
router.get('/:id', getOnePost);
router.delete('/delete/:id', authMiddleware, deletePost);
router.post('/upvote/:id', authMiddleware, upvotePost);
router.get('/doctor/:doctorId', getDoctorPosts);

module.exports = router;
