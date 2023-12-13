// Configuración express router

const express = require('express');
const router = express.Router();


// Importamos el controlador admin.controller.js y agregamos ruta al router.get

const controller = require('../controllers/admin.controller');

router.get('/', controller.admin);
router.get('/create', controller.createItem);
router.post('/create', controller.addItem);
router.get('/edit/:id', controller.edit);
router.put('/edit/:id', controller.modify);
router.delete('/delete/:id', controller.erase);


// Exportación
module.exports = router;