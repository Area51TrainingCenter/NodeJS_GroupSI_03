var conexion = require("../conexiones/connMySQL");

var modelo = {};

modelo.listar = function(cb){
	conexion.query("select * from medicos", cb);
}

modelo.insertar = function(registro, cb){
	conexion.query("insert into medicos set ?", registro, cb)
}

modelo.eliminar = function(registro, cb){
	conexion.query("delete from medicos where id=?", registro.id, cb);
}

modelo.editar = function(registro, cb){
	conexion.query("select * from medicos where id=?", registro.id, cb);	
}

modelo.actualizar = function(registro, cb){
	conexion.query("update medicos set cnombres=?, capellidos=? where id=?", [registro.cnombres, registro.capellidos, registro.id], cb);
}

module.exports = modelo;