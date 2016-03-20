var http = require("http").createServer();

//====================
function fnServidor(req, res){
		console.log("Ocurrió una requisición");
		res.writeHead(200, {"content-type": "text/html"});
		res.write("<h1>Encabezado de la página</h1>");
		res.end("Mensaje de respuesta");
	}

function fnEjecutando(){
		console.log("Escuchando en el puerto 3000");
	}


http
	.on("request", fnServidor)
	.listen(3000, fnEjecutando);

