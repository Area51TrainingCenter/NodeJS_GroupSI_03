/**
* Duenos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	// connection: "connMySQL",
    tableName: "tb_duenos",
  	attributes: {
  		idDueno: {
  			primaryKey: true,
  			type: "integer",
  			unique: true
  		},

  	// nombreDueno: "string"
  		nombreDueno: {
 			type: "string",
 			required: true 		
    	},

    	mascota: {
    		collection: "Mascotas",
        via: "dueno" 
    	}
  	}
};

