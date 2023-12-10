// Configuración express router

const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => res.send('Vista del HOME'));
router.get('/contact', (req, res) => res.send('Vista de CONTACTO'));
router.get('/about', (req, res) => res.send('Vista de NOSOTROS'));
router.get('/faqs', (req, res) => res.send('Vista de PREGUNTAS FRECUENTES'));



// Exportación
module.exports = router;