const http = require('http');

// Recupera la App de Express
const app = require('./src/app');

// Leemos el fichero de entorno
require('dotenv').config();

// Config Base de datos
require('./src/config/db');

//Creación del servidor
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

server.on('error', (error) => console.log(error));