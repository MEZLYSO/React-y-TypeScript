// Eventos del DOM - Submit

const root = document.querySelector("#root")
root.style.display = "none"

// ---------------------------------------------------------

const form = document.querySelector('form')
form.addEventListener('submit', e =>{
    e.preventDefault()
    const user = document.querySelector("#user").value
    const pwd = document.querySelector("#pwd").value
    const alert = document.createElement("div")
    alert.id = "alerta"
    
    // prevenir duplicacion

    const alertPrev = document.querySelector("#alerta")
    alertPrev?.remove()

    form.appendChild(alert)
    //alert.classList("class-1","class2") // Añadir clases
    if (user === "" || pwd === "") {
        alert.textContent = "No valido"
    } else{
        alert.textContent = "Valido"
    }
    setTimeout(()=>{
        alert.remove() // Remover elemento
    },3000)
})