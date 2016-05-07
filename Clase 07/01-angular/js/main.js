angular
	.module("app", [])
	.controller("controlador", ["httpUsuarios", "$scope", function(httpUsuarios, $scope){
		this.nombre = "";

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
			usuario.eliminado = true;
		}

		this.editar = function(usuario){
			//alert("Usuario = " + usuario.usuario + " / Contraseña = " + usuario.contrasena);
			if(!usuario.editando) {
				usuario.editando = true;
			} else {
				usuario.editado = true;
			}

				httpUsuarios.usuarioSeleccionado = usuario;

			
			// usuario.usuario = prompt("Ingrese un nuevo valor de usuario");
			//this.editando = false;
		}
	}])
	.factory("httpUsuarios", ["$http", function($http){
		var urlBase = "http://localhost:1337";
		var rutaListar = urlBase + "/listar";

		var obj = {};
		obj.usuarioSeleccionado = {};
		obj.listar = function(){
			return $http.get(rutaListar);  // $http.get("http://localhost:1337/listar")
		};

		obj.eliminar = function(){};
		obj.actualizar = function(){};
		obj.editar = function(){};

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