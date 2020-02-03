/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

//Importar Modilo de NodeJS (usarlo)
 // const  modulo = require{'moduloRasberry'};
  const  axios = require('axios');
const moduloRaspberry = {
  calcularProximidad: function () {
    return Math.random() * (10-0) + 0 ;
  }
}

module.exports.bootstrap = async function() {
  setInterval( async ()=>{
    const valor = moduloRaspberry.calcularProximidad();
    console.log('valor proximidad:' , valor);
    //1337 iot
    //1388 backend //
    //HTTP
    //post http://localhost:1338 /monitoreoMovimiento {'valor'':valor}
const respuestaServidor = await axios
  .post(
  'http://localhost:1338/MonitoreoMovimiento',
  {
    valor: valor
  }
);
  console.log('respuesta servidor', respuestaServidor);

    },
    2000 //2 segundos
  )

};

//se inicia al princiop de levantaarse el servidor.
