// Eventos del DOM - Submit

const root = document.querySelector("#root")
root.style.display = "none"

// ---------------------------------------------------------

const form = document.querySelector('form')
form.addEventListener('submit', e =>{
    e.preventDefault()
    const user = document.querySelector("#user").value
    const pwd = document.querySelector("#pwd").value
    if (user === "" || pwd === "") {
        console.log("Campos obligatorios");
    } else{
        console.log("Enviado");
        
    }
})
