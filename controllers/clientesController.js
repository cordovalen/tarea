var con=require('../config/conexion');
var cliente=require('../model/cliente');
var borrar=require("fs");

module.exports={
    //CRUD para tabla clientes
    index:function(req, res){
        cliente.obtener(con, function (err,datos) {
            res.render('clientes/index', { title: 'Clientes', clientes:datos });           
        });        
    },
    crear:function(req,res){
        res.render('clientes/crear');
    },
    guardar:function(req,res){
        cliente.insertar(con,req.body,function (err) {
            res.redirect('/clientes');
        }); 
    },
    eliminar:function(req,res){
        console.log('recepcion de datos');
        console.log(req.params.id_cliente);
        cliente.borrar(con,req.params.id_cliente,function(err){
        res.redirect('/clientes');
        });   
    },
    editar:function(req,res){
        cliente.retornarDatosID(con,req.params.id_cliente,function(err,datos){
        res.render('clientes/editar',{cliente:datos[0]});
        });        
    },
    actualizar:function(req,res){
        console.log(req.body.cedula);
        cliente.actualizar(con,req.body,function(err){
           });
        res.redirect('/clientes');
    },

}