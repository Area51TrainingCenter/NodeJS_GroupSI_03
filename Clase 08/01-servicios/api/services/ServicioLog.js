module.exports = {
	Registrar: function(accion, tabla, idTransaccion, idUsuario){
		var data = {
						accion: accion, 
						tabla: tabla,
						idTransaccion: idTransaccion,
						idUsuario: idUsuario
					};
					
		Log
			.create(data)
			.then(function(registro){

			})
			.catch(function(err){

			});
	}
}