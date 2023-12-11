// Configuración express router

const express = require('express');
const router = express.Router();

// Importamos el controlador auth.controller.js y agregamos ruta al router.get, post, etc

const controller = require('../controllers/auth.controller');

router.get('/login', controller.logIn);
router.post('/login', controller.validationLogin);
router.get('/register', controller.record);
router.post('/register', controller.newUser);
router.get('/logout', controller.logOut);

// Exportación
module.exports = router;