// Objetos

/*
Un objeto es una coleccion de propiedades
Una propiedad es una asociacion entre un nombre o clave y un valor
*/

const persona = {
    nombre : "Mauricio",
    edad: 19,
    sexo: "Masculino"
}

//Acceder a propiedades
console.log(`${persona.nombre} tiene ${persona.edad} y es ${persona.sexo}`);
// Tabular propiedades
console.table(persona);

// --> Destructuring <--

const {nombre,edad,sexo} = persona
console.log(`${nombre},${edad},${sexo}`);

// --> Object Literal Enhancement <--

const name = "Shampoo"
const price = 23

// Manera extendida
const nuevoProduct = {
    name:name,
    price:price
}
// Aplicar cuando key y value se llamaran igual
const nuevoProduct1 = {
    name,
    price
}

console.log(nuevoProduct);

