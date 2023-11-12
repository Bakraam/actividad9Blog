const PostModel = require("../models/post.model");

// GET /api/posts
const getAllPosts = async (req, res) => {
  try {
    const [result] = await PostModel.selectAllPosts();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
  
};

// GET /api/posts/IDAUTOR
const getPostsByAutorId = async (req, res) => {
  const { postId } = req.params;
  try {
    const [result] = await PostModel.selectPostsByAutor(postId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

// POST /api/posts
const createPost = async (req, res) => {
  try {
    const [result] = await PostModel.createNewPost(req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
  
};



module.exports = { getAllPosts, createPost, getPostsByAutorId };