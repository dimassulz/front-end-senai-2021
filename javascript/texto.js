
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