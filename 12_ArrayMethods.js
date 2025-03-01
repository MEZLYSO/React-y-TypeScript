// Array methods 

const array = ["React","Vue","Angular","Js"]
const num = [1,4,60]

// Filter -> Filtra
const newArray = array.filter(item => item !== "Angular")
console.log(newArray)

const newNum = num.filter(item=> item>10)
console.log(newNum);

// Includes ->  Revisar si existe un elemento en un array
const res = array.includes("Vue")
console.log(res);

// Some
// Recorre todo el array hasta encontrar un elemento que almenos cumpla la condicion
const res1 = num.some(numero => numero<10)
console.log(res1);

// Find
// Devuelve el primer elemento que cumple una condicion
const result1 = num.find(num => num>10)
console.log(result1);

// Every
// Devuelve true si todos los elementos cumplen la condicion
const rest1 = num.every(num => num > 4)
console.log(rest1);

// Reduce 
// Retorna un acumulado del total

const result3 = num.reduce((total,ele)=>{
    return total+ele    
},0)

console.log(result3);

