/*
Tipos de datos
*/

// Undefinides
let cliente;
console.log(`${cliente} is ${typeof cliente}`);

//String o cadenas
const alumno = "Juan"
const maestro = "Pedro"
console.log(`${alumno} is ${typeof alumno} ${maestro} is ${typeof maestro}`);

// Numbers
const numero = 20
const numero1 = -100
const numero2 = 2.2

console.log(`${numero} is ${typeof numero}, ${numero1} is ${typeof numero1} \n
            ${numero2} is ${typeof numero2}`);

// BigInt

const numGrande = BigInt(1232123231232323213232333132312131)
console.log(`${numGrande} is ${typeof numGrande}`);

// Boolean

const trueOfalse = false
console.log(`${trueOfalse} is ${typeof trueOfalse}`);

//Null 
const valor = null
console.log(`${valor} is ${typeof valor}`);


// Null vs Undefinied 

let precio1 = null
let precio2
console.log(`${precio1} != ${precio2}`);


// Symbol
// Cada symbol es que todos son unicos, cada uno es diferente, nunca se repite
// y a pesar de que tengan lo mismo no son iguales
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log("Symbols");
console.log(`${primerSymbol === segundoSymbol}`);
