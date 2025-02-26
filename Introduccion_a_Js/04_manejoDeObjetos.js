// Objetos - Manejo

const persona = {
    nombre : "Mauricio",
    edad: 19,
    sexo: "Masculino"
}

// Reescribir un valor
persona.nombre = "Mau"
//console.log(persona);

// Añadir key o value
persona.vive = "Jilotepec"
//console.log(persona);

//Borrar propiedad
delete persona.sexo
//console.log(persona);

// Objetos inmutables

//Object.freeze(persona)
delete persona.edad
//console.log(persona);

// Modificar propiedades existentes pero no permite crear o eliminar una propiedad

Object.seal(persona)
delete persona.vive
persona.nombre = "mauri"
console.log(persona);

