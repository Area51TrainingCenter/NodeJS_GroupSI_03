var conexion = require("../conexiones/connMySQL");

var modelo = {};

modelo.listar = function(cb){
	conexion.query("select * from enfermeros", cb);
}

modelo.insertar = function(registro, cb){
	conexion.query("insert into enfermeros set ?", registro, cb)
}

modelo.eliminar = function(registro, cb){
	conexion.query("delete from enfermeros where id=?", registro.id, cb);
}

modelo.editar = function(registro, cb){
	conexion.query("select * from enfermeros where id=?", registro.id, cb);	
}

modelo.actualizar = function(registro, cb){
	conexion.query("update enfermeros set cnombres=?, capellidos=? where id=?", [registro.cnombres, registro.capellidos, registro.id], cb);
}

module.exports = modelo;