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
		usuario: req.user.cusuario,
		id: req.user.id
	};

	console.log("entro al home")

	res.render("home", datos);
})

module.exports = router;
