//lista com todas as noticias
let todasNoticias = []

//ocultando o titulo das noticias 
document.querySelector("#tituloNoticias").style = "display: none"
document.querySelector("#btnEditarNoticia").style = "display: none"

//2 - Adicionar ao Array todasNoticias as noticias do campo textarea da tela
//2.1 - Fazer uma verificação se o campo noticias está preenchido corretamente alert("Digite uma noticia!")
//2.2 - Mostre o tituloNoticias com a quantidade de noticias id="qtdNoticias"
//2.3 - Faça uma limpeza no campo de noticias e aponte o foco para ele
// * Não exibir as noticias ainda, deixe isso para a função mostrarNoticias
const cadastrarNoticia = function(id){

    let noticia = document.querySelector("#noticia").value
    if (noticia == "") {
        alert("Digite uma noticia!");
        return
    }
    if(id === undefined){
        todasNoticias.push(noticia)   // <<<<-- ADCIONANDO NO ARRAY - NOVA NOTICIA
        //ENVIAR PARA UMA API
    }else{
        //EDITANDO A NOTICIA
        todasNoticias[id] = noticia
        document.querySelector("#btnCadastrarNoticia").style = "display: block"
        btnEditarNoticia.removeEventListener("click", () => { cadastrarNoticia(id) })
        document.querySelector("#btnEditarNoticia").style = "display: none"
        
    }
    qtdNoticias.innerHTML = todasNoticias.length
    document.querySelector("#noticia").value = ""
    document.querySelector("#noticia").focus()
    document.querySelector("#tituloNoticias").style = "display: block"
    mostrarNoticias()
}

//3 - Mostrar as noticias cadastradas
//3.1 - Fazer uma verificação se o o array todasNoticias tem algo na lista alert("Você não possui noticias cadastradas")
//3.2 - Usar um forEach no todasNoticias para exibir as noticias uma a uma dentro da div id="mostrarNoticias" em uma tag article conforme o exemplo abaixo:
//<article class="message is-info is-medium"><div class="message-header"><h1>Notícia 1</h1></div><div class="message-body">
// Devastação da Amazônia não para e atinge 13 mil km² em 1 ano </div></article>
//3.3 - Faça uma limpeza no campo de noticias
const mostrarNoticias = function(){
    let mostrar = document.querySelector("#mostrarNoticias")
    let htmlTela = ""

    todasNoticias.forEach((n, i) => htmlTela += `
    <article class="message is-info is-medium">
        <div class="message-header">
            <h1> Notícia ${i+1} </h1> 
        </div> 
        <div class="message-body">
                ${n}
            <div class="buttons is-pulled-right">
                <button class="button is-primary" onclick="editar(${i})">Editar</button>
                <button class="button is-danger" onclick="excluir(${i})">Excluir</button>
            </div>
        </div>
        
    </article>
    `)
     mostrar.innerHTML = htmlTela
     document.querySelector("#noticia").value = ""
     document.querySelector("#noticia").focus()
}

//4 - Limpar os dados do array todasNoticias
//4.1 - Ocultar o tituloNoticias
//4.2 - Limpar a div id="mostrarNoticias"
const deletarNoticias = function(){
    if (todasNoticias.length === 0) {
        alert("Você não possui noticias para deletar!");
        return
    }
    if(confirm("Deseja deletar todas as notícias?") === true){
        todasNoticias = []
        document.querySelector("#mostrarNoticias").innerHTML = ""
        document.querySelector("#tituloNoticias").style = "display: none"
    }
}

/**
 * @todo verificar o editar click que esta com problema
 * @param {@} idNoticia 
 */
const editar = function(idNoticia){
    document.querySelector("#noticia").value = todasNoticias[idNoticia]
    document.querySelector("#btnEditarNoticia").style = "display: block"
    document.querySelector("#btnCadastrarNoticia").style = "display: none"
    btnEditarNoticia.addEventListener("click", () => { cadastrarNoticia(idNoticia) }, true)
    
    //alert(`Editando noticia ${idNoticia} e seu conteudo é ${todasNoticias[idNoticia]}`)
}

const excluir = function(idNoticia){
    if(confirm("Deseja deletar a notícia?") === true){
        todasNoticias.splice(idNoticia,1)
        qtdNoticias.innerHTML = todasNoticias.length
        mostrarNoticias()
    }
}

//1 - ADICIONAR EVENTOS DE CLICK PARA CADA UM DOS TRES BOTOES DA TELA (btnCadastrarNoticia, btnMostrar, btnDeletar)
btnCadastrarNoticia.addEventListener("click", () => { cadastrarNoticia() })
//btnMostrar.addEventListener("click", mostrarNoticias)
btnDeletar.addEventListener("click", deletarNoticias)
