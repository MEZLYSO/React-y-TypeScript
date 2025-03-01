// Fetch Api con promises

// Recuperar recursos y datos 

// const url = 'https://jsonplaceholder.typicode.com/comments'

// //Promises
// //Objeto disponible a futuro o no


// // si ok:true tiene respuesta
// fetch(url)
//     .then((resp)=>{ // Entonces trato de conectarme a la API
//         console.log(resp);
//         return resp.json()
        
//     }) 
//     .then(data=>{ // Entonces quiero los datos en JSON
//         console.log(data);
        
//     })

//Error

const url1 = 'https://jsonplaceholder.typicode.com/comments/'

fetch(url1)
    .then((resp)=>{ // Entonces trato de conectarme a la API
        console.log(resp);
        if(resp.ok){
            return resp.json()
        }
        throw new Error("Error en el consulta") // Crear un error para que esta vaya al catch

    }) 
    .then(data=>{ // Entonces quiero los datos en JSON
        console.log(data);
        
    })
    .catch(error =>{
        console.log(error); // Se ejecuta cuando no hay conexion o problemas de red
    })