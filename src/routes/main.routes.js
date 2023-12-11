// Configuración express router

const express = require('express');
const router = express.Router();

// Importamos el controlador main.controller.js y agregamos ruta al router.get

const controller = requiere('../controllers/main.controller');

router.get('/home', controller.home);
router.get('/contact', controller.contact);
router.get('/about', controller.about);
router.get('/faqs', controller.faqs);



// Exportación
module.exports = router;