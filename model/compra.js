module.exports={
    obtener:function(conexion, funcion){
        conexion.query("SELECT * FROM compras", funcion);
    },
    insertar:function(conexion,datos,funcion){
        conexion.query("INSERT INTO compras (id_compra, nombre, direccion, cedula) VALUES (?,?,?,?)",[0,datos.nombre, datos.direccion, datos.cedula], funcion);
    },
    retornarDatosID:function(conexion,id_compra,funcion){
        conexion.query("SELECT * FROM compras WHERE id_compra=?",[id_compra], funcion);
    },
    borrar:function(conexion,id_compra,funcion){
        conexion.query("DELETE FROM compras WHERE id_compra=?",[id_compra], funcion);
    },
    actualizar:function(conexion,datos,funcion){
        conexion.query("UPDATE compras SET nombre=?, direccion=?, cedula=? WHERE id_compra=?",[datos.nombre, datos.direccion,  datos.cedula, datos.id], funcion);
    }
}