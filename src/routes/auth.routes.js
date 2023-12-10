// Configuración express router

const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.send('Vista del LOGIN'));
router.post('/login', (req, res) => res.send('Ruta de validación del LOGIN'));
router.get('/register', (req, res) => res.send('Vista del REGISTRO'));
router.post('/register', (req, res) => res.send('Ruta de CREACIÓN de un NUEVO USUARIO'));
router.get('/logout', (req, res) => res.send('Ruta que DESLOGUEA / CIERRA sesión USUARIO'))

// Exportación
module.exports = router;