const calcular = document.getElementById('calcular');

function calcularParImpar () {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero !== '') {
        const parImpar; 
        if(numero % 2 == 0){
            parImpar = "Par"
        }else{
            parImpar = "Ímpar"
        }
        //parImpar = (numero % 2 == 0) ? "Par" : "Ímpar"
        resultado.textContent = `O número digitado é:  ${numero}, que é: ${parImpar} `;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', calcularParImpar);