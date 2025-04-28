const createPost = async (req, res) => {
  res.json('post created successfully');
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