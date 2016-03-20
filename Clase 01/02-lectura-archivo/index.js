//Instancia la librería fs que forma parte del core de NodeJS
var fs = require("fs");

//Lee un archivo y usa una función de callback.
//El primer parámetro es el archivo y su ubicación
//El segundo parámetro es la encodificación
//El tercero es la función de callback
fs.readFile("data.txt", "utf8", function(err, contenido){
	if(err){
		console.log(err);
	} else {
		console.log(contenido)
	}
})