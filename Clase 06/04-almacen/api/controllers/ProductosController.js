/**
 * ProductosController
 *
 * @description :: Server-side logic for managing productos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res){
		var pagina = req.params.pag;
		
		Productos
			.count()
			.then(function(cantidad){
				var cantidadPaginas = Math.ceil(cantidad / 3);

				Productos
					.find()
					.sort("nombreProducto desc")
					.paginate({page:pagina, limit:3})
					//.sort({nombreProducto: 0, idProducto: 1})
					.then(function(registros) {
						var data = {
							reg: registros,
							paginas: cantidadPaginas,
							paginaActual: pagina
						};

						res.view("ProductosListado", data);
					})
					.catch(function(err){
						res.negotiate(err)
					});





			})
			.catch(function(err){
				res.negotiate(err);
			})


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
			});
	},

	editar: function(req, res) {
		var datos = req.allParams();
		var filtro = {idProducto: req.params.id};

		Productos
			.update(filtro, datos)
			.then(function(registros){
				res.redirect("/productos");
			})
			.catch(function(err){
				res.negotiate(err)
			});			
	},

	eliminar: function(req, res) {
		var filtro = {idProducto: req.params.id};

		Productos
			.destroy(filtro)
			.then(function(registros){
				res.redirect("/productos");
			})
			.catch(function(err){
				res.negotiate(err)
			});			


	},

	formAgregar: function(req, res) {
		res.view("ProductoAgregar");
	},

	formEditar: function(req, res) {
		var filtro = {idProducto: req.params.id};

		Productos
			.find(filtro)
			.then(function(registros) {
				var data = {
					reg: registros
				};

				res.view("ProductoEditar", data);
			});
	},

	redireccionarLista: function(req, res) {
		res.redirect("/productos/1");
	}
	
};

