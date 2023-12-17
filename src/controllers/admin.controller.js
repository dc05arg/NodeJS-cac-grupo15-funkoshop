module.exports = {
  admin: (req, res) => res.render('../views/admin/admin.ejs', {title: 'ADMIN'}),
  createView: (req, res) => res.render('../views/admin/create-item.ejs', {title: 'CREAR ITEM'}),
  createItem: (req, res) => res.send('Ruta para AGREGAR un NUEVO ITEM en la BASE DE DATOS'),
  editView: (req, res) => res.render('../views/admin/edit-item.ejs', {title: 'EDITAR ITEM'}),
  editItem: (req, res) => res.send('Ruta para MODIFICAR PRODUCTO del EDIT'),
  deleteItem: (req, res) => res.send('Ruta para ELIMINAR un ITEM SELECCIONADO'),
};
