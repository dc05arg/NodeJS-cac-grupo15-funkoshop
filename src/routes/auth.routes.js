// Configuración express router

const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

// Importamos el controlador auth.controller.js y agregamos ruta al router.get, post, etc

const controller = require('../controllers/auth.controller');

router.get('/login', controller.login);
router.post('/login', controller.doLogin);
router.get('/register', controller.register);
router.post('/register', controller.doRegister);
router.get('/logout', controller.logout);

// Exportación
module.exports = router;
