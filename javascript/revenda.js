var frmModelo;
var frmValor;
var divMostrar;

//Botao cadastrar add evento
btnSimular.addEventListener('click', function(){
    frmModelo = dadoVeiculo.value // modelo do carro
    frmValor = dadoPreco.value // preco do carro
    frmParcelas = parseInt(qtdParcelas.value) // qtd de parcela

    divMostrar = document.getElementById('mostrarSimulacao') // mostrar as informacoes na tela
    alert('Simulação em processamento!') // processando

    parcela = ((frmValor/2)/frmParcelas) // valor da parcela sem juros
    parcelaComJuros = parcela*1.70 //cada parcela sem juros deve ser acrescida de 70% (juros)
   
    divMostrar.innerHTML = `
        <div>Modelo: <strong>${frmModelo}</strong></div>
        <div>Valor: <strong>R$ ${frmValor}</strong></div>
        <div>Valor da entrada: <strong> R$ ${frmValor/2}</strong></div>
        <div>${frmParcelas} parcelas no valor de R$ <strong>${parcelaComJuros.toFixed(2)}</strong></div>
  `
    
})
