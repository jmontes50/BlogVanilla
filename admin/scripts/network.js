const RUTA = "https://5e22b9e7afee990014e59669.mockapi.io/posts";

class Network{
    crearpost(objPost){
        return new Promise((resolve, reject) => {
            let configuracion = {
                method:'POST',
                body: JSON.stringify(objPost),
                headers: {'Content-Type':'application/json'}
            }
            fetch(RUTA,configuracion)
                    .then(respuesta => {
                        return respuesta.json();
                    }).then(postCreado => {
                        resolve(postCreado)
                    }).catch(err => {
                        reject(`Error: ${err}`)
                    })
        })
    }

    getPosts(){
        return new Promise((resolve, reject) => {
            fetch(RUTA)
                .then(respuesta => {
                    return respuesta.json();
                }).then(posts => {
                    resolve(posts);
                }).catch(err => {
                    reject(`Error: ${err}`)
                })
        })
    }
}