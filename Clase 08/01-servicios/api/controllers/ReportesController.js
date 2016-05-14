/**
 * ReportesController
 *
 * @description :: Server-side logic for managing reportes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var EJS = require("ejs2");
var phantom = require("node-phantom-simple");
var fs = require("fs");

module.exports = {

	repListadoUsuarios: function(req, res) {
		var ejs = new EJS();
		
		Usuarios
			.find()
			.then(function(registros){
				var data = {registros: registros};
//////////////////
				ejs.renderFile(
					sails.config.reportes.VISTA_LISTADO_USUARIOS, 
					data, 
					function(err, html) {
							
						phantom.create(function(err, ph){
							if(err) {
								return res.negotiate(err);
							}

							ph.createPage(function(err, page){
								page.setting = {
									loadImages: true,
									localToRemoteUrlAccessEnabled: true,
									javascriptEnabled: true,
									loadPlugins: false
								};

								page.set("viewportSize", {width: 800, height: 600});

								page.set("paperSize", {
									format: "A4",
									orientation: "landscape",
									border: "0.5cm",
									header: {
										height: "2cm",
										contents: 'function(pageNum, numPages) { return "Página " + pageNum + " de " + numPages; }'
									}
								});

						      	page.set('content', html, function(err) {
						        	if(err) {}
						      	});



							    page.onLoadFinished = function(status) {
							    	if(status=="success") {
							    		setTimeout(function () {
									    	page.render("pdfs/reporte.pdf", {format: "pdf"}, function (err) {
									        	if (err) {
									          		console.log('Error rendering PDF: %s', err);
									          		res.negotiate(err);
									          	} else {
									          		fs.readFile("pdfs/reporte.pdf", function(err, contenido){
									          			if(err) res.negotiate(err);
									          			res.set('Content-Type', 'application/pdf');
									          			res.send(contenido);
									      				ph.exit();
									          		});
									          		console.log("PDF GENERATED");
									      	  	}
								        	});
									    }, 200);  	
								    } else {
								    	ph.exit();
								    }
							    }

							});
						});
						//res.ok();
					}
				)


//////////////////





			})
			.catch(function(err){

			});






	}
	
};

