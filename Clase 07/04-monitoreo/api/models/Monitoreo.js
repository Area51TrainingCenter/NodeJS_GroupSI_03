/**
* Monitoreo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id: {
  		primaryKey: true,
  		autoIncrement: true,
  		unique: true,
  		type: "integer"
  	},

  	estado: "string",
  	medico: "string",
  	paramedico: "string",
  	piloto: "string"

  }
};


