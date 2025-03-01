// Optional chaning (?)

// Consulta propiedad de un objeto sin interferir la secuencia de ejecucion 
// del codigo para mantener una respuesta

const alumno = {
    nombre:"Juan",
    clase:"POO",
    aprobado:true
}

console.log(alumno?.nombre);
console.log("Fin de la ejecucion");

// Nullish coalescong operaor (??)

// En caso de que el valor sea nulo define un valor predeterminado
// Operador logico que retorna valor del lado derecho cuando el valor
// de la izquierda es nulo
const pagina = null??1
const pagina1 = 3??1

console.log(`${pagina} ${pagina1}`);

