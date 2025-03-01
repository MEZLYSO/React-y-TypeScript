// Objetos - destructuring

const producto = {
    nombre:"Jabon",
    precio:16
}

const empleado = {
    nombre:"Juan",
    edad:20
}

// Destructuring

const { nombre } = producto
// Añadir un segundo nombre a dicha propiedad para poder destructurar
// el elemento (evita colicion de nombres) 
const { nombre: nombreEmpleado } = empleado 

console.log(`${nombre} fue organizado por ${nombreEmpleado}`);

// Destructuring entre objetos

const usuario = {
    nombre1: "Juan",
    direccion:{
        calle:"Netzahualcoyotl"
    }
}

// Realizar destructuring entre objetos
const {direccion:{calle}} = usuario

console.log(`${calle}`);

