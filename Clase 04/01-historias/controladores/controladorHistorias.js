var modelo = require("../modelos/modeloHistorias");

var controlador = {};

controlador.listar = function(req, res) {
	modelo.listar(function(err, registros) {
		var datos = {
			registros: registros
		};
		 res.render("listarHistorias", datos);
		//res.json(registros);
	})
}

controlador.insertar = function(req, res){
	var registro = req.body;

	modelo.insertar(registro, function(err, registros){
		if(err){
			console.log(err);
		} else {
			res.redirect("/historias/listar");
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
			res.redirect("/historias/listar")
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
			res.render("editarHistoria", datos);
		}
	})
}

controlador.actualizar = function(req, res){
	var registro = req.body;
	registro.id = req.params.id;

	modelo.actualizar(registro, function(err, registros){
		if(err) {
			console.log(err)
		} else {
			res.redirect("/historias/listar");
		}
	})
}

controlador.mostrarFormulario = function(req, res) {
	res.render("insertarHistoria");
}

module.exports = controlador;