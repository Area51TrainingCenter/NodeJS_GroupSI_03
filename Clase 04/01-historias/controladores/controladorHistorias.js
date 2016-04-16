var modelo = require("../modelos/modeloHistorias");
var modeloCompania = require("../modelos/modeloCompanias");
var modeloDistrito = require("../modelos/modeloDistritos");
var modeloDiagnostico = require("../modelos/modeloDiagnosticos");
var modeloMedico = require("../modelos/modeloMedicos");
var modeloEnfermero = require("../modelos/modeloEnfermeros");


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
	var datos = {};


	modeloCompania.listarQ(function(err, registros){
		var datos = {};
		if(err) {console.log(err)}
		else {

			modeloCompania.listarQ()
				.then(function(registros){
					datos.companias = registros;
					console.log("se cumplió");
					return modeloDistrito.listarQ();
				})
				.then(function(registros) {
					datos.distritos = registros;
					return modeloDiagnostico.listarQ();
				})
				.then(function(registros){
					datos.diagnosticos = registros;
					return modeloMedico.listarQ();
				})
				.then(function(registros) {
					datos.medicos = registros;
					return modeloEnfermero.listarQ();
				})
				.then(function(registros){
					datos.enfemeros = registros;
					res.render("insertarHistoria", datos);
				})
				.catch(function(err){
					console.log(err);
				})


		}
	});
	
}

module.exports = controlador;








