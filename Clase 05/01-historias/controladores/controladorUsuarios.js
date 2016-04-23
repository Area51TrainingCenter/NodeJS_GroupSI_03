var modelo = require("../modelos/modeloUsuarios");

var controlador = {};

controlador.logout = function(req, res) {
	req.session.usuario=null;
	res.redirect("/");
}

controlador.validar = function(req, res){
	var registro = {
		cusuario: req.body.cusuario,
		ccontrasena: req.body.ccontrasena
	};

	modelo.validar(registro, function(err, registros){
		if(registros.length==0){
			req.session.usuario = null;
			res.redirect("/");
		} else {
			req.session.usuario = {
				nombre: registros[0].cusuario
			};
			res.redirect("/home");
			// res.render("home");
		}
	})
};

module.exports = controlador;