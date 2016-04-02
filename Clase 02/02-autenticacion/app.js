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

app.use(cookieParser());
app.use(cookieSession({secret: "123456"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set("views", dirVistas);
app.set("view engine", motorVistas);

app.get("/", fnFormLogin);
app.listen(3000, fnEjecutando);


