var conexion = require("../conexiones/connMySQL");

var modelo = {};

modelo.listar = function(cb) {
	conexion.query("select * from usuarios", cb);
}

modelo.insertar = function(registro, cb) {
	conexion.query("insert into usuarios set ?", registro, cb);
}

modelo.editar = function(id, cb) {
	conexion.query("select * from usuarios where id=?", id, cb);
}

modelo.eliminar = function(id, cb){
	conexion.query("delete from usuarios where id=?", id, cb);
}

modelo.actualizar = function(id, registro, cb) {
	conexion.query("update usuarios set nombre=?, apellido=? where id=?",[registro.nombre, registro.apellido, id], cb);
}

module.exports = modelo;


