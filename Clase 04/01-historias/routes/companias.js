var express = require("express"),
	router = express.Router(),
	controlador = require("../controladores/controladorCompanias");

router.get("/listar", controlador.listar);
router.post("/insertar", controlador.insertar);
router.get("/eliminar/:id", controlador.eliminar);
router.get("/editar/:id", controlador.editar);
router.post("/actualizar/:id", controlador.actualizar);
router.get("/formulario", controlador.mostrarFormulario);

module.exports = router;