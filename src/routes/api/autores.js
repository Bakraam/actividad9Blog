const router = require('express').Router();

const AutoresController = require('../../controllers/autores.controller');

router.get('/', AutoresController.getAllAutores);
router.get('/:autorId', AutoresController.getAutorById);
router.get('/posts/:autorId', AutoresController.getPostsAutor);
router.post('/', AutoresController.createAutor);


module.exports = router;