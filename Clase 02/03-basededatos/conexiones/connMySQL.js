var mysql = require("mysql"),
	opciones = {
		host: "tibajodemanda.com",
		user: "area",
		password: "123456",
		database: "bd05",
		port: 3306
	};

function fnConectado(err) {
	if(err){
		console.log(err);
	} else {
		console.log("PID = " + conn.threadId);
	}
}

var conn = mysql.createConnection(opciones);
conn.connect(fnConectado);

module.exports = conn;

