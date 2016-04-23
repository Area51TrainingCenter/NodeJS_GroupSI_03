var mysql = require("mysql"),
	opciones = {
		host: "127.0.0.1",
		user: "root",
		password: "123456",
		database: "bd_historias",
		port: 3306
	};

function fnConectado(err) {
	if(err){
		console.log(err);
	} else {
		console.log("PID = " + conexion.threadId);
	}
}

var conexion = mysql.createConnection(opciones);

conexion.connect(fnConectado);

module.exports = conexion;