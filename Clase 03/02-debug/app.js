// Instalar de forma global "node-inspector"
// Ejecutar "node-inspector". Se obtendrá una url. Ponerla en el navegador.
// Ejecutar el script. Ej. node --debug app. Luego abrir el servidor en el navegador

var express = require("express"),
	app = express();

function fnHome(req, res) {
	var fecha = new Date();
	var horas = fecha.getHours();
	var minutos = fecha.getMinutes();

	var cHoras = horas>9 ? horas: ("0"+horas);
	var cMinutos = minutos>9 ? minutos : ("0"+minutos);

	res.send("Hora Actual = " + cHoras + ":" + cMinutos);
}

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}

app.get("/", fnHome);
app.listen(3000, fnEjecutando);