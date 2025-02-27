// Arrays

//Manejo a traves de indices
// Pueden ser heterogeneas
const array = ["Java","Dart","Python",true,20]
//console.table(array)

const tecnologias = ["Java","Dart","Python"]
//Modifica
tecnologias[1]="NextJs"
//Crea
tecnologias[5]="Angular"
//Crear indice
tecnologias[10]="Go"

//Metodos mutables 
tecnologias.push("C++")
tecnologias.shift()

// Añadir con mutabilidad
const tec = [...tecnologias,"C#"]
console.table(tecnologias)
// const tec2 = tecnologias.filter((tech)=>{
//     if (tech!=="NextJs") {
//         return tech
//     }
// })

const tec2 = tecnologias.map((tech)=>{
    if (tech==="Go") {
        return "Vue"
    }else{
        return tech
    }
})

console.table(tec2);

//console.table(tec);
//console.table(tecnologias);



