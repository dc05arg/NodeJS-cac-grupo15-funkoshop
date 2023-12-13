const shop = (req, res) => res.send('Vista del SHOP');
const shopItem = (req, res) => res.send('Vista del ITEM SELECCIONADO');
const addShopItem = (req, res) => res.send('Ruta para AGREGAR un nuevo ITEM');
const cart = (req, res) => res.send('Vista del CARRITO');
const addCart = (req, res) => res.send('Ruta para AGREGAR ITEM al CARRITO');

module.exports = { shop, shopItem, addShopItem, cart, addCart };