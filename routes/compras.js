var express = require('express');
var router = express.Router();
const comprasController = require("../controllers/comprasController");

/* GET home page. */
router.get('/',comprasController.index);
router.get('/crear',comprasController.crear);
router.post('/',comprasController.guardar);
router.post('/eliminar/:id_compra',comprasController.eliminar);
router.get('/editar/:id_compra',comprasController.editar);
router.post('/actualizar',comprasController.actualizar);
module.exports = router;