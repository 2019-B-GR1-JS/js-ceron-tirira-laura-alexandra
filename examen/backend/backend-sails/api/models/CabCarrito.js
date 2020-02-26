/**
 * CabCarrito.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    estado:{
      type:'string'
    },

    fecha:{
      type:'string'
    },

    total:{
      type:'number'
    },

    direccion:{
      type:'string'
    },

    detalleDelCarrito:{
      collection:'detCarrito', //nombre del modelo hijo
      via: 'idCabCarrito'  //nombre del campo foreing key en la tabla hijo
    },

    idUsuario:{
      model:'usuario', //nombre del modelo papá
      required: true
    },

  },

};

