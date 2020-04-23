let btncrearpost = document.getElementById("btncrearpost");

btncrearpost.addEventListener("click",()=>{
    console.log("clicks")
    // Swal.fire('Any fool can use a computer')
    let peticion = new Network();
    peticion.crearpost(
        
    )
});
let form = document.getElementById("formcrearpost");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let objPost = {
        post_titulo:form['titulo'].value,
        post_autor:form['autor'].value,
        post_texto: JSON.stringify(quill.getContents())
    }
    let peticion = new Network();
    peticion.crearpost(objPost)
    .then(respuesta => {
        console.log(respuesta)
        form.reset();
        quill.setContents([{ insert: '\n' }]);
    })
})