module.exports={
    obtener:function(conexion, funcion){
        conexion.query("SELECT * FROM clientes", funcion);
    },
    insertar:function(conexion,datos,funcion){
        conexion.query("INSERT INTO clientes (id_cliente, nombre, direccion, cedula) VALUES (?,?,?,?)",[0,datos.nombre, datos.direccion, datos.cedula], funcion);
    },
    retornarDatosID:function(conexion,id_cliente,funcion){
        conexion.query("SELECT * FROM clientes WHERE id_cliente=?",[id_cliente], funcion);
    },
    borrar:function(conexion,id_cliente,funcion){
        conexion.query("DELETE FROM clientes WHERE id_cliente=?",[id_cliente], funcion);
    },
    actualizar:function(conexion,datos,funcion){
        conexion.query("UPDATE clientes SET nombre=?, direccion=?, cedula=? WHERE id_cliente=?",[datos.nombre, datos.direccion,  datos.cedula, datos.id], funcion);
    }
}