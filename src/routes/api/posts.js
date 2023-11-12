const router = require("express").Router();

const PostsController = require("../../controllers/posts.controller");

router.get('/', PostsController.getAllPosts);
router.post('/', PostsController.createPost);

module.exports = router;
