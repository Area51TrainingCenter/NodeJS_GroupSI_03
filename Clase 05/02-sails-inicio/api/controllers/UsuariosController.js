/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listar: function(req, res){
		Usuarios
			.find()
			.then(function(registros) {
				res.json(registros);
			})
			.catch(function(err){
				res.serverError(err);
			});
	},

	editar: function(req, res) {
		var datos = {id: req.params.id};

		Usuarios
			.find()
			.where(datos)
			.then(function(registros) {
				res.json(registros);
			})
			.catch(function(err){
				res.serverError(err);
			});
	},

	eliminar: function(req, res) {
		var filtro = {id: req.params.id};

		Usuarios
			.destroy(filtro)
			.then(function(registros) {
				res.json(registros);
			})
			.catch(function(err){
				res.serverError(err);
			});		


	},

	actualizar: function(req, res) {
		var filtro = {id: req.params.id};

		var datos = {
			nombres: req.body.nombres,
			apellidos: req.body.apellidos
		};

		Usuarios
			.update(filtro, datos)
			.then(function(registros) {
				res.json(registros);
			})
			.catch(function(err){
				res.serverError(err);
			});			


	},

	insertar: function(req, res) {
		var datos = {
			nombres: req.body.nombres,
			apellidos: req.body.apellidos
		};

		Usuarios
			.create(datos)
			.then(function(registros) {
				res.json(registros);
			})
			.catch(function(err){
				res.serverError(err);
			});							
	}
	
};

