/**
 * Curso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    codigo:{
      type:'string'
    },
    nombre:{
      type:'string'
    },
    descripcion:{
      type:'string'
    },
    materia:{
      type:'string'
    },

    precio:{
      type:'number'
    } ,

    idProfesor:{
      model:'profesor', //nombre del modelo papá
      required: true
    },

    cursosDelDetCarrito:{
      collection:'detCarrito', //nombre del modelo hijo
      via: 'idCurso'  //nombre del campo foreing key en la tabla hijo
    }

  },

};

