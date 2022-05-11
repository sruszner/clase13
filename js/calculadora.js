
console.log(`Estamos en el archivo de la calculadora JS`);
var resultado;
let respuesta = document.getElementById(`respuesta`)
let numuno;
let numdos;


function ingresar(){
    numuno = document.getElementById(`numuno`).value;
    numdos = document.getElementById(`numdos`).value;
}

function sumar(){
    ingresar();
    numuno = Number(numuno);
    numdos = Number(numdos);
    resultado = numuno + numdos;
    console.log(resultado);
    respuesta.innerHTML = `La suma de los numeros es = ${resultado}`
}

function restar(){
    ingresar();
    resultado = numuno - numdos;
    console.log(resultado);
    respuesta.innerHTML = `La resta de los numeros es = ${resultado}`
}

function multiplicar(){
    ingresar();
    resultado = numuno * numdos;
    console.log(resultado);
    respuesta.innerHTML = `La multiplicación de los numeros es = ${resultado}`
}

function dividir(){
    ingresar();
    resultado = numuno / numdos;
    console.log(resultado);
    respuesta.innerHTML = `La división de los numeros es = ${resultado}`
}