var numContas = 0; // variavel global
var valTotal = 0; // variavel global

var resposta = ""; // variavel global

function registrarConta() {
  //lendo o conteudo do campo do form id=descricao
  var frmDescricao = descricao.value;
  //lendo o conteudo do valor do form id=valor 
  var frmValor = Number(valor.value);

  //VALIDACAO -> se o frmDescricao for vazio ou o frmValor for igual a zero ou frmValor nao for numero
  if (frmDescricao == "" || frmValor <= 0 || isNaN(frmValor)) {
    alert("Informe os dados corretamente...");
    descricao.focus();
    return; // o sistema para nesse ponto caso entre na validacao
  }

  //adicionar um valor no numero da conta
  numContas++; //numContas + 1

  //atualizo o valor total com o valor da conta
  valTotal += frmValor; //valTotal = valTotal + frmValor

  //preenchendo o campo resposta onde mostra exemplo: Água - R$130.00 <br> 
  resposta += `${frmDescricao} - R$ ${frmValor.toFixed(2)} <br>`;

  //adiciona a resposta na div id="listaContas"
  listaContas.innerHTML = resposta + "<hr>";

  //adiciono o total na tela. Exemplo: 1 Conta(s) - Total R$ 250.00
  total.innerHTML = numContas + " Conta(s) - Total R$ " + valTotal.toFixed(2);

  //LIMPO OS CAMPOS ADICIONADOS
  descricao.value = ""; // limpando o campo descricao
  valor.value = 0; // limpando o campo valor0
  descricao.focus(); //colocando o foco do mouse no campo descricao
}
//btnRegistrar ouve um evento de click onde acionara a funcao registrarConta
btnRegistrar.addEventListener("click", registrarConta);