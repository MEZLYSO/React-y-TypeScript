// Recorrer Arrays

const tech = ["Angular","Vue","Python","Js"]

// for (let i = 0; i < tech.length; i++) {
//     console.log(tech[i]);
    
// }

// ---> ForEach -- Mas eficiente

tech.forEach((ele)=>{
    console.log(ele);
})


// ---> Map -- Crea un nuevo arreglo en base a condiciones

const copie = tech.map((ele)=>{
    return ele.toLowerCase()
})
console.log(copie);

// Map (pero modifica) y ForEach --> recorren e iteran

// ---> for ... of

for (const ele of copie) {
    console.log(ele);
}