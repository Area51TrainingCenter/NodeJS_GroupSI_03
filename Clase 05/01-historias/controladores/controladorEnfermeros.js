var modelo = require("../modelos/modeloEnfermeros");

var controlador = {};

controlador.listar = function(req, res) {
	modelo.listar(function(err, registros) {
		var datos = {
			registros: registros
		};
		res.render("listarEnfermeros", datos);
	})
}

controlador.insertar = function(req, res){
	var registro = {
		cnombres: req.body.cnombres,
		capellidos: req.body.capellidos
	};

	modelo.insertar(registro, function(err, registros){
		if(err){
			console.log(err);
		} else {
			res.redirect("/enfermeros/listar");
		}
	})
}

controlador.eliminar = function(req, res) {
	var registro = {
		id: req.params.id
	};

	modelo.eliminar(registro, function(err, registros){
		if(err) {
			console.log(err)
		} else {
			res.redirect("/enfermeros/listar")
		}
	})
}

controlador.editar = function(req, res) {
	var registro = {
		id: req.params.id
	};

	modelo.editar(registro, function(err, registros){
		if(err) {
			console.log(err);
		} else {
			var datos = {
				registro: registros[0]
			};
			res.render("editarEnfermero", datos);
		}
	})
}

controlador.actualizar = function(req, res){
	var registro = {
		id: req.params.id,
		cnombres: req.body.cnombres,
		capellidos: req.body.capellidos
	};

	modelo.actualizar(registro, function(err, registros){
		if(err) {
			console.log(err)
		} else {
			res.redirect("/enfermeros/listar");
		}
	})
}

controlador.mostrarFormulario = function(req, res) {
	res.render("insertarEnfermero");
}

module.exports = controlador;