// Objetos - Unir

const producto = {
    nombre:"Jabon",
    precio:20
}

const cliente = {
    nombre:"Pedro",
    edad:39
}
// Une objetos
const carrito = {
    cantidad:1,
    ...producto // <-- spread operator
}

//console.log(carrito);

// Union de objetos

//Redundante
const newObj = {
    producto:{...producto},
    cliente:{...cliente}
}
//console.log(newObj);

//Manera minima
const newObj1 = {
    producto,
    cliente
}
//console.log(newObj1);

//Union de manera plana
// Por orden se reescribe
const newObj2 = {
    ...cliente,
    ...producto
}
//console.log(newObj2);
const Obj = Object.assign(cliente,producto)

console.log(Obj);

