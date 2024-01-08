function obtenerProductos(){

    return new Promise(function(resolve, reject){
        fetch('https://fakestoreapi.com/products')
            .then(resp => {
                if(resp.ok){
                    return resp.json();
                }
                throw new Error("Error al obtener productos")
            })
            .then(json => console.log(json))
    })

}

obtenerProductos()

const nombre = "Felipe"
const promesa = new Promise(function(resolve, reject){
    if(nombre !== "felipe"){
        reject("Error, el nombre no es Felipe")
    }
    resolve("El sonmbre es correcto")
})


promesa
    .then(resp => console.log(resp))
    .catch(err => console.log(err))