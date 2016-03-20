var eventEmitter = require("events").EventEmitter;
var inherits = require("util").inherits;

function Reloj(){
	var self = this;

	self.mostrarHora = function(){
		var fechaHora = new Date();
		var horas = self.agregarCeros(fechaHora.getHours());
		var minutos = self.agregarCeros(fechaHora.getMinutes());
		var segundos = self.agregarCeros(fechaHora.getSeconds());

		console.log(horas + ":" + minutos + ":" + segundos);
	}

	self.agregarCeros = function(num) {
		if(num<10) {
			return ("0"+num);
		} else {
			return num;
		}
	}

	setInterval(function(){
		//self.mostrarHora();
		self.emit("actualizar hora");
	}, 1000);
}

inherits(Reloj, eventEmitter);

var reloj = new Reloj();
reloj.on("actualizar hora", function(){
	reloj.mostrarHora();
})




