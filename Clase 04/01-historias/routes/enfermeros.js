var express = require("express"),
	router = express.Router(),
	controlador = require("../controladores/controladorEnfermeros");

function EstaAutenticado(req, res, next){
//	if(!req.session.usuario) {
	if(!req.isAuthenticated()) {
		res.redirect("/");
	} else {
		next();
	}
}
router.get("/listar", EstaAutenticado, controlador.listar);
router.post("/insertar", EstaAutenticado, controlador.insertar);
router.get("/eliminar/:id", EstaAutenticado, controlador.eliminar);
router.get("/editar/:id", EstaAutenticado, controlador.editar);
router.post("/actualizar/:id", EstaAutenticado, controlador.actualizar);
router.get("/formulario", EstaAutenticado, controlador.mostrarFormulario);

module.exports = router;