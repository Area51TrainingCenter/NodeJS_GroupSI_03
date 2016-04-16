var conexion = require("../conexiones/connMySQL");

var modelo = {};

modelo.listar = function(){}

modelo.insertar = function(){}

modelo.eliminar = function(){}

modelo.editar = function(){}

modelo.actualizar = function(){}

modelo.validar = function(registro, cb){
	conexion.query("select * from usuarios where cusuario=? and ccontrasena=?", [registro.cusuario, registro.ccontrasena], cb);
}

modelo.validarRedSocial = function(perfilid, cb){
	conexion.query("select * from usuarios where perfilid=?", perfilid, cb);
}

modelo.insertarRedSocial = function(registro, cb) {
	conexion.query("insert into usuarios set ?", registro, cb);
}








module.exports = modelo;