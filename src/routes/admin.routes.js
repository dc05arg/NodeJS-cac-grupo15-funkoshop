// Configuración express router

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Vista del ADMIN'));
router.get('/create', (req, res) => res.send('Vista para CREAR un NUEVO ITEM'));
router.post('/create', (req, res) => res.send('Ruta para AGREGAR un NUEVO ITEM en la BASE DE DATOS'));
router.get('/edit/:id', (req, res) => res.send('Vista para EDITAR un ITEM SELECCIONADO'));
router.put('/edit/:id', (req, res) => res.send('Ruta y vista para MODIFICAR PRODUCTO del EDIT '));
router.delete('/delete/:id', (req, res) => res.send('Ruta y vista para ELIMINAR un ITEM SELECCIONADO'));


// Exportación
module.exports = router;