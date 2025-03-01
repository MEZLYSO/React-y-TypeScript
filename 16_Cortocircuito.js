// Evaluacion de corto circuito

const auth = true

// Existen valores donde JS lo va a evaluar en un contexto de boolean
if (-0) {
    console.log("Truthy");
}else{
    console.log("Falsy");
}


// Validacion rapida

const user = {}
user && console.log("Autenticado");

