/**
 * Libro.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string'
    },

    isbn:{
      type:'string'
    },

    idUsuario:{
      model:'usuario', //nombre del modelo papá
      required: true
    }
  },

};

