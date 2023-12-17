module.exports = {
  login: (req, res) => res.render('../views/auth/login.ejs', {title: 'INGRESAR'}),
  doLogin: (req, res) => res.send('Esta es la ruta que valida los datos del LOGIN'),
  register: (req, res) => res.render('../views/auth/register.ejs', {title: 'REGISTRO'}),
  doRegister: (req, res) => res.send('Esta es la ruta que CREA un NUEVO USUARIO'),
  logout: (req, res) => res.send('Esta ruta desloguea o cierra la sesión del usuario'),
};
