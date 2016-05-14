/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	insertar: function(req, res) {
		var data = req.allParams();

		Usuarios
			.create(data)
			.then(function(registros){
				ServicioLog.Registrar(
					sails.config.acciones.INSERTAR, 
					sails.config.tablas.USUARIOS,
					registros[0].idUsuario, 
					0
				);
				res.redirect("/");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},

	eliminar: function(req, res) {
		var criterio = {idUsuario: req.params.id};

		Usuarios
			.destroy(criterio)
			.then(function(registros){
				ServicioLog.Registrar(
					sails.config.acciones.ELIMINAR, 
					sails.config.tablas.USUARIOS, 
					registros[0].idUsuario, 
					0
				);
				res.redirect("/");				
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	actualizar: function(req, res) {
		var criterio = {idUsuario: req.params.id};
		var data = req.allParams();

		Usuarios
			.update(criterio, data)
			.then(function(registros){
				ServicioLog.Registrar(
					sails.config.acciones.ACTUALIZAR, 
					sails.config.tablas.USUARIOS, 
					registros[0].idUsuario, 
					0
				);
				res.redirect("/");				
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	listar: function(req, res) {
		Usuarios
			.find()
			.then(function(registros){
				var data = {registros: registros};

				ServicioLog.Registrar(
					sails.config.acciones.LISTAR, 
					sails.config.tablas.USUARIOS, 
					-1, 
					0
				);

				res.view("formListar", data);
								
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	editar: function(req, res) {
		var criterio = {idUsuario: req.params.id};

		Usuarios
			.find(criterio)
			.then(function(registros){
				if(registros.length){
					var data = {
						registro: registros[0]
					}
					res.view("formEditar", data);
				} else {
					res.redirect("/");
				}
			})
	},

	formInsertar: function(req, res) {
		res.view("formInsertar");
	}
	
};

