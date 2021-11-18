//variaveis globais 
var framework = "Angular"

//sobrescrever o conteudo da variavel global
var framework = "React"

//declaro a variavel linguagem com o conteudo JavaScript
let linguagem = "JavaScript"

//sobrescrever o conteudo da variavel linguagem dentro desse escopo sem a palavra let
linguagem = "PHP"

console.log(linguagem)

function testeEscopo(){
    let frmNome = "teste" // let variaveis de escopo interno (economizando mais memoria do navegador)
    const PI = 3.141593 // const para dados de valor fixo é mais indicado
    
    alert(PI)
}

//Objeto Javascript (JSON Notation)
const pessoa  = {nome : "Barbara Ferreira Silva", cpf : "00820560810", data_nascimento: "10/02/2000"}
const pessoa2 = {nome : "Carlos Ferreira Silva", cpf : "00720699950", data_nascimento: "10/10/2000"}

pessoa.nome = "Mariana Ferreira Gomes"


const estadoAC = {
    sigla: "AC",
    nome: "Acre",
    cidades: [
      "Acrelândia",
      "Assis Brasil",
      "Brasiléia",
      "Bujari",
      "Capixaba",
      "Cruzeiro do Sul",
      "Epitaciolândia",
      "Feijó",
      "Jordão",
      "Mâncio Lima",
      "Manoel Urbano",
      "Marechal Thaumaturgo",
      "Plácido de Castro",
      "Porto Acre",
      "Porto Walter",
      "Rio Branco",
      "Rodrigues Alves",
      "Santa Rosa do Purus",
      "Sena Madureira",
      "Senador Guiomard",
      "Tarauacá",
      "Xapuri"
    ]
  }


//Array
const menu = [
    "Home", //0
    "Login", //1
    "Contato"//2
]

//Array de Objetos
const banco_dados = [
    {nome : "Barbara Ferreira Silva", cpf : "00820560810", data_nascimento: "10/02/2000"}, //0
    {nome : "Carlos Ferreira Silva", cpf : "00720699950", data_nascimento: "10/10/2000"}, //1
    {nome : "Pedro Alvares", cpf : "10890560180", data_nascimento: "04/08/2002"}, //2
]

//alert(`O nome do objeto pessoa é ${pessoa2.nome} e o cpf é ${pessoa2.cpf} e a sua data de nascimento é ${pessoa2.data_nascimento}`)

//mostrando e debugando o array de objetos banco_dados
banco_dados.forEach(function(item, posicao){
    console.log("EXIBIINDO O ITEM DA POSICAO "+posicao)
    console.log(item.cpf)
    console.log(item.nome)
    console.log(item.data_nascimento)
});


// Arrow functions 1
const soma = (n1,n2) => n1 + n2
// Arrow functions 2
const areaCirculo = (r) => 3.1415 * r * r

const exbirMenu = () => {
    menuTela.innerHTML = ""; // limpar os dados anteriores
    menuTexto.forEach(function(item, ind){
        menuTela.innerHTML += `<a class="list-group-item list-group-item-action" data-toggle="list" href="#${ind}" role="tab">${item}</a>`
    });
}

/**
 * 
 * 
function soma(n1,n2){
    return n1 + n2
}
*/

/**
 * 
function areaCirculo(r){
    return 3.1415 * r * r
}
*/



