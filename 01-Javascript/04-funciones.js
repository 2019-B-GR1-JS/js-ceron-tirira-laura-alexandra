//funciones
//funciones q devuelven algo
//funciones q no devuelven nada

//las funciones q no devueven nada void devuelven undefined
function imprimirMensaje(mensaje){
    if(typeof(mensaje) === 'number' || typeof (mensaje) ==='string') {
        const impresion = `Mensaje ${mensaje}`;
        console.log(impresion);
        return impresion;
    }
   else
        console.error("error");
}
const respuesta = imprimirMensaje("hola");

//funcion q recibe infinitos numeros
//...destructurar
function sumarDosElementos(numeroUno, ...arregloParametrosInfinitos) {
   // console.log(otro); //1,2,3,4,5
    if(arregloParametrosInfinitos)
    {
        return arregloParametrosInfinitos.reduce((valorInicial, valorActual)=>{
            return valorInicial+valorActual;
        },numeroUno)
    }
    else
    {
        return numeroUno
    }
}
const suma = sumarDosElementos(1,1,2,3,4,5);
console.log(suma);

//se define la funcion y el nombre de la funcion
//arrlego.reduce((a+b))

//como definir una funcion dentro de una constante
const restar = function restaF(a,b){
    return a-b;
}

console.log(restar);

//cuando se asigna un funcion a una variable se puede omitir el nombre de la funcion

const restar1 = function (a,b){
    return a-b;
}

function restar2(a,b){
    return a-b;
}
//fat arrow function => anonymous function se usan cuando se estan asignando
const restar3 =  (a,b) => {
    return a-b;
}

const restar4 = {
    nombre:'restar',
    restarNumeros: (a,b) => {
        return a-b;
},
    restarNumeros: function (a,b) {
        return a -b;
    }

    }
const transformarLetra1 = (letra)=>{
    return letra.toUpperCase(letra);
}

const transformarLetra2 = (letra) => letra.toUpperCase();
const transformarLetra3= letra => letra.toUpperCase(); //funciona cuando solo tiene un solo parametro.
//const filtradoArreglo = arreglo.filter(a=>a.id >4);

const areglosNumerosUno= [1,2,3,4,5,6];
const arregloNumerosDos =[7,8,9,10,11,12];
const aregloUnido =[...areglosNumerosUno,...arregloNumerosDos];

const objetoLaura={
    nombre:"Laura"
};
const  objetoCeron={
    apellido: "ceron"
};

//destructuracion de objetos
const objetoLauraCeron ={
  ...objetoLaura,
 ...objetoCeron,
 edad:12 //no se debe modificar sobre el objeto
}
const oLCEnString=JSON.stringify(objetoLauraCeron);
console.log(oLCEnString);

const oLCclonado =JSON.parse(oLCEnString);
console.log(oLCEnString);
oLCEnString.edad =21;

console.log(oLCclonado);
console.log(objetoLauraCeron);

function cambiarEdad(edad,objeto) //es mejor realizar una funcion.
{
    objeto.edad=edad;
    return objeto;
}
//clonar un objeto
const clonadoLC={
    ...objetoLauraCeron
}
clonadoLC.edad=21;
console.log(clonadoLC);
console.log(objetoLauraCeron);


//cambiarEdad();

//console.log(objetoLauraCeron);

//destructurar el arreglo
////sumarElementos(...areglosNumerosUno);
//sumarElementos([1,2,3,4,5,6])
//sumarElementos(1,2,3,4,5,6)
////sumarDosElementos(...areglosNumerosUno);


