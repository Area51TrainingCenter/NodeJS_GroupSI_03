/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res) {
		Usuarios
			.find()
			.then(function(registros){
				res.json(registros);
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},

	actualizar: function(req, res) {
		var criterio = {id: req.params.id};
		var data = req.allParams();

		Usuarios
			.update(criterio, data)
			.then(function(registro) {
				res.json(registro)
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},

	eliminar: function(req, res) {
		var criterio = {id: req.params.id};

		Usuarios
			.destroy(criterio)
			.then(function(registro) {
				res.json(registro)
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},

	insertar: function(req, res) {
		var data = req.allParams();

		Usuarios
			.create(data)
			.then(function(registro) {
				res.json(registro)
			})
			.catch(function(err){
				res.negotiate(err);
			})
	}

	
};

