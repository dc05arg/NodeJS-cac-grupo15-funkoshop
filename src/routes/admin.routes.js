// Configuración express router

const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles');
// Importamos el controlador admin.controller.js y agregamos ruta al router.get

const controller = require('../controllers/admin.controller');

const isLogged = (req, res, next) => {
    if (req.session.isLogged) {
        return next();
    };
    
    return res.status(401).send('Debes loguearte para entrar a esta Vista');
}

router.get('/', isLogged, controller.admin);
router.get('/create', isLogged, controller.createView);
router.post('/create', isLogged, upload.array('imagenes', 2), controller.createItem);
router.get('/edit/:id', isLogged, controller.editView);
router.put('/edit/:id', isLogged, upload.array('imagenes', 2), controller.editItem);
router.delete('/delete/:id', isLogged, controller.deleteItem);

// Exportación
module.exports = router;
