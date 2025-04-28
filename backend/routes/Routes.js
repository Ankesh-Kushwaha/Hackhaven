const express = require('express');
const router = express.Router();
const { signinDoctor, signupDoctor, getDoctorProfile, uploadDoctorFiles } = require('../controllers/doctorControllers');
const { createPost, updatePost, getAllPosts, getOnePost, upvotePost, getDoctorPosts, deletePost } = require('../controllers/postControllers')
const {authMiddleware} =require('../middleware/authMiddleware')


//doctor profile section
router.post('/signup', signupDoctor);
router.post('/login', signinDoctor);
router.get('/profile', authMiddleware, getDoctorProfile);
router.post('/upload', authMiddleware, uploadDoctorFiles);


//post route
router.post('/create/:doctorId', authMiddleware, createPost);
router.put('/update/:id', authMiddleware, updatePost);
router.get('/getall', getAllPosts);
router.get('/:id', getOnePost);
router.delete('/delete/:id', authMiddleware, deletePost);
router.post('/upvote/:id', authMiddleware, upvotePost);
router.get('/doctor/:doctorId', getDoctorPosts);

module.exports = router;
