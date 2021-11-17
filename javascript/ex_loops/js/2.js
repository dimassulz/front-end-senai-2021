function mostrarFerramentaRepetida(){  
   // validarCampos();  
    var formFerramenta = ferramenta.value
    var mostraTexto = ""

    for(var ct = 0; ct < Number(qtd.value); ct++){
        mostraTexto += formFerramenta+" | "
    }

    lista.innerHTML = mostraTexto
}

function validarCampos(){
    if(ferramenta.value == ""){
        alert("Preencha o nome da ferramenta!")
        return false
    }  
    if(qtd.value == "" || isNaN(qtd.value)){
        alert("Preencha a quantidade corretamente!")
        return false
    }  
}


btnMostrar.addEventListener("click", mostrarFerramentaRepetida);