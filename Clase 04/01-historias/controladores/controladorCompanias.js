var modelo = require("../modelos/modeloCompanias");

var controlador = {};

controlador.listar = function(req, res) {
	modelo.listar(function(err, registros) {
		var datos = {
			registros: registros
		};
		 res.render("listarCompanias", datos);
		//res.json(registros);
	})
}

controlador.insertar = function(req, res){
	var registro = {
		ccompania: req.body.ccompania
	};

	console.log(registro);

	modelo.insertar(registro, function(err, registros){
		if(err){
			console.log(err);
		} else {
			res.redirect("/companias/listar");
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
			res.redirect("/companias/listar")
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
			res.render("editarCompania", datos);
		}
	})
}

controlador.actualizar = function(req, res){
	var registro = {
		id: req.params.id,
		ccompania: req.body.ccompania
	};

	modelo.actualizar(registro, function(err, registros){
		if(err) {
			console.log(err)
		} else {
			res.redirect("/companias/listar");
		}
	})
}

controlador.mostrarFormulario = function(req, res) {
	res.render("insertarCompania");
}

module.exports = controlador;