var http = require("http"),
	fs = require("fs"),
	path = require("path");

var rutas = [
	{ruta: "home", archivo: "home.html"},
	{ruta: "contacto", archivo: "contacto.html"},
	{ruta: "portafolio", archivo: "portafolio.html"},
	{ruta: "servicios", archivo: "servicios.html"}
];

//==========================
function fnServidor(req, res) {
	var rutaReq = path.basename(req.url);
	var archivoAEnviar = "";
	console.log("ruta=" + req.url);

	function fnArchivoLeido(err, contenido) {
		if(err) {
			console.log(err);
			res.writeHead(500, {"content-type": "text/html"});
			res.end(err);
		} else {
			res.writeHead(200, {"content-type": "text/html"});
			res.end(contenido);	
		}
	}

	rutas.forEach(function(item){
		if(item.ruta==rutaReq) archivoAEnviar=item.archivo;
	});

	if(archivoAEnviar) {
		fs.readFile(archivoAEnviar, "utf8", fnArchivoLeido);	
	} else {
		res.writeHead(404, {"content-type": "text/html"});
		res.end("<h1>Página no encontrada</h1>");
	}
	

}

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}


http
	.createServer(fnServidor)
	.listen(3000, fnEjecutando);