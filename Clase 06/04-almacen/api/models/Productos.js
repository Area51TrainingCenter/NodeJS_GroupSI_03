/**
* Productos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idProducto: {
  		primaryKey: true,
  		unique:true,
  		type: "integer"
  	},

  	nombreProducto: {
  		type: "string",
  		size: 100
  	},

  	movimiento: {
  		collection: "Movimientos",
  		via: "producto"
  	}

  }
};

