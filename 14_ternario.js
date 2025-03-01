// Operador ternario

const auth = true
const tarjeta = false

// If version
// if (auth) {
//     console.log("Usuario Autenticado")
// } else{
//     console.log("Usuario no Autenticado")
// }

// Ternario version
auth?
    console.log("Autenticado"):
    console.log("No Autenticado")

const saldo = 200
const pagar = 201

saldo > pagar?
    console.log("Puedes Pagar"):
    console.log("No Puedes Pagar");
    
// Ternario anidado

saldo > pagar || tarjeta?
        console.log("Puedes Pagar"):
        console.log("No Puedes Pagar")
    
