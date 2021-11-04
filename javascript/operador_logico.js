var carro = prompt("Digite o nome do carro!")
var preco = parseFloat(prompt("Digite o valor do carro!"))

/**
 * && AND E
 * Estou procurando um carro GOL 
 * e o preco deve ser menor que 30000
 */
if(carro == "Gol" && preco < 30000){
    alert("Encontrou o carro! Usando o E")
}else{
    alert("Carro não encontrado! Usando E")
} 

/**
 *  || OR OU
 * Estou procurando um carro GOL ou ONIX ou UP
 * e o preco deve ser menor que 60000
 */
if((carro == "Gol" || carro == "Onix" || carro == "Up") && preco < 60000){
    alert("Encontrou o carro usando o OU!")
}else{
    alert("Carro não encontrado usando o OU!")
}


//IF
var idade = 18
var comprovante = true

if(idade < 16 && comprovante === false){
    texto = "Não pode votar!";
}else{
    texto = "Pode Votar";
}

// OPERADOR TERNARIO
texto = (idade < 16 && comprovante === false) ? "Não pode votar!" : "Pode Votar"

// OPERADOR TERNARIO
var salario = 2000
var percInss;
// (condicao) ? valor_verdadeiro : valor_falso
percInss = (salario < 1500) ? 0.08 : 0.11;


