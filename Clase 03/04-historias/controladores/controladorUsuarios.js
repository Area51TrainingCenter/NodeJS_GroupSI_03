var modelo = require("../modelos/modeloUsuarios");

var controlador = {};

controlador.validar = function(req, res){
	var registro = {
		cusuario: req.body.cusuario,
		ccontrasena: req.body.ccontrasena
	};

	modelo.validar(registro, function(err, registros){
		if(registros.length==0){
			res.redirect("/");
		} else {
			res.render("home");
		}
	})
};

module.exports = controlador;