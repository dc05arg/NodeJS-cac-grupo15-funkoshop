// Exportamos un objeto con la ruta de home, contact, about y faqs de las rutas de main.routes.js, luego en main.routes .js hay que importar el controlador este.

module.exports = {
  home: (req, res) => res.render('../views/index.ejs', {title: 'HOME'}),
  contacto: (req, res) => res.render('../views/contacto.ejs', {title: 'CONTACTO'}),
  about: (req, res) => res.send('Vista de NOSOTROS'),
  faqs: (req, res) => res.send('Vista de PREGUNTAS FRECUENTES'),
};
