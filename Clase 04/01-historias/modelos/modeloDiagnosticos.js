var conexion = require("../conexiones/connMySQL");

var modelo = {};

modelo.listar = function(cb){
	conexion.query("select * from diagnosticos", cb);
}

modelo.listarQ = function(){
	var deferred = q.defer();
	conexion.query("select * from diagnosticos", function(err, registros){
		if(err) {
			deferred.reject();	
		} else {
			deferred.resolve(registros);	
		}
	});
	return deferred.promise;
}

module.exports = modelo;