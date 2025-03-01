// Performance y Multipli Async Await

const url = 'https://jsonplaceholder.typicode.com/photos'
const url2 = 'https://jsonplaceholder.typicode.com/comments'
const url3 = 'https://jsonplaceholder.typicode.com/comments'

// const apiAsync = async () => {
//     try {
//      const inicio = performance.now() // Incio de la consulta
//      const resp = await fetch(url)
//      if (!resp.ok) {
//          throw new Error("Hubo un error")
//      }
//      const data = await resp.json()
//      console.log(data)
//      const fin = performance.now() // Fin de la consulta
//      console.log(`El resultado es de ${fin-inicio}ms`); // Resutado
     
//     } catch (error) {
//      console.log(error.message);
//     };
     
// }
 
//apiAsync()

const consultarApi = async () =>{
    try {
        const inicio = performance.now() // Incio de la consulta

        // COnsultas paralelas y no sean asincronas
        const [resp, resp2 ,resp3] = await Promise.all([fetch(url), fetch(url2),fetch(url3)])

        const [data,data2,data3] = await Promise.all([resp.json(),resp2.json(),resp3.json()])

        console.log(data)
        console.log(data2)
        console.log(data3)

        const fin = performance.now() // Fin de la consulta
        console.log(`El resultado es de ${fin-inicio}ms`); // Resutado
        
       } catch (error) {
        console.log(error.message);
       };
}

consultarApi()
