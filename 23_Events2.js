// Eventos del DOM - Inputs

// Inputs
const Iname = document.querySelector("#name")
const h1 = document.querySelector("h1")

Iname.addEventListener("input", (e)=>{
    h1.textContent = Iname.value
})

// Password

const Ipass = document.querySelector("#pass")

Ipass.addEventListener("input",(e)=>{
    Ipass.type = "text"
    //Espera una cantidad de tiempo antes de ejecutar
    setTimeout(()=>{
        Ipass.type = "password"
    },300 // En ms 
    )
})


