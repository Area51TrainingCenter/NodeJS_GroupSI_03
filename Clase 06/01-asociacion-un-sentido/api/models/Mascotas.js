/**
* Mascotas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	attributes: {
  		idMascota: {
  			primaryKey: true,
  			type: "integer",
  			unique: true
  		},

  		nombreMascota: {
 			type: "string",
 			required: true 		
    	},

    	dueno: {
    		model: "Duenos"
    	}
  	}
};

