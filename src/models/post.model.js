const selectAllPosts = () => {
    return db.query('SELECT posts.*, autores.nombre AS nombre_autor, autores.email AS email_autor, autores.imagen AS imagen_autor FROM posts JOIN autores ON posts.autores_id = autores.id;');
};

const selectPostsByAutor = (autorId) => {
    //return db.query = ("SELECT * FROM posts JOIN autores ON posts.autores_id = autores.id WHERE autores.id = ?", [autorId]);
    return db.query('SELECT * FROM posts WHERE autores_id = ?', [autorId])
};

const createNewPost = ({titulo, descripcion, categoria, autores_id}) => {
    return db.query("INSERT INTO posts (titulo, descripcion, categoria, autores_id) VALUES (?,?,?,?)", [titulo, descripcion, categoria, autores_id])
};

module.exports = { selectAllPosts, selectPostsByAutor, createNewPost };
