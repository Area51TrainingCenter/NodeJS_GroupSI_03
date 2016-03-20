var express = require("express"),
	app = express(),
	motorVistas = "ejs",
	rutaVistas = (__dirname + "/vistas"),
	directorioPublico = (__dirname + "/publico");


function fnHome(req, res){
	res.send("<h1>Home</h1>");
}

function fnContacto(req, res) {
	res.sendFile(__dirname + "/contacto.html");
}

function fnEjecutando(req, res) {
	console.log("Ejecutando en el puerto 3000");
}

function fnLogin(req, res) {
	res.sendFile(__dirname + "/login.html");
}

function fnNoAutorizado(req, res) {
	res.redirect("/login");
}

function fnListado(req, res){
	var data = {
		titulo: "Frutas",
		items: ["manzanas", "peras", "papayas", "mangos"]
	};

	res.render("listado", data);
}

app.set("view engine", motorVistas);
app.set("views", rutaVistas);

app.use(express.static(directorioPublico));

app.get("/home", fnHome);
app.get("/contacto", fnContacto);
app.get("/login", fnLogin);
app.get("/noautorizado", fnNoAutorizado);
app.get("/listado", fnListado);


app.listen(3000, fnEjecutando);