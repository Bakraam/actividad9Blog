const selectAllAutores = () => {
    return db.query('SELECT * FROM autores')
};

const selectAutorById = (autorId) => {
    return db.query('SELECT * FROM autores WHERE id = ?', [autorId])
}

const createNewAutor = ({nombre, email, imagen}) => {
    return db.query('INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)', [nombre, email, imagen])
};

module.exports = {selectAllAutores, selectAutorById,createNewAutor}