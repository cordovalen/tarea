var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController");

/* GET home page. */
router.get('/',function(req, res, next){
    res.send("Bienvenido!");
});

module.exports = router;
