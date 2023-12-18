const { getAll , getOne} = require('../models/product.model');

module.exports = {
  admin: async (req, res) => {
    const data = await getAll();

    res.render('../views/admin/admin.ejs', {
      title: 'ADMIN',
      data
    });
},
  createView: (req, res) => res.render('../views/admin/create-item.ejs', {title: 'CREAR ITEM'}),
  createItem: (req, res) => res.send('Ruta para AGREGAR un NUEVO ITEM en la BASE DE DATOS'),
  editView: async (req, res) => {
    const { id } = req.params;
    const [product] = await getOne({product_id: id});

    res.render('../views/admin/edit-item.ejs', {
      title: 'EDITAR ITEM',
      product
    });
  },
  editItem: (req, res) => res.send('Ruta para MODIFICAR PRODUCTO del EDIT'),
  deleteItem: (req, res) => res.send('Ruta para ELIMINAR un ITEM SELECCIONADO'),
};
