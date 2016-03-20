var http = require("http"),
	fs = require("fs");

//===========================
function fnServidor(req, res) {
	function fnArchivoLeido(err, contenido){
		if(err){
			console.log(err);
			res.writeHead(500, {"content-type": "text/html"});
			res.end(err);
		} else{
			res.writeHead(200, {"content-type": "text/html"});
			res.end(contenido);
		}
	}

	fs.readFile("index.html", "utf8", fnArchivoLeido);
}

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}

http
	.createServer(fnServidor)
	.listen(3000, fnEjecutando);