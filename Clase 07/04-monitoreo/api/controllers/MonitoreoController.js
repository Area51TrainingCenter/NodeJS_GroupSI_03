/**
 * MonitoreoController
 *
 * @description :: Server-side logic for managing monitoreos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	suscribir: function(req, res) {
		Monitoreo
			.find()
			.then(function(registros){
				if(req.isSocket) {
					console.log("suscrito");
					Monitoreo.subscribe(req, registros);
					Monitoreo.watch(req);
				}
				
				res.json(registros);
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	insertar: function(req, res) {
		var data = req.allParams();

		Monitoreo
			.create(data)
			.then(function(registro) {
				Monitoreo.publishCreate(registro, req);
				return res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},

	actualizar: function(req, res) {
		var data = req.allParams();
		var criterio = {id: req.params.id};

		Monitoreo
			.update(criterio, data)
			.then(function(registros){
				Monitoreo.publishUpdate(registros[0].id, registros[0]);
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},

	eliminar: function(req, res) {
		var criterio = {id: req.params.id};

		Monitoreo
			.destroy(criterio)
			.then(function(registros){
				Monitoreo.publishDestroy(registros[0].id, req);
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			})
	}

	
};

