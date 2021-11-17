function multiplicaCoelhos(){

    if(qtdCoelho.value == "" || qtdCoelho.value < 3){
        alert("Digite um valor maior ou igual a 3")
        return
    }

    if(numeroAno.value == "" || numeroAno.value < 1){
        alert("Digite um valor maior ou igual a 1")
        return
    }

    var ano = numeroAno.value
    var qtdCoelhos = qtdCoelho.value
    var textoTela = ""
    
    for(var a = 1; a <= ano; a++){
        textoTela += `${a}º ANO - ${qtdCoelhos} <br>`
        qtdCoelhos = qtdCoelhos * 7
        console.log(qtdCoelhos)
    }
    lista.innerHTML = textoTela
}

btnMostrar.addEventListener("click", multiplicaCoelhos)