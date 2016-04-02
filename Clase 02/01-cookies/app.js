var express = require("express"),
	cookieParser = require("cookie-parser"),
	cookieSession = require("cookie-session"),
	app = express();

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}

function fnPagina(req, res) {
	req.session.cantidad || (req.session.cantidad=0);

	req.session.cantidad++;

	res.send("Página cargada: " + req.session.cantidad);
}

app.use(cookieParser());
app.use(cookieSession({secret: "123456"}));

app.get("/", fnPagina);
app.listen(3000, fnEjecutando);


