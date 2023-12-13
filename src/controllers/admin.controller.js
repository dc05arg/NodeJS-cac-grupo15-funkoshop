// Creamos constantes para luego exportarlas - otra manera de hacerlo con respecto a main.controller.js

const admin = (req, res) => res.send('Vista del ADMIN');
const createItem = (req, res) => res.send('Vista para CREAR un NUEVO ITEM');
const addItem = (req, res) => res.send('Ruta para AGREGAR un NUEVO ITEM en la BASE DE DATOS');
const edit = (req, res) => res.send('Vista para EDITAR un ITEM SELECCIONADO');
const modify = (req, res) => res.send('Ruta y vista para MODIFICAR PRODUCTO del EDIT');
const erase = (req, res) => res.send('Ruta y vista para ELIMINAR un ITEM SELECCIONADO');

module.exports = { admin, createItem, addItem, edit, modify, erase };