var events = require("events");
var eventEmitter = events.EventEmitter;

var pub = new eventEmitter();

pub.on("mi propio evento", function(){
	console.log("Se ejecutó el evento");
});

pub.on("mi propio evento", function(){
	console.log("Se ejecutó el segundo callback");
});

pub.once("mi propio evento", function(){
	console.log("Solo se ejecuta una vez");
})

pub.emit("mi propio evento");
pub.emit("mi propio evento");



