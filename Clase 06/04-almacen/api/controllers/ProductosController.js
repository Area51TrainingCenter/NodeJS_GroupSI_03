/**
 * ProductosController
 *
 * @description :: Server-side logic for managing productos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res){

		Productos
			.find()
			.then(function(err, registros) {
				var data = {
					reg: registros
				};
				res.view("ProductosListado", data);
			})
			.catch(function(err){
				res.negotiate(err)
			});

	},

	insertar: function(req, res) {

	},

	actualizar: function(req, res) {

	},

	editar: function(req, res) {

	},

	eliminar: function(req, res) {

	}
	
};

