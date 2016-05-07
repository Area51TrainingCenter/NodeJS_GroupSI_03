angular
	.module("app", [])
	.controller("controlador", ["$scope", "httpMonitoreo", function($scope, httpMonitoreo){
		
		this.listaAmbulancias = [];

		var self = this;

		io.socket.get("/suscribir", function(respuesta){
			$scope.$apply(function(){
				self.listaAmbulancias = respuesta;
			})
		});

		io.socket.on("monitoreo", function(obj){
			if(obj.verb=="updated") {
				$scope.$apply(function(){
					var lista = self.listaAmbulancias;
					for(var i=0; i<lista.length; i++) {
						if(lista[i].id==obj.id) {
							lista[i] = obj.data;
						}
					}					
				})
			}
		});

		

		this.actualizar = function(ambulancia){
			httpMonitoreo
				.actualizar(ambulancia)
				.success(function(respuesta){
					console.log(respuesta);
				})
				.catch(function(err){
					console.log(err);
				})
		}

	}])
	.factory("httpMonitoreo", ["$http", function($http){
		var obj = {
			actualizar: function(registro) {
				return $http.put("/actualizar/" + registro.id, registro);
			}
		};

		return obj;
	}])

