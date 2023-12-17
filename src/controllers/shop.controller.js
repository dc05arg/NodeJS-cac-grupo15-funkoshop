module.exports = {
  shop: (req, res) => res.render('../views/shop/shop.ejs', {title: 'SHOP'}),
  item: (req, res) => res.render('../views/shop/item.ejs', {title: 'ITEM'}),
  addItem: (req, res) => res.send('Ruta para AGREGAR un nuevo ITEM'),
  cart: (req, res) => res.render('../views/shop/carrito.ejs', {title: 'CARRITO'}),
  addToCart: (req, res) => res.send('Ruta para AGREGAR ITEM al CARRITO'),
};
