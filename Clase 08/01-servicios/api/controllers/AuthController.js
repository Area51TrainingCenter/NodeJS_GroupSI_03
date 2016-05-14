/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res) {
		var criterio = {
				nombreUsuario: req.body.nombreUsuario,
				contrasena: req.body.contrasena
			};

		Usuarios
			.find(criterio)
			.then(function(registros){
				if(registros.length==1) {
					req.session.usuario = registros[0];
					req.session.authenticated = true;
					res.redirect("/listar");
				} else {
					res.redirect("/");
				}
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	logout: function(req, res){
		req.session.authenticated = false;
		req.session.usuario = null;

		res.redirect("/");
	}
};

