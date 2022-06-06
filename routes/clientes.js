var express = require('express');
var router = express.Router();
const clientesController = require("../controllers/clientesController");

/* GET home page. */
router.get('/',clientesController.index);
router.get('/crear',clientesController.crear);
router.post('/',clientesController.guardar);
router.post('/eliminar/:id_cliente',clientesController.eliminar);
router.get('/editar/:id_cliente',clientesController.editar);
router.post('/actualizar',clientesController.actualizar);
module.exports = router;