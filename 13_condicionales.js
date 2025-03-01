// COndicionales

const disponible = 2000
const retirar = 2000
const auth = true

if (auth) {
    console.log("Acceso");
} else{
    console.log("No permitido");
    
}

/**
 *  < Menor que
 *  > Mayor que
 *  === Igual estricto
 *  == Igual
 *  !== Diferente
 *  <= Menor igual
 *  >= Mayor igual
 */

if (disponible>=retirar) {
    console.log("Puedes retirar");
} else {
    console.log("No puedes retirar");
    
}

// Comparadores estrictos

const num1 = 20
const num2 = "20"

// Comparador no estricto
// Realiza una conversion en automatico

if (num1==num2) {
    console.log("Son iguales");
    
} else {
    console.log("No son iguales");
}

// Estrictamente
// No realiza conversion
if (num1===num2) {
    console.log("Son iguales");
    
} else {
    console.log("No son iguales");
}

/*  Operadores AND y OR */

const disp = 2000
const pay = 1000
const target = true

/*
 || -> Or
 && -> And
 */

if (disp>pay || target) {
    console.log("Puedes pagar");
} else{
    console.log("No puedes pagar");
    
}

