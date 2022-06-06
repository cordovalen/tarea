module.exports={
    obtener:function(conexion, funcion){
        conexion.query("SELECT * FROM productos", funcion);
    },
    insertar:function(conexion,datos,funcion){
        conexion.query("INSERT INTO productos (id_producto, referencia, precio, descripcion) VALUES (?,?,?,?)",[0,datos.referencia, datos.precio, datos.descripcion], funcion);
    },
    retornarDatosID:function(conexion,id_producto,funcion){
        conexion.query("SELECT * FROM productos WHERE id_producto=?",[id_producto], funcion);
    },
    borrar:function(conexion,id_producto,funcion){
        conexion.query("DELETE FROM productos WHERE id_producto=?",[id_producto], funcion);
    },
    actualizar:function(conexion,datos,funcion){
        conexion.query("UPDATE productos SET referencia=?, precio=?, descripcion=? WHERE id_producto=?",[datos.referencia, datos.precio,  datos.descripcion, datos.id], funcion);
    }
}