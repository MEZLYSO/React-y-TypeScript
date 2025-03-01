// Eventos del DOM - Click

const nombre = document.querySelector("h1")
const button = document.querySelector("#button")
const input = document.querySelector(".name")

button.addEventListener("click",()=>{
    nombre.textContent = "Has preionado"
})


// mouse

button.addEventListener("mouseenter",()=>{
    nombre.textContent = "Has pasado el raton"
})

button.addEventListener("mouseleave",()=>{
    nombre.textContent = "Nombre"
})

// Enlaces

const enlaces = document.querySelectorAll("a")
console.log(enlaces);

enlaces.forEach(ele=>{
    ele.addEventListener("click",(e)=>{ // Evitar refresh
        e.preventDefault() // Previene comportamientos por default
        e.target.textContent = "Diste click" // Cambia propiedad al dar click
        console.log("Click en un enlace");
    })
})

