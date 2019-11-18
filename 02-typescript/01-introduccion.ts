//transilador
//tipo de compilador que transforma de un lenguaje a otro
//1) tipos de datos(tipado)
//2) decoradores .- se ejecuta una funcion antes de una cosa
//3)clases

const  numero: number =0;
//let nombre: string= "Laura";

//Duck typing
//infiriendo el tipo de dato
let nombe="Adrian";
//nnombre =1; error
let fecha:Date; //date -> clase
                //tipo de dato "Date"

fecha = new Date();

let laura : Estudiante; //date -> Interface

laura={
  nombre: "Laura",
  edad:27
};
interface  Estudiante {
nombre : string;
edad:number;

}

function holaMundo(): void {
    console.log('hola');
}

function mensaje(nombre:string): void {
    console.log('hola', nombre);
}
function calculadora(numUno:number, ...numeros:number[]): number {
    console.log('hacer carlculadora');
    return numUno;
}


function univerdad(nombre:string, edad?: number //opcional
                   ) :string{
    return `${nombre} Edad: ${edad}`;
}

univerdad("EPN",2);

//tipar los datos ayuda a tener menos errores al programador.

interface Facultad
{
    nombre:string;
    id: number;
}
interface Departamento {
    nombre:string;
    id: number;
    facultad: Facultad | number; //varios tipos de datos
}
const departamentoSistemas ={
    nombre:"sistemas",
    id:1,
facultad:{//facultad relacionada
    nombre:"Sistemas",
        id:1
    }
}
const departamentoSistemasSinRelaciones : Departamento ={
    nombre:"sistemas",
    id:1,
    facultad: 1
}

function imprimirDepartamento(departamento: Departamento)
{
    const departamentoId= departamento.facultad as number +1 ;
    const  deartamentoId = <number>departamento.facultad +1;
}