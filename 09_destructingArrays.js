// Destructuring Arrays

const tech = ["NodeJs","Angular","Vue","Java"]

//Asigna variables a index en el array
const [node,angular,elemento] = tech

//console.log(`${node},${angular},${elemento}`);

// Extraer especifica

const [, , ,java] = tech
console.log(java);

const vue = tech[2] // <-- Mas viable
console.log(vue);


