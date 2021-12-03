/**
 * map(): percorre o array da esquerda para a direita invocando uma função de retorno 
 * em cada elemento com parâmetros. 
 * Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. 
 * Depois que todos os elementos foram percorridos, map() retorna o novo array 
 * com todos os elementos “traduzidos”.
 * 
 * 
 *   Parâmetro	Significado
 *   elem	Valor do elemento
 *   index	Índice em cada iteração, da esquerda para a direita
 *   array	Array original invocando o método
 *  thisArg	(opcional) Objeto que será referenciado como this no callback
 */
var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];

var celcius = fahrenheit.map( function( elem ) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
} ); 

// ES6
// fahrenheit.map( elem => Math.round( ( elem - 32 ) * 5 / 9 ) );

let palavras = ["carro", "casa", "moto", "bicicleta"]

let plural = palavras.map(palavra => palavra +"s")

let maiuscula = palavras.map(palavra => palavra.toUpperCase())

console.log(celcius) //  [ -18, 0, 7, 10, 24, 27, 37, 49 ]
console.log(plural)
console.log(maiuscula) // ['carros', 'casas', 'motos', 'bicicletas']

/**
 * reduce() quando: é preciso encontrar um valor cumulativo ou concatenado com base em elementos de todo o array.
 * Exemplo: soma de lançamentos de foguetes orbitais no período de 1 ano.
 *  Parâmetro	Significado
 *   prevVal	Valor cumulado retornado em cada iteração
 *   elem	Valor do elemento
 *   index	Índice em cada iteração, da esquerda para a direita
 *   array	Array original invocando o método
 *   initialValue	(opcional) Objeto usado como primeiro argumento na primeira iteração (mais à esquerda)
 * 
 */
var rockets = [
    { country:'Russia', launches:32 },//elem
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

//1 forma
var total = rockets.reduce(function(prevVal, elem) {
    return prevVal + elem.launches
},0)

//2 forma
var total = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0)

//1 forma
var concatenar = rockets.reduce(function(p, elem) {
    return p + " - "+ elem.country
}," INICIANDO O REDUCE ")
//2 forma
var concatenar = rockets.reduce((p, elem) => p + " - "+ elem.country, " INICIANDO O REDUCE ")


console.log(total) // 85
console.log(concatenar) // INICIANDO O REDUCE  - Russia - US - China - Europe(ESA) - India - Japan