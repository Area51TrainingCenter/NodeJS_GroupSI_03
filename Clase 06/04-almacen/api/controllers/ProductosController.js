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
			.then(function(registros) {
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
		var datos = req.allParams();

		Productos
			.create(datos)
			.then(function(registros){
				res.redirect("/productos");
			})
			.catch(function(err){
				res.negotiate(err)
			});	},

	actualizar: function(req, res) {

	},

	editar: function(req, res) {

	},

	eliminar: function(req, res) {

	},

	formAgregar: function(req, res) {
		res.view("ProductoAgregar");
	}
	
};

