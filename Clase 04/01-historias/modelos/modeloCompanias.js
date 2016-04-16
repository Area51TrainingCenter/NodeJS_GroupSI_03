var conexion = require("../conexiones/connMySQL");

var modelo = {};

modelo.listar = function(cb){
	conexion.query("select * from companias", cb);
}

modelo.insertar = function(registro, cb){
	conexion.query("insert into companias set ?", registro, cb)
}

modelo.eliminar = function(registro, cb){
	conexion.query("delete from companias where id=?", registro.id, cb);
}

modelo.editar = function(registro, cb){
	conexion.query("select * from companias where id=?", registro.id, cb);	
}

modelo.actualizar = function(registro, cb){
	conexion.query("update companias set ccompania=?  where id=?", [registro.ccompania, registro.id], cb);
}

module.exports = modelo;