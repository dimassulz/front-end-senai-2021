
btnMostrarMedia.addEventListener('click', function(){   
   
    var nome = nomeAluno.value // NOME DO ALUNO
    var n1 = parseFloat(nota1.value) // NOTA 1 DO ALUNO
    var n2 = parseFloat(nota2.value) // NOTA 2 DO ALUNO
    var media = (n1+n2)/2 // CALCULO A MËDIA DAS DUAS NOTAS
    var msg = `O aluno ${nome} está com a média ${media} e a sua situação é ` //MONTEI UMA MENSAGEM PADRAO

    if(media >= 70){ // verifico se a nota e maior ou igual a 70
        mostrarResultado.innerHTML = `
        <div class="alert alert-success" role="alert">
           ${msg} APROVADO - PARABÉNS!
        </div>
        `
    } else if(media >= 50) {
        mostrarResultado.innerHTML = `
        <div class="alert alert-info" role="alert">
           ${msg} EM RECUPERAÇÃO - ESTUDE: <a href="https://www.w3schools.com/js/js_if_else.asp" target="_blank"> W3 Schools IF ELSE </a>
        </div>
        `
    } else { //caso contrario
        mostrarResultado.innerHTML = `
        <div class="alert alert-danger" role="alert">
            ${msg} REPROVADO - ESTUDE: <a href="https://www.w3schools.com/js/js_if_else.asp" target="_blank"> W3 Schools IF ELSE </a>
        </div>
        `
    }
});


