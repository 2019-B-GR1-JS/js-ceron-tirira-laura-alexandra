//sync-async
const fileSystem = require('fs');
console.log('1 iniciando');
fileSystem.readFile('./05-callbacks.js','utf8', callbackLeerArchivo);
console.log('2 finalizando');

function callbackLeerArchivo(error, datos) {
    if(error) {
        console.error({
            mensaje: 'error leyendo archivo 5 callbacks',
            //error: error es lo mismo de abajo
            error
        })
    }
    else
    {
        console.log(datos);
        if(datos)
        {
            fileSystem.readFile('./04-funciones.js','utf8', (error, datos)=>{
                if(error) {
                    console.error({
                        mensaje: 'error leyendo archivo 4 funciones',
                        error
                    })
                }
                else
                {
                    console.log(datos);
                    if(datos)
                    {
                        fileSystem.readFile('./03-operadores.js','utf8', (error, datos)=>{
                            if(error) {
                                console.error({
                                    mensaje: 'error leyendo archivo 3 operadores',
                                    error
                                })
                            }
                            else
                            {
                                console.log(datos);
                                if(datos)
                                {
                                    fileSystem.readFile('./02-objetos.js','utf8', (error, datos)=>{
                                        if(error) {
                                            console.error({
                                                mensaje: 'error leyendo archivo 2 objetos',
                                                error
                                            })
                                        }
                                        else
                                        {
                                            console.log(datos);
                                            if(datos)
                                            {
                                                fileSystem.readFile('./01-variables.js','utf8', (error, datos)=>{
                                                    if(error) {
                                                        console.error({
                                                            mensaje: 'error leyendo archivo 1 variables',
                                                            error
                                                        })
                                                    }
                                                    else
                                                    {
                                                        console.log(datos);

                                                    }

                                                });
                                            }

                                        }

                                    });
                                }

                            }

                        });
                    }
                }

            });
        }
    }
}

console.log('2 finalizando');

//cual es la diferencia entre callback y funciones con parametros
//la una es syncrona y la otra asyncrona
//





//las funciones q no cumple un orden se llama callback