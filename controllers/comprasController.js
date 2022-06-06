var con=require('../config/conexion');
var cliente=require('../model/cliente');
var producto=require('../model/producto');
var compra=require('../model/compra');
var borrar=require("fs");

module.exports={
    //CRUD para tabla clientes
    index:function(req, res){
        compra.obtener(con, function (err,datos) {
            res.render('compras/index', { title: 'Compras', compras:datos });           
        });        
    },
    crear:function(req,res){
        res.render('compras/crear');
    },
    guardar:function(req,res){
        compra.insertar(con,req.body,function (err) {
            res.redirect('/compras');
        }); 
    },
    eliminar:function(req,res){
        console.log('recepcion de datos');
        console.log(req.params.id_compra);
        compra.borrar(con,req.params.id_compra,function(err){
        res.redirect('/compras');
        });   
    },
    editar:function(req,res){
        compra.retornarDatosID(con,req.params.id_compra,function(err,datos){
        res.render('compras/editar',{compra:datos[0]});
        });        
    },
    actualizar:function(req,res){
        console.log(req.body.valor);
        compra.actualizar(con,req.body,function(err){
           });
        res.redirect('/compras');
    },

}