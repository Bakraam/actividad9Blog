const AutorModel = require('../models/autor.model')
const PostModel = require('../models/post.model')

const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutorModel.selectAllAutores();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getAutorById = async (req, res) => {
    const {autorId} = req.params
    try {
        const [result] = await AutorModel.selectAutorById(autorId);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getPostsAutor = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [autores]  = await AutorModel.selectAutorById(autorId);
        for (let autor of autores) {
            const [posts] = await PostModel.selectPostsByAutor(autorId);
            autor.posts = posts
        }
        res.json(autores)
    } catch (error) {
        res.json({fatal: error.message})
    }
}

const createAutor = async (req, res) => {
    try {
        const [result] = await AutorModel.createNewAutor(req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
    
}

module.exports = {getAllAutores, getAutorById, getPostsAutor, createAutor}