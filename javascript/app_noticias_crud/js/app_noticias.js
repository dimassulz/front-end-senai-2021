/**
 * lista(ARRAY) com todas as noticias
 */
let todasNoticias = []

/**
 * Função que cadastra notícias (insere ou atualiza)
 * @param {in} [id]
 * @returns 
 */
const cadastrarNoticia = function(id){
    //campo de noticia da tela
    let noticia = document.querySelector("#noticia").value
    //verifica se a noticia esta preenchida
    if (noticia == "") {
        alert("Digite uma noticia!")
        return
    }
    //verifica se a variavel id (passada como parametro na funcao) está indefinida, se tiver ele vai adicionar a nova noticias
    if(id === undefined){
        todasNoticias.push(noticia) // <<<<-- ADCIONANDO NO ARRAY - NOVA NOTICIA
    }else{
        //caso contrário ele entra no editar para atualizar a noticias
        todasNoticias[id] = noticia // <<<<-- ATUALIZANDO A POSICAO NO ARRAY - EDITANDO A NOTICIA
        //mostrando o botao de cadastrar (NOVA NOTICIA)
        document.querySelector("#btnCadastrarNoticia").style = "display: block"
        //ocultado o botao de editar (SALVAR EDICAO)
        document.querySelector("#btnEditarNoticia").style = "display: none"
    }
    //limpando os dados cadastrados e focando no campo
    limparFocarCampo()
    //listando novamente as noticias (atualizando)
    mostrarNoticias()
}

/**
 * Mostrar as noticias cadastradas
 */
const mostrarNoticias = function(){
    //div onde irao aparecer as noticias
    let mostrar = document.querySelector("#mostrarNoticias")
    //armazenas os <article> das noticias
    let htmlTela = ""
    //itera o array e monta os articles um embaixo do outro (montando a tela) usando a variavel htmlTela
    todasNoticias.forEach(
        (n, i) => htmlTela += `
        <article class="message is-info is-medium">
            <div class="message-header">
                <h1> Notícia ${i+1} </h1> 
            </div> 
            <div class="message-body">
                    ${n}
                <div class="buttons is-pulled-right">
                    <button class="button is-primary" onclick="editar(${i})">
                        <span>Editar</span>
                        <span class="icon is-small">
                        <i class="fas fa-edit"></i>
                        </span>
                    </button>
                    <button class="button is-danger" onclick="excluir(${i})">
                        <span>Excluir</span>
                        <span class="icon is-small">
                        <i class="fas fa-trash"></i>
                        </span>
                    </button>
                </div>
            </div>
            
        </article>
    `)
     //atualizando a quantidade de noticias do span id=qtdNoticias
     qtdNoticias.innerHTML = todasNoticias.length
     //mostrando na tela as noticias
     mostrar.innerHTML = htmlTela
     //mostrando a linha com aquantidade de noticias
     document.querySelector("#tituloNoticias").style = "display: block"
     //mostrando o botao deletar todas
     document.querySelector("#btnDeletar").style = "display: block"
     //envia para a funcao limpar tela
     limparTela() 
}

/**
 * Deleta todas as noticias da tela verificando se existem noticias
 * @returns
 */
const deletarNoticias = function(){
    if (todasNoticias.length === 0) {
        alert("Você não possui noticias para deletar!");
        return false
    }
    //utilizando a caixa de confirmacao para perguntar se deseja deletar todas as noticias
    if(confirm("Deseja deletar todas as notícias?") === true){
        //se sim limpa o array []
        todasNoticias = []
        //limpando dados da tela
        limparTela()
    }
}

/**
 * Função para o botão de editar a noticia
 * @param {int} idNoticia 
 */
const editar = function(idNoticia){
    //ao clicar em editar vai posicionar a tela na posicao 0 com animacao
    window.scrollTo({ top: 0, behavior: 'smooth' });
    //trazendo o conteudo da noticia a ser editada para o textarea
    document.querySelector("#noticia").value = todasNoticias[idNoticia]
    //mostrando o botao de editar (SALVAR EDIÇÃO)
    document.querySelector("#btnEditarNoticia").style = "display: block"
    //ocultado o botao de cadastrar (NOVA NOTICIA)
    document.querySelector("#btnCadastrarNoticia").style = "display: none"
    //adicionando o onclick ao botao
    document.querySelector("#btnEditarNoticia").onclick = () => {
        //quando clicar chamar a funcao cadastrarNoticia com o id da noticia (ATUALIZAR)
        cadastrarNoticia(idNoticia)
    };
}

/**
 * Função para exclusão de 1 unica noticia
 * @param {int} idNoticia 
 */
const excluir = function(idNoticia){
    //utilizando a caixa de confirmacao para perguntar se deseja deletar a noticia
    if (confirm(`Deseja deletar a notícia ${idNoticia+1}?`) === true) {
        //removendo o indice (idNoticia) do array de todas as noticias
        todasNoticias.splice(idNoticia,1)
        //listando novamente as noticias (atualizando)
        mostrarNoticias()
    }
}

/**
 * Limpar elementos na tela e verifica se todas as noticias foram limpas.Se foi limpa a div mostrarNoticias e oculta os botoes
 */
const limparTela = function(){
     limparFocarCampo()
     if (todasNoticias.length === 0) {
        //limpando a tela 
        document.querySelector("#mostrarNoticias").innerHTML = ""
        //ocultando os itens da tela
        ocultarItens()
     }
}

/**
 * ocultando o titulo das noticias
 */
const ocultarItens = function () {
    //ocultando o #tituloNoticias
    document.querySelector("#tituloNoticias").style = "display: none"
    //ocultando o #btnEditarNoticia
    document.querySelector("#btnEditarNoticia").style = "display: none"
    //ocultando o #btnDeletar
    document.querySelector("#btnDeletar").style = "display: none"
}

/**
 * limpando os dados cadastrados e focando no campo noticia
 */
const limparFocarCampo = function () {
    //limpa o campo noticia
    document.querySelector("#noticia").value = ""
    //aponta o foco para o campo
    document.querySelector("#noticia").focus()
}

//iniciando o código escondendo os itens da tela conforme a função abaixo
ocultarItens()
//Adicionando o evento de click para o cadastrar noticias
btnCadastrarNoticia.addEventListener("click", () => { cadastrarNoticia() })
//Adicionando o evento de click para o botao deletar (esse botao é o que deleta todas as noticias)
btnDeletar.addEventListener("click", deletarNoticias)