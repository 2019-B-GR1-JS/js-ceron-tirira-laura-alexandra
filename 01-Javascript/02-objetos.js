//02-objetos
//let const
//inmutable (no cambia)
//no puede ser reasignado
const arreglo =[1,4,3,4,5,6,7,8,9,10];
//arreglo = [1,2]; no se puede reaccignar el arreglo
//si se puede modificar mediante los metodos de los arreglos
//una variable que es constante puede ser modificada mediante sus metodos que se utilicen
console.log(arreglo);
arreglo.push(11); //agregar al final
console.log(arreglo);
arreglo.pop(); //quitar el ultimo
console.log(arreglo);
arreglo.splice(1, 0, 1.1);
console.log(arreglo);
//agregar al inicio
arreglo.unshift(0);
console.log(arreglo);
//indice d eun elemento
const respuestaIndice = arreglo.indexOf(4);
console.log(respuestaIndice);
//borrar el elemento
arreglo.splice(respuestaIndice,1)
console.log(arreglo);






//let arregloNumber =[1,2,3,4];
//arregloNumber=["a","b","c"]; //String
//un arreglo como es una varibale puede tomar otros valores.
//un arreglo de numero ahora es un arreglo de strings
//arregloNumber=[true,false,true,false];
//arregloNumber=["d","e",true,false];

//los arreglos no han podido ser definidos por q no son tipados.
//es importante utilizar const en vez de variables mutables como let

