/**
 * CorreosController
 *
 * @description :: Server-side logic for managing correos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var MailGun = require("mailgun").Mailgun; 
var mg = new MailGun('key-5752542242109c4a7436ae9214823083');

var apiKey = sails.config.credenciales.mailgun.apiKey;
var domain = sails.config.credenciales.mailgun.dominio;

var mailgun = require("mailgun-js")({apiKey: apiKey, domain: domain});

module.exports = {
	enviarAdjunto: function(req, res) { 
		var data = {
			from: "admin@area51.pe",
			to: "sergiohidalgocaceres@gmail.com",
			subject: "Correo de prueba",
			html: "Gracias por su consulta. Le adjuntamos la cotización.",
			attachment: ["./adjuntos/cotizacion.pdf", "./adjuntos/office.pdf"]
		};

		mailgun.messages().send(data, function (error, body) {
  			res.send("El correo fue enviado");
		});
	},	


	enviarHTML: function(req, res) { 
		var data = {
			from: "admin@area51.pe",
			to: "sergiohidalgocaceres@gmail.com",
			subject: "Correo de prueba",
			html: "La cotización ha sido enviada.<br>Haga <a href='#'>Clic aquí</a>"
		};

		mailgun.messages().send(data, function (error, body) {
  			res.send("El correo fue enviado");
		});
	},	


	enviarTexto: function(req, res) { 
		var data = {
			from: "admin@area51.pe",
			to: "sergiohidalgocaceres@gmail.com",
			subject: "Correo de prueba",
			text: "Cuerpo del correo enviado"
		};

		mailgun.messages().send(data, function (error, body) {
  			res.send("El correo fue enviado");
		});



/*		mg.sendText(
			"admin@area51.pe", //Remitente
			"sergiohidalgocaceres@gmail.com", // Destinatario
			"Correo enviado desde el curso de NodeJS", // Asunto
			"Esta es una prueba de envío desde SailsJS", // Cuerpo
			"replay@area51.pe", // Correo de respuesta
			{}, // El servidor de Mailgun
			function(err){ // Función de callback
				res.send("Correo Enviado");
			}
		);*/
	}
};

