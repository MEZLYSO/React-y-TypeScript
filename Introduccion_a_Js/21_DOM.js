// Manejo del DOM

// Selectores
console.log(document.title);

const root = document.getElementById("root") // Ya no muy utilizada
root.textContent = "Hola"

// Selecciona el primero que cumpla la condicion
const root2 = document.querySelector("#root") // Recomendable
//console.log(root2); // Retorna el elemento
//console.log(root2.tagName);
//console.log(root2.textContent);
//console.log(root2.classList);
//console.log(root2.id);

const enlaces = document.querySelectorAll("div a") // Selecciona todos
//console.log(divs);

console.log(enlaces);
enlaces[0].textContent = "23" // Cambiar valores de una coleccion

enlaces.forEach(ele => ele.textContent = "Hi")

// Segunda parte -- Manipular elementos con  js

root2.textContent = "Adios"
root2.id = "New id"

// Eliminar

root2.removeAttribute('id')

const input = document.querySelector("#name")
input.value = "Nuevo valor"
console.log(input.classList);
input.dataset.data = "Hola"





























