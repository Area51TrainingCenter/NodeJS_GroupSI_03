angular
	.module("app", [])
	.controller("controlador", ["$http", function($http){

		this.generarPDF = function(){
			$http
				.post("/reporte-usuarios")
				.success(function(response){
					var binaryData = [];
					binaryData.push(response);
					var fileURL = window.URL.createObjectURL(new Blob(binaryData, {type: "application/pdf"}));


		            //var fileURL = window.URL.createObjectURL(response);   

		            var objeto = document.createElement("object");
		            objeto.width="100%";
		            objeto.height="400px";
		            objeto.type = "application/pdf";
		            objeto.data = fileURL + "#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH";

		            var contenedor = document.getElementById("contenedorPDF");
		            contenedor.innerHTML = "";
		            contenedor.appendChild(objeto);





				})
				.catch(function(err){
					console.log(err);
				})



		}


	}]);