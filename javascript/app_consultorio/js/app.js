const listaDeEspera = []

//função adicionarLista
//urgencia e uma variavel booleana (true ou false)
function adicionarLista(urgencia) {
    console.log("DEBUGANDO O ADICIONAR LISTA")
    let paciente = document.querySelector("#paciente").value //campo do formulario
    let ulLista = document.querySelector("#listaEspera") // saida com lista
    
    //Verifica se o campo paciente foi preenchido
    if(paciente == ""){
        alert("Preencha o campo nome corretamente!")
        return
    }

    //vertifica se a variavel urgencia é verdadeira
    if(urgencia === true){
        //adicionar o nome do paciente em primeiro lugar no array
        listaDeEspera.unshift(paciente)
    }else{
        //adicionar o nome do paciente no array listaDeEspera (adicionar o nome do paciente ao final)
        listaDeEspera.push(paciente)
    }
    
    //variavel que armazena a lista de itens para a tela
    let listaTela = ""

    //ocorre a montagem dos itens da lista de nomes (lista de espera)
    listaDeEspera.forEach(function(item, indice){
        listaTela += `<li class="list-group-item">${indice+1} - ${item}</li>`
    })

    //adiciono a ulLista todo o conteudo da variavel listaTela
    ulLista.innerHTML = listaTela

    //Limpar os dados do campo paciente
    document.querySelector("#paciente").value = ""
    //mandar o foco da tela para o campo paciente
    document.querySelector("#paciente").focus()
}

//funcao anonima, armazenou a funcao anonima na constante atender
const atender = function () {
    let ulLista = document.querySelector("#listaEspera") // saida com lista
    let nomeAtendimento = document.querySelector("#nomePessoaAtendimento") //nome do paciente em atendimento

    //verificar se não tem paciente no array lista de espera
    if(listaDeEspera.length == 0){
        alert("Não tem pacientes na lista de espera!!!");
        document.querySelector("#paciente").focus()
        return
    }
    //removendo o primeiro nome da lista e guardando esse nome na variavel pacienteEmAtendimento
    let pacienteEmAtendimento = listaDeEspera.shift()
    
    //colocou no html o nome do paciente
    nomeAtendimento.innerHTML = pacienteEmAtendimento
    //modificacao do style para display block
    document.querySelector("#alertAtendimento").style = "display:block"
   
    //variavel que armazena a lista de itens para a tela
    let listaTela = ""

    //ocorre a montagem dos itens da lista de nomes (lista de espera)
    listaDeEspera.forEach(function(item, indice){
        listaTela += `<li class="list-group-item">${indice+1} - ${item}</li>`
    })

    //adiciono a ulLista todo o conteudo da variavel listaTela
    ulLista.innerHTML = listaTela

    //Limpar os dados do campo paciente
    document.querySelector("#paciente").value = ""
    //mandar o foco da tela para o campo paciente
    document.querySelector("#paciente").focus()

}

//btn add tem um evento de click onde ele chama a funcao adicionaLista(false) esse parametro é a urgencia (nao e urgencia)
btnAdd.addEventListener("click", () => adicionarLista(false));
//btn urgencia tem um evento de click onde ele chama a funcao adicionaLista(true) esse parametro é a urgencia
btnUrg.addEventListener("click", () => adicionarLista(true));
//btnAtender tem um evento de click onde ele chama a funcao atender
btnAtender.addEventListener("click", atender);

//ocultando a div alert #alertAtendimento
document.querySelector("#alertAtendimento").style = "display:none"