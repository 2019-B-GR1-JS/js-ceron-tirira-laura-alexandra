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
//console.log('01 iniciar')
promesaSumasDosNumeros
    .then(
        (ok)=>{
    console.log('ok', ok);
})
    .catch(
        (error)=>{
        console.error('error', error)
    })

//console.log('02 finalizar')

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

leerArchivo('./05-callbacks.js')
    .then((contenidoCallbacksjs)=>{
        //console.log(contenidoCallbacksjs);
        return leerArchivo('04-funciones.js'); //promesa

    })
    .then((contenidoFuncionesjs)=>{
        //console.log(contenidoFuncionesjs);
        return leerArchivo('03-operadores.js'); //promesa
    })
    .then((contenidoFuncionesjs)=> {
        //console.log(contenidoFuncionesjs);
        return leerArchivo('02-objetos.js'); //promesa
    })

    .then((contenidoFuncionesjs)=> {
        //console.log(contenidoFuncionesjs);
        return leerArchivo('01-variables'); //promesa
    })
    . catch(
        (error)=>{
            console.log('Error', error);
        }
    );

//read file sync
console.log('Inicia asyncrono')
const nombreArchivo='./05-callbacks.js'
//cuanso se usa codigo syncrono (funcion sincrono)siempre poner un try catch
try
{
    const contenidoArchivo= fs.readFileSync(nombreArchivo,'utf-8');
    //console.log(contenidoArchivo);
    console.log('se leyo sincronamente')
}catch(error)
{
    console.error('error', error);
}

console.log('Fin asyncrono')


//transformar una promesa a codigo sincrono
//funciones normales
//funciones anonymous.

//1) "async" (permite usar codigo sincrono dentro de la funcion)
//2) para transformar promesa -> sincrono
// "await"
//todas las funcione spueden ser transformadas a promesas y luego cambiar a codigo sincrono.
async function leerArchivoSync()
{
    try
    {
        const contenido = await leerArchivo(nombreArchivo); //promesa
        console.log(contenido);
        console.log("leimos con asyn y await");
        return 1
    }
    catch (error) {
        console.error('error' ,error);
        return 0
    }
}
//toda funcion que tenga un asyn atras se transforma en una promesa
leerArchivoSync().then(
    (numero)=>{
        console.log(numero);
    }
).catch(
    (numero)=>{
        console.log(numero);
    }
);


