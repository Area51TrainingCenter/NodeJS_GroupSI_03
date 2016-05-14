/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	idUsuario: {
  		primaryKey: true,
  		unique: true,
  		type: "integer",
  		autoIncrement: true
  	},

  	nombreUsuario: "string",

  	contrasena: "string"

  }
};

