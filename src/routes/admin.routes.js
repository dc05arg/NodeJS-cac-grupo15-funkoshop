// Configuración express router

const express = require('express');
const router = express.Router();

// Importamos el controlador admin.controller.js y agregamos ruta al router.get

const controller = require('../controllers/admin.controller');

router.get('/', controller.admin);
router.get('/create', controller.createView);
router.post('/create', controller.createItem);
router.get('/edit/:id', controller.editView);
router.put('/edit/:id', controller.editItem);
router.delete('/delete/:id', controller.deleteItem);

// Exportación
module.exports = router;
