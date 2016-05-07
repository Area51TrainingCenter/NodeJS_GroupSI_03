angular
	.module("app", [])
	.controller("controlador", function(){
		this.nombre = "";

		this.listaUsuarios = [
			{usuario: "usuario1", contrasena:"123"},
			{usuario: "usuario2", contrasena:"234"},
			{usuario: "usuario3", contrasena:"345"},
			{usuario: "usuario4", contrasena:"456"}
		];

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
			
			// usuario.usuario = prompt("Ingrese un nuevo valor de usuario");
			//this.editando = false;
		}
	})
	// .controller("controller", ["$http", function($http){

	// }])