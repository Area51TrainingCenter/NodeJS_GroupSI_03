var express = require("express"),
	cookieParser = require("cookie-parser"),
	cookieSession = require("cookie-session"),
	bodyParser = require("body-parser"),
	app = express(),
	dirVistas = __dirname + "/vistas",
	motorVistas = "ejs",
	controlador = require("./controladores/controladorUsuarios");

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}



app.use(cookieParser());
app.use(cookieSession({secret: "123456"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set("views", dirVistas);
app.set("view engine", motorVistas);

app.get("/", controlador.listar);
app.get("/frmInsertar", controlador.frmInsertar);
app.post("/insertar", controlador.insertar);
app.get("/eliminar/:id", controlador.eliminar);
app.get("/editar/:id", controlador.editar);
app.post("/actualizar/:id", controlador.actualizar);


app.listen(3000, fnEjecutando);