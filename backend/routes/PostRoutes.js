const express = require('express');
const router = express.Router();
const { createPost,updatePost, getAllPosts, getOnePost, upvotePost, getDoctorPosts, deletePost,downvotePost,globalSearch } = require('../controllers/postControllers')
const { authMiddleware } = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); // store in memory


router.use(authMiddleware);  //secure all the route with the authMiddleware;
router.post('/post/create',upload.single('image'),createPost);
router.put('/post/update/:id', updatePost);
router.get('/post/getall', getAllPosts);
router.get('/post/globalsearch', globalSearch);//comes above the getOnePost route
router.get('/post/:id',getOnePost);
router.delete('/post/delete/:id', deletePost);
router.post('/post/upvote/:id', upvotePost);
router.post('/post/downvote/:id', downvotePost);
router.get('/post/doctor/:id', getDoctorPosts);




module.exports = router;