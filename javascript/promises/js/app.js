const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolvida'), 3000)
    //setTimeout(() => reject('rejeitada'), 3000)
})

console.log(p) //pendente

p.then((res) => {
    console.log(res) //resolvida
    //  alert("Promessa resolvida!")
})

p.catch((rej) => {
    console.log(rej) //rejeitada
    //  alert("Promessa nao resolvida!")
})

const getJsonPlaceHolderPosts = (id) => {

    if(id === undefined  || id === "") return false;
    fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(response => response.json())
        .then(json => {
            document.querySelector(".title").textContent = `Título: ${json.title}`
            document.querySelector(".id").textContent = `ID: ${json.id}`
            document.querySelector(".body").textContent = `Corpo: ${json.body}`
        })
        .catch(err => {
            alert("Ocorreu um erro ao carregar o jsonplaceholder!!!")
        })
}

const getApiIbgeMunicipioPorUf = (uf) => {

    if(uf === undefined  || uf === "") return false;
    document.querySelector("#loading").innerHTML=`<progress class="progress is-large is-info" max="100">60%</progress>`
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf+'/municipios')
        .then(r => r.json())
        .then(json => {
            if(document.querySelector("#listaMun ul")){
                document.querySelector("#listaMun ul").remove()
            }   
            let ul = document.createElement('ul')   
            json.forEach(mun => {
                let nomeCampo = mun.id + " - " + mun.nome
                let li = document.createElement('li')   
                li.innerHTML = nomeCampo
                ul.appendChild(li)
            })
            return document.querySelector("#listaMun").appendChild(ul)
        })
        .catch(err => {
            console.error(err)
            alert("Ocorreu um erro ao carregar a API do IBGE!!!")
        })
        .finally(e => {
            document.querySelector("#loading").innerHTML=""
        })
}

const getJsonPlaceHolderAllPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(json => {
            let selectP = document.createElement('select')           
            json.forEach((post => {
                let optionP = document.createElement('option')
                optionP.innerHTML = post.id
                selectP.appendChild(optionP)
            }))
            return document.querySelector("#selectIdPost") .appendChild(selectP)
        })
        .catch(err => {
            console.error(err)
            alert("Ocorreu um erro ao listar todos os posts")
        })
}

const getApiIbgeTodasUfs = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(r => r.json())
    .then(json => {
        console.log(json)
        let selectP = document.createElement('select')           
        json.forEach((uf => {
            let optionP = document.createElement('option')
            optionP.innerHTML = uf.sigla
            selectP.appendChild(optionP)
        }))
        return document.querySelector("#selectUF").appendChild(selectP)
    })
    .catch(err => {
        console.error(err)
        alert("Ocorreu um erro ao listar todos as UFs")
    })
}
/**
 * INICIANDO O GETJSON
 */
getJsonPlaceHolderAllPosts()
/**
 * INICIANDO O APIIBGE
 */
getApiIbgeTodasUfs()

btnJsonPlace.addEventListener("click",() => {
    let idPost = Number(document.querySelector("#selectIdPost select").value)
    getJsonPlaceHolderPosts(idPost)
})
btnIbge.addEventListener("click",() => {
    let uf = document.querySelector("#selectUF select").value
    document.querySelector("#tituloIBGE span").textContent = uf
    getApiIbgeMunicipioPorUf(uf)
})