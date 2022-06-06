var con=require('../config/conexion');
var producto=require('../model/producto');
var borrar=require("fs");

module.exports={
    //CRUD para tabla productos
    index:function(req, res){
        producto.obtener(con, function (err,datos) {
            //console.log(datos); 
            res.render('productos/index', { title: 'Productos', productos:datos });           
        });        
    },
    crear:function(req,res){
        res.render('productos/crear');
    },
    guardar:function(req,res){
        producto.insertar(con,req.body,function (err) {
        res.redirect('/productos');
        }); 
    },
    eliminar:function(req,res){
        console.log('recepcion de datos');
        console.log(req.params.id_producto);
        producto.borrar(con,req.params.id_producto,function(err){
        res.redirect('/productos');
        });   
    },
    editar:function(req,res){
        producto.retornarDatosID(con,req.params.id_producto,function(err,datos){
        //console.log(datos[0]);
        res.render('productos/editar',{producto:datos[0]});
        });        
    },
    actualizar:function(req,res){
        console.log(req.body.precio);        
        producto.actualizar(con,req.body,function(err){
           });
        res.redirect('/productos');
    },

}