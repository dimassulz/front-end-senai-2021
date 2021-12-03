//SUBSTR
let texto = "JavaScript - Front End - 2021"
console.log(texto.substr(0,10))
console.log(texto.substr(13,9))
console.log(texto.substr(-4))

//toUpperCase() - MAIUSCULA
console.log(texto.toUpperCase())
console.log(texto.substr(0,10).toUpperCase())

//toLowerCase() - MINUSCULA
console.log(texto.toLowerCase())
console.log(texto.substr(0,10).toLowerCase())

//charAt() buscaCadaItem do Texto
console.log(texto.charAt(0))
console.log(texto.charAt(1))
console.log(texto.charAt(2))
console.log(texto.charAt(3))

//split() quebra o texto em um array especficando um separador
console.log(texto.split(" "))
console.log(texto.split("-"))
console.log(texto.split(" - "))
let arrTexto = texto.split(" - ")
console.log(arrTexto)


//replace() - substituir um trecho de um texto (string) sendo o primeiro parametro 
//a palavra a ser substituida
//o segundo parametro a palavra que ira substituir o texto (numero)
let nome = String("João")
let percentual = 70
let mensagem = "Olá, Sr. #nomeusuario#, informamos que a partir da presente data o senhor tem #perc#% de desconto em nossa loja."
console.log(mensagem.replace("#nomeusuario#",nome).replace("#perc#", percentual))

let senha = String('123_123_ABCdfasasdfasdfasdfasdf')
console.log(senha)
//substituicao de alguns valores da senha
let ajusteSenha = senha.replace("_", "").replace("-", "").replace("1", "*")
//substitui todas as letras que encontrar por $
let ajusteSenha2 = senha.replace(/[A-Z]/gi, "$");
console.log(ajusteSenha)
console.log(ajusteSenha2)

//trim() - remover espaço em branco antes e depois de uma string
let espaco = "       Criando um texto estranho !      "
console.log("SEM TRIM", espaco)
console.log("COM TRIM", espaco.trim())
