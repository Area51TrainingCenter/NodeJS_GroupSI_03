function Contador() {
	var obj = {};


	obj.cantidad=0;

	obj.aumentar = function(){
		obj.cantidad++;
		console.log("Cantidad", obj.cantidad);
	}

	obj.mostrar = function(){
		alert(obj.cantidad);
	}

	return obj;
}


var fn = Contador();
fn.aumentar();

var fn2 = fn;
fn2.mostrar();