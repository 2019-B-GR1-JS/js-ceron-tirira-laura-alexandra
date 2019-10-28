//promesas de cosas syncronas o asyncronas
//toda promesa es asyncrona
const fs = require('fs');
const sumarDosNumeros = (correcto)=>{
    return new Promise((resolve, reject)=> {
       if(correcto)
       {
           resolve('yeiii');
       }
      else
       {
           reject('buu')
       }

    });
};
const promesaSumasDosNumeros= sumarDosNumeros(true); //es una promesa
console.log('01 iniciar')
promesaSumasDosNumeros
    .then(
        (ok)=>{
    console.log('ok', ok);
})
    .catch(
        (error)=>{
        console.error('error', error)
    })

console.log('02 finalizar')

const leerArchivo =(pathArchivo)=>{
    return new Promise(
        (resolve, reject)=>{
        //res -> resolve // rej -> reject
            fs.readFile(pathArchivo,
                'utf8',
                (error,archivoLeido)=>{ //callbacks
                if(error)
                {
                    reject(error);
                }
                else
                {
                    resolve(archivoLeido);
                }
                });

        });
}

leerArchivo('./05-callbacks.js').then(
    (contenidoCallbacksjs)=>{
        console.log(contenidoCallbacksjs);
        return leerArchivo('04-funciones.js'); //promesa

    })
    .then((contenidoFuncionesjs)=>{
        console.log(contenidoFuncionesjs);
    })
    .catch();

