var conexion = require("../conexiones/connMySQL");

var modelo = {};

modelo.listar = function(cb){
	conexion.query("select * from historias", cb);
}

modelo.insertar = function(registro, cb){
	conexion.query("insert into historias set ?", registro, cb)
}

modelo.eliminar = function(registro, cb){
	conexion.query("delete from historias where id=?", registro.id, cb);
}

modelo.editar = function(registro, cb){
	conexion.query("select * from historias where id=?", registro.id, cb);	
}

modelo.actualizar = function(registro, cb){
	conexion.query("update historias set nhistoria=?, dfecha=?, idCompania=?, crequerido=?, ccontratante=?, cpoliza=?, cautorizacion=?, cnombre=?, capellidoPaterno=?, capellidoMaterno=?, nsexo=?, cdni=?, ctelefono=?, nedad=?, nunidadEdad=?, cdireccion=?, idDistrito=?, creferencia=?, idDiagnostico=?, ntipoAtencion=?, idMedico=?, idEnfermero=?, csintomas=?, cobservaciones=?, ctratamiento=?  where id=?", [
			registro.nhistoria, 
			registro.dfecha,
			registro.idCompania,
			registro.crequerido,
			registro.ccontratante,
			registro.cpoliza,
			registro.cautorizacion,
			registro.cnombre,
			registro.capellidoPaterno,
			registro.capellidoMaterno,
			registro.nsexo,
			registro.cdni,
			registro.ctelefono,
			registro.nedad,
			registro.nunidadEdad,
			registro.cdireccion,
			registro.idDistrito,
			registro.creferencia,
			registro.idDiagnostico,
			registro.ntipoAtencion,
			registro.idMedico,
			registro.idEnfermero,
			registro.csintomas,
			registro.cobservaciones,
			registro.ctratamiento,
			registro.id], cb);
}

module.exports = modelo;