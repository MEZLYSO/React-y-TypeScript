// Performance y Multipli Async Await

const url = 'https://jsonplaceholder.typicode.com/photos'

const apiAsync = async () => {
    try {
     const inicio = performance.now() // Incio de la consulta
     const resp = await fetch(url)
     if (!resp.ok) {
         throw new Error("Hubo un error")
     }
     const data = await resp.json()
     console.log(data)
     const fin = performance.now() // Fin de la consulta
     console.log(`El resultado es de ${fin-inicio}ms`); // Resutado
     
    } catch (error) {
     console.log(error.message);
    };
     
 }
 
 apiAsync()
