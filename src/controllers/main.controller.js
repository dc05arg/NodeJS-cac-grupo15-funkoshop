// Exportamos un objeto con la ruta de home, contact, about y faqs de las rutas de main.routes.js, luego en main.routes .js hay que importar el controlador este.

module.exports = {
  home: (req, res) => res.send('Vista del HOME'),
  contact: (req, res) => res.send('Vista de CONTACTO'),
  about: (req, res) => res.send('Vista de NOSOTROS'),
  faqs: (req, res) => res.send('Vista de PREGUNTAS FRECUENTES')
}