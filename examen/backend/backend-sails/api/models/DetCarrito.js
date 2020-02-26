/**
 * DetCarrito.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidad:{
      type:'number'
    },

    precio:{
      type:'number'
    },

    subTotal:{
      type:'number'
    },

    idCabCarrito:{
      model:'cabCarrito', //nombre del modelo papá
      required: true
    },

    idCurso:{
      model:'curso', //nombre del modelo papá
      required: true
    },

  },

};

