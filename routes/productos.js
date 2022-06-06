var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController");

/* GET home page. */
router.get('/',productosController.index);
router.get('/crear',productosController.crear);
router.post('/',productosController.guardar);
router.post('/eliminar/:id_producto',productosController.eliminar);
router.get('/editar/:id_producto',productosController.editar);
router.post('/actualizar',productosController.actualizar);
module.exports = router;