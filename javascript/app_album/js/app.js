let apiFotos = fetch("https://jsonplaceholder.typicode.com/photos") //5000 registros

const contruirItemAlbum = (urlThumb, title, urlFoto) => {
    return `<div class="col">
                <div class="card shadow-sm">
                    <img class="bd-placeholder-img card-img-top" src="${urlThumb}"
                        width="150" height="100%" alt="${title}" title="${title}" srcset="">
                    <div class="card-body">
                        <p class="card-text">${title}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a type="button" class="btn btn-sm btn-outline-secondary" href="${urlFoto}" target="_blank">Ver</a>
                            </div>
                            <small class="text-muted">-</small>
                        </div>
                    </div>
                </div>
            </div>`
}


const buscarAlbumFoto = (id) => {
    fetch("https://jsonplaceholder.typicode.com/albums/"+id+"/photos") //50 registros
    //apiFotos
    .then((resp) => resp.json())
    .then((json)=>{
        let htmlColunaAlbum = ""
        json.map(album => htmlColunaAlbum += contruirItemAlbum(album.thumbnailUrl, album.title, album.url))
        document.querySelector("#albumFotos").innerHTML = htmlColunaAlbum
    })
    .catch(err => console.error("Errrou!"))  //opcional
    .finally(console.log("funcionando a API com album de foto")) //opcional
}

window.addEventListener("load", buscarAlbumFoto(2)) //load primeiro carregamento da pagina  
