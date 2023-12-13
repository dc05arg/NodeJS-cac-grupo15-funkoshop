const logIn = (req, res) => res.send('Vista del LOGIN');
const validationLogin = (req, res) => res.send('Ruta de validación del LOGIN');
const record = (req, res) => res.send('Vista del REGISTRO');
const newUser = (req, res) => res.send('Ruta de CREACIÓN de un NUEVO USUARIO');
const logOut = (req, res) => res.send('Ruta que DESLOGUEA / CIERRA sesión USUARIO');


modules.exports = { logIn, validationLogin, record, newUser, logOut };