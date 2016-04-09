// npm install supervisor -g
// Si es necesario en MAC o Linux, anteponer "sudo"

// Se ejecuta "supervisor app"

var express = require("express"),
	app = express();

function fnHome(req, res) {
	res.send("Home Principal");
}

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}

app.get("/", fnHome);
app.listen(3000, fnEjecutando);