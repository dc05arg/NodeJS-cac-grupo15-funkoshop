// Configuración express router

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Vista del SHOP'));
router.get('/item/:id', (req, res) => res.send('Vista del ITEM SELECCIONADO'));
router.post('/item/:id/add', (req, res) => res.send('Ruta para AGREGAR un nuevo ITEM'));
router.get('/cart', (req, res) => res.send('Vista del CARRITO'));
router.post('/cart', (req, res) => res.send('Ruta para AGREGAR ITEM al CARRITO'));



// Exportación
module.exports = router;