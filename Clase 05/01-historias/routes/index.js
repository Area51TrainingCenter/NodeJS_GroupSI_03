var express = require('express');
var router = express.Router();

function EstaAutenticado(req, res, next){
//	if(!req.session.usuario) {

	if(!req.isAuthenticated()) {
		console.log("no autenticado");
		res.redirect("/");
	} else {
		next();
	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get("/home", function(req, res){
	var datos = {
		id: req.user.perfilid,
		nombre: req.user.cnombre,
		proveedor: req.user.credsocial,
		foto: req.user.cfoto
	}

	res.render("home-redsocial", datos);
	/*var datos = {
		usuario: req.user.cusuario,
		id: req.user.id
	};

	console.log("entro al home")

	res.render("home", datos);*/

	res.send("Entró");
})

module.exports = router;
