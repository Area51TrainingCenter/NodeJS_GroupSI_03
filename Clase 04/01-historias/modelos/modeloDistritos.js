var conexion = require("../conexiones/connMySQL");
var q = require("q");

var modelo = {};

modelo.listar = function(cb){
	conexion.query("select * from distritos", cb);
}

modelo.listarQ = function(){
	var deferred = q.defer();
	conexion.query("select * from distritos", function(err, registros){
		if(err) {
			deferred.reject();	
		} else {
			deferred.resolve(registros);	
		}
	});
	console.log("promesa de distritos");
	return deferred.promise;
}


module.exports = modelo;