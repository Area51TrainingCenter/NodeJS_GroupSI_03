angular
	.module("app", [])
	.controller("controlador", ["httpUsuarios", "$scope", function(httpUsuarios, $scope){
		this.nombre = "";

		this.accion = -1;

		var self = this;

		this.listaUsuarios = [];
		httpUsuarios
			.listar()
			.success(function(respuesta){
				self.listaUsuarios = respuesta;
				console.log(respuesta);
			})
			.catch(function(err) {
				console.log(err);
			})


/*		this.listaUsuarios = [
			{usuario: "usuario1", contrasena:"123"},
			{usuario: "usuario2", contrasena:"234"},
			{usuario: "usuario3", contrasena:"345"},
			{usuario: "usuario4", contrasena:"456"}
		];*/

		this.eliminar = function(usuario) {
			// usuario.eliminado = true;
			httpUsuarios
				.eliminar(usuario)
				.success(function(respuesta){
					self.listaUsuarios.splice(self.listaUsuarios.indexOf(usuario),1);
				})
				.catch(function(err){
					console.log(err);
				});
		}

		this.editar = function(usuario){
			//alert("Usuario = " + usuario.usuario + " / Contraseña = " + usuario.contrasena);
			this.accion=0;
			if(!usuario.editando) {
				usuario.editando = true;
			} else {
				usuario.editado = true;
			}

			this.usuarioEscogido = usuario;

				//httpUsuarios.usuarioSeleccionado = usuario;

			
			// usuario.usuario = prompt("Ingrese un nuevo valor de usuario");
			//this.editando = false;
		},

		this.ejecutar = function(){
			if(this.accion==0) {
				this.actualizar();
			} else if(this.accion==1) {
				this.agregar();
			}
		},

		this.agregar = function(){
			httpUsuarios
				.insertar(this.usuarioEscogido)
				.success(function(respuesta){
					self.accion=-1;
					self.listaUsuarios.push(respuesta);
				})
				.catch(function(err){
					console.log(err);
				})
		}

		this.actualizar = function(){
			httpUsuarios
				.actualizar(this.usuarioEscogido)
				.success(function(respuesta){
					self.accion=-1;
					console.log(respuesta);
				})
				.catch(function(err) {
					console.log(err);
				})
		}

	}])
	.factory("httpUsuarios", ["$http", function($http){
		var urlBase = "http://localhost:1337";
		var rutaListar = urlBase + "/listar";
		var rutaActualizar = urlBase + "/actualizar";
		var rutaEliminar = urlBase + "/eliminar";
		var rutaInsertar = urlBase + "/insertar";

		var obj = {};
		obj.usuarioSeleccionado = {};
		obj.listar = function(){
			return $http.get(rutaListar);  // $http.get("http://localhost:1337/listar")
		};

		obj.eliminar = function(registro){
			return $http.delete(rutaEliminar+"/"+registro.id);
		};
		obj.actualizar = function(registro){
			return $http.put(rutaActualizar+"/"+registro.id, registro);
		};
		obj.insertar = function(registro){
			return $http.post(rutaInsertar, registro);
		};

		return obj;
	}])
	.controller("controladorEdicion", ["httpUsuarios", function(httpUsuarios){

		this.mostrar = function(){
			this.usuario = httpUsuarios.usuarioSeleccionado;
		}

		// this.usuario = {usuario: ... , contrasena: ...}

	}]);
	// .controller("controller", ["$http", function($http){

	// }])