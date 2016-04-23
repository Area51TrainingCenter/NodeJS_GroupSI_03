/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: "localDiskDb",
	tableName: "tbUsuarios",
  	attributes: {
  		id: {
  			primaryKey: true,
  			autoIncrement: true,
  			type: "integer",
  			unique: true
  		},

  		nombres: {
  			type: "string",
  			size: 500
  		},

  		apellidos: {
  			type: "string",
  			required: true
  		}

  	}
};

