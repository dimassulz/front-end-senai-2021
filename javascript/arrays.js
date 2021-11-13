/**
 * push() -> adiciona um elemento ao final
 * unshift() -> adiciona um elemento ao inicio do vetor e desloca os elementos existentes uma posicao abaixo
 * pop() -> remove o ultimo elemento do vetor
 * shift() -> remove o primeiro elemento do vetor e desloca os elementos existentes uma posicao acima
 * join( " - " ) -> transforma o array em string e utiliza no caso o " - " como separador
 * toString() -> -> transforma o array em string sempre utiliza o "," como separador
 */


var menuTexto = ["Home","Produtos","Suporte","Contato","Login", "Dashboard"]
var menuTela = document.getElementById("menu")
// tablist ->  <a class="list-group-item list-group-item-action active" data-toggle="list" href="#home" role="tab">Home</a>
function exibirMenu(){
    menuTela.innerHTML = ""; // limpar os dados anteriores
    menuTexto.forEach(function(item, ind){
        menuTela.innerHTML += `<a class="list-group-item list-group-item-action" data-toggle="list" href="#${ind}" role="tab">${item}</a>`
    });
}

function adicionarItemMenu(){
    menuTexto.push(novoMenu.value)
    novoMenu.value = ""
    novoMenu.focus()
    exibirMenu()
}

function excluirItemMenu(){
    menuTexto.pop()
    exibirMenu()
}

exibirMenu()

btnAdd.addEventListener("click", adicionarItemMenu)
btnExcluir.addEventListener("click", excluirItemMenu)