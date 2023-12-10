// Creamos el servidor de archivos estáticos
const express = require('express');

// Creamos una app
const app = express();

const PORT = 3008;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));