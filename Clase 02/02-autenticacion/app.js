var express = require("express"),
	cookieParser = require("cookie-parser"),
	cookieSession = require("cookie-session"),
	bodyParser = require("body-parser"),
	app = express(),
	dirVistas = __dirname + "/vistas",
	motorVistas = "ejs";

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}

function fnFormLogin(req, res) {
	res.render("login");
}

function fnLogin(req, res) {
	var usuario = req.body.usuario,
		contrasena = req.body.contrasena;

	if(usuario=="sergio" && contrasena=="123"){
		req.session.user = {usuario: usuario};
		//res.render("lista");
		res.redirect("/lista-usuarios");
	} else {
		res.redirect("/");
	}
}

function fnListaUsuarios(req, res) {
	res.render("lista");
}

function fnValidar(req, res, next) {
	if(req.session.user==null) {
		res.redirect("/");
	} else {
		next();
	}
}

app.use(cookieParser());
app.use(cookieSession({secret: "123456"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set("views", dirVistas);
app.set("view engine", motorVistas);

app.get("/", fnFormLogin);
app.post("/", fnLogin);
app.get("/lista-usuarios", fnValidar, fnListaUsuarios);
app.listen(3000, fnEjecutando);


