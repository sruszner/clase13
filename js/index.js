console.log("Operador módulo: ");

let numUno = 1;
let numDos = 3;
let numTres = 2;
let resultado = 0;

let i;

if (numUno % 2 == 0){
    console.log(`El numero ingresado es PAR`);
}
else{
    console.log(`El numero ingresado es IMPAR`);
}

function miFuncion(){
    console.log(`Soy una funcion`);
}
miFuncion();

function sumar(a, b){
    return a + b;
}

resultado = sumar(numDos, numTres);
console.log(`La suma es = ${resultado}`);

let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
    ];

    for (i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }