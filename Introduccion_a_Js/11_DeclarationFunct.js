// Declaracion de funciones

// Parametro: Es una variable especial y que se utiliza en una funcion
// y cuyo valor se refiere a valores del exterior

// Modo tipico con parametros
// Esta funcion a comparacion de las demas podemos usar antes de
// ser declarada
function saludo(name) {
    console.log(`Hola ${name}`);
}
//saludo("Mau")

// Parametros por defecto
//console.log(pot(2));

function pot(num,pot=1) {
    return num**1
}
//console.log(pot(10));


// Functions Expression
const suma = function(num1=0,num2=0){
    return num1+num2;
}
//console.log(suma(1,2));

// Arrow Functions
// -> Se pueden reducir a una linea
// -> 
const resta = (a,b)=> {return a+b};

//console.log(resta(2,1));

// -> Funciones que retornan 

const valor = function (a=0,b=0) {
  return b+a
}

const res = valor(2,3)
console.log(res)

const rest = (a=0,b=0) => a-b
const result = rest(2,4)

console.log(result)


