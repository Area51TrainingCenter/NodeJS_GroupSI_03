var express = require("express"),
	router = express.Router(),
	controlador = require("../controladores/controladorUsuarios");

router.post("/validar", controlador.validar);

module.exports = router;