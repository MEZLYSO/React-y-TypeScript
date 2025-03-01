// Fetch Async Await

const url = 'https://jsonplaceholder.typicode.com/comments'
const consultarApi = () => {
    fetch(url)
    .then((resp)=>{ 
        console.log(resp);
        return resp.json()
    }) 
    .then(data=>{ console.log(data) })
    .catch(error => console.log(error.message))
}

// Version async

const apiAsync = async () => {
   try {
    const resp = await fetch(url)
    if (!resp.ok) {
        throw new Error("Hubo un error")
    }
    const data = await resp.json()
    console.log(data)
   } catch (error) {
    console.log(error.message);
   };
    
}

apiAsync()
//consultarApi()