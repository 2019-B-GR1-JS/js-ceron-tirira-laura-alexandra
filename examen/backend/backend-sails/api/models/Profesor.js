/**
 * Profesor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string'
    },
    apellido:{
      type:'string'
    },
    cedula:{
      type:'string'
    },
    correo:{
      type:'string'
    },
    telefono:{
      type:'string'
    },
    cursosDelProfesor:{
      collection:'curso', //nombre del modelo hijo
      via: 'idProfesor'  //nombre del campo foreing key en la tabla hijo
    }
  },

};

