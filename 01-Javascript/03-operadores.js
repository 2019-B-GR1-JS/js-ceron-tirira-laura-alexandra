
const arreglo =[11,2,3,4,5,6,7,8,9,10];

for (const i in arreglo) { //recorre los indices
    console.log('I:',i );
}

console.log("for of")
for (const i of arreglo) { //recorre los valores
    console.log('I:' ,i);
}

//operador
console.log("foreach")
const respuestaForEach= arreglo
    .forEach(
        function (valorActual,indiceActual, arreglo) { //no es necesario usar los 3 valores en la function, se usa cualquier normbre
            console.log("valorActual", valorActual);
            console.log("indiceActual", indiceActual);
            console.log("indiceActual", arreglo);
});
console.log("respuesta foeach:",respuestaForEach);

//operador map ... devuelve el nuevo arreglo transformado
console.log("map");
const respuestaMap= arreglo
    .map(
        function (valorActual,indiceActual, arreglo) {
            return valorActual + 5;
        });
console.log("respuesta map:",respuestaMap);
console.log("arreglo sumado",arreglo);

const respuestaMap2 = arreglo.map(r => r+5);
console.log("respuesta map2:",respuestaMap);

//operador filter

const respuestaFilter= arreglo
    .filter(
        function (valorActual,indiceActual, arreglo) {
            return valorActual > 7;
        } //devolver expresion truty falsy
        ); //nuevo arreglo filtrado.
console.log("respuesta filter:",respuestaFilter);

//Operador some
//numero mayor a 7 y menor a 11
const respuestaSome= arreglo
    .some(
        function (valorActual,indiceActual, arreglo) {
            return valorActual > 9 && valorActual < 11;
        } //expresion
    ); //devolver un booleano verdadero o falso
console.log("respuesta respuestaSome:",respuestaSome);

//operador AND -> Every
const respuestaEveri= arreglo
    .every(
        function (valorActual,indiceActual, arreglo) {
            return valorActual > 1;
        } //expresion
    ); //devolver un booleano verdadero o falso
console.log("respuesta respuestaEveri:",respuestaEveri);

//(x/2 + 7) < 10
//map -> arreglo -> some

const respuestaMenoresa=
    arreglo.map((x) => (x/2)+7)
        .some((y) => y < 10);

console.log("respuesta respuestaMenoresa:",respuestaMenoresa);

const respuestaMenoresa2=
    arreglo.map((x) => (x/2)+7)
        .filter((y) => y < 10);

console.log("respuesta respuestaMenoresa2:",respuestaMenoresa2);
