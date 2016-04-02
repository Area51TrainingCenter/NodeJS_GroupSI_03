var modelo = require("../modelos/modeloUsuarios");

var controlador = {};

controlador.listar = function(req, res) {
	modelo.listar(function(err, registros) {
		var datos = {
			registros: registros
		};

		res.render("listado", datos);
	})
}

controlador.insertar = function(req, res) {
	var nombre = req.body.nombre,
		apellido = req.body.apellido;

	modelo.insertar({nombre: nombre, apellido: apellido}, function(err) {
		if(err) {
			console.log(err);
		} else {
			res.redirect("/");
		}
	})
}

controlador.editar = function(req, res) {
	var id = req.params.id;

	modelo.editar(id, function(err, registros){
		var datos = {
			registro: registros[0]
		};

		res.render("editar", datos);
	});
}

controlador.eliminar = function(req, res) {
	var id = req.params.id;

	modelo.eliminar(id, function(err, registros){
		if(err) {
			console.log(err)
		} else {
			res.redirect("/");
		}
	});	
}

controlador.actualizar = function(req, res) {
	var id = req.params.id;
	var nombre = req.body.nombre,
		apellido = req.body.apellido;

	modelo.actualizar(id, {nombre:nombre, apellido:apellido}, function(err) {
		if(err) {
			console.log(err)
		} else {
			res.redirect("/");
		}
	})
}

controlador.frmInsertar = function(req, res) {
	res.render("insertar");
}








module.exports = controlador;