function calculo(numUno,numDos,funcionCalculo){
    const total=numUno+numDos;
    return funcionCalculo(numUno, numDos,total); {
    }
}

const numeroUno=33;
const numeroDos=55;
//se guarda en una constante una funcion mediante una funciones anonimas
const suma= (numUno, numDos, total)=>{
    return total;
};

//console.log(suma); //definicion de la funcion sin parentesis

//console.log(suma(  //ejecucion de la funcion con parentesis.
  //  1,
   // 2,
    //3)
//);

//ejemplo 1
const resultadoCalculo= calculo(numeroUno,numeroDos,suma);

console.log(resultadoCalculo);

//ejemplo2

const resultadoCalculo2= calculo(numeroUno,
    numeroDos,
    (numeroUno, numeroDos,total) => {
    return total;
}
);
console.log(resultadoCalculo2);

//ejemplo3--forach
//los operadores iteran el arreglo
function forEachLocal(arreglo,funcion) {
    for(let indiceInicial=0; indiceInicial < arreglo.length; indiceInicial++)
    {
        funcion(arreglo[indiceInicial],indiceInicial,arreglo);

    }
}

forEachLocal([1,3,4,6,7],
    (valorActual, indiceActual, arreglo)=>{
    console.log("valor actual",valorActual);
}
);

//map devuleve un arreglo

function mapLocal(arreglo,funcion) {
    const arregloMap = [];
    for(let indiceInicial=0; indiceInicial < arreglo.length; indiceInicial++)
    {
        funcion(arreglo[indiceInicial],indiceInicial,arreglo)
        {
            arregloMap.push(arreglo[indiceInicial]+5);
        };
    }
    console.log(arregloMap);
    return arregloMap;
}

mapLocal([1,3,4,6,7],
    (valorActual, indiceActual, arreglo)=>{
    }
);

//filter
function filterLocal(arreglo,funcion) {
    const arregloFilter = [];
    for(let indiceInicial=0; indiceInicial < arreglo.length; indiceInicial++)
    {
        if (funcion(arreglo[indiceInicial]))
        {
           arregloFilter.push(arreglo[indiceInicial]);
        };
    }
    console.log(arregloFilter);
    return arregloFilter;
}

filterLocal([40,1,3,4,6,7,9,11,23],
    (valorActual) =>{
return valorActual > 7
    }
);

//some
function someLocal(arreglo,funcion) {
    let someRespuesta = false;
    for(let indiceInicial=0; indiceInicial < arreglo.length; indiceInicial++)
    {
        if (funcion(arreglo[indiceInicial]))
        {
           someRespuesta= true;
        };
    }
    console.log(someRespuesta);
    return someRespuesta;
}

someLocal([40,1,3,4,6,7,9,11,23],
    (valorActual) =>{
        return valorActual > 7 && valorActual < 11
    }
);

//every

function veryLocal(arreglo,funcion) {
    let someRespuesta = false;
    for(let indiceInicial=0; indiceInicial < arreglo.length; indiceInicial++)
    {
        if (funcion(arreglo[indiceInicial]))
        {
            someRespuesta= true;
        };
    }
    console.log(someRespuesta);
    return someRespuesta;
}

everyLocal([40,1,3,4,6,7,9,11,23],
    (valorActual) =>{
        return valorActual > 7
    }
);



