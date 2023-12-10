// Creamos el servidor de archivos estáticos
const express = require('express');

// Creamos una app
const app = express();

// Definición de rutas
// se hace en carpeta Routes y acá las llamamos
// --------------

// Routes Imports 
const mainRoutes = require('./src/routes/main.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');
const shopRoutes = require('./src/routes/shop.routes');
// --------------



const PORT = 3008;

app.use(express.static('public'));

// Configuramos las routes importadas para utilizarlos con middleware
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));