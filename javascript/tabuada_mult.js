/*
RESULTADO ESPERADO

ENTROU COM O NUMERO: 5 

RESULTADO ESPERADO E UMA TABUADA DE MULTIPLICACAO DO 1 ao 10

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50

UTILIZANDO UMA ESTRUTURA DE REPETICAO WHILE, DO WHILE, FOR

*/

function mostrarTabuadaMult() {
    // converte conteúdo do campo numero
    var n1 = Number(numero.value);
  
    // valida o número (VALIDACAO)
    if (n1 == 0 || isNaN(n1)) {
      alert("Informe um número válido...");
      n1.focus();
      return; // parar a execucao do codigo
    }
  
    // cria uma variável do tipo String, que irá concatenar a resposta
    var resposta = "";
  
    // cria um laço de repetição
    for (var i = 1; i <= 10; i++) {
      // a variável resposta vai acumulando os novos conteúdos
      resposta += `${n1} x ${i} = ${n1 * i} <br>`;
    }
  
    // o conteúdo da tag div é alterado para exibir a tabuada do num
    mostraTabuada.innerHTML = resposta;
  }
  // cria referência ao botão e após associa function ao evento click
  btnCalcular.addEventListener("click", mostrarTabuadaMult);