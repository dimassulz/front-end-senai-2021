function calcularPesoIdeal() {
    //DECLARANDO AS VARIAVEIS
    var frmNome = nome.value;
    var sexoM = sexoMasculino.checked; // true ou false
    var sexoF = sexoFeminino.checked; // true ou false
    var frmAltura = parseFloat(altura.value);
    var fator;
    var peso;

    //VERIFICACAO CAMPOS
    if(frmNome === ""){
        alert("Favor preencha o campo nome!")
        nome.focus() // direciono o foco do cursor para o campo id=nome
        return // parar a execucao do script nesse ponto
    }

    if(sexoM === false && sexoF === false){
        alert("Favor selecione o campo sexo!")
        return // parar a execucao do script nesse ponto
    }

    if(frmAltura <= 0 || isNaN(frmAltura)){
        alert("Favor preencha corretamente o campo altura!")
        altura.focus() // direciono o foco do cursor para o campo id=altura
        return 
    }

    //CONDICAO PRINCIPAL DO CALCULO (poderia usar o ternario)
    if(sexoM === true){
        fator = 22
    }else{
        fator = 21
    }

    //IF TERNARIO
    //fator = (sexoM === true) ? 22 : 21;

    //calculo do peso ideal
    peso = fator * Math.pow(frmAltura,2)

    //div onde o resultado vai aparecer
    pesoIdeal.innerHTML = `
        <h1>${frmNome} o seu peso ideal é: ${peso.toFixed(2)} kg</h1>
    `
}

//adicionando um evento de click ao botao id=btnCalcular onde ele chama a function calcularPesoIdeal
btnCalcular.addEventListener('click', calcularPesoIdeal)