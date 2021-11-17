function verificarNPerfeito(){

    if(numero.value == "" || numero.value < 2){
        alert("Digite um valor maior ou igual a 2")
        return
    }

    var n = numero.value
    var divisores = `Divisores do número ${n}: 1`
    var soma = 1

    for(var ct = 2; ct < n; ct++){
        if(n % ct == 0){
            divisores += `,${ct}`
            soma = soma + ct
        }
    }

    if(n == soma){  
        lista.innerHTML = `
        ${divisores} (SOMA:${soma}) <br>
        ${n} é um Número Perfeito`
    }else{
        lista.innerHTML = `${n} NÃO é um Número Perfeito`
    }
}


btnMostrar.addEventListener("click", verificarNPerfeito)