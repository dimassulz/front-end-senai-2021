function verificarNota(){
    if(nome.value == ""){
        alert("Digite um nome")
        return
    }
    if(nota.value == "" || nota.value < 0){
        alert("Digite um valor maior ou igual a 0")
        return
    }

    var notaAluno = nota.value
    var notaLetra = ""

    if(notaAluno < 60){
        notaLetra = "F"
    }else if(notaAluno < 70){
        notaLetra = "D"
    }else if(notaAluno < 80){
        notaLetra = "C" //75 <-
    }else if(notaAluno < 90){
        notaLetra = "B" 
    }else{
        notaLetra = "A"
    }

    lista.innerHTML = `<h1>Aluno ${nome.value}, nota ${notaLetra} </h1>`
}
btnMostrar.addEventListener("click", verificarNota)