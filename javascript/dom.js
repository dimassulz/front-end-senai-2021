function mostrarTexto () {
    //Buscando o value do elemento com o id="teste"
    var textoDaTela = document.getElementById('teste').value
    //alert(textoDaTela)

    //objeto => document
    //método => getElementById
    //propriedade => textContent
    document.getElementById('texto').textContent = textoDaTela

    document.getElementById('texto').innerHTML = `
        <span style="color:#CCC; font-size:2em">
            ${textoDaTela}</span>
    `
}

function mostrarDatas(){
    var data1 = document.getElementsByClassName('data')[0].value
    var data2 = document.getElementsByClassName('data')[1].value
    //alert(`${data1} e ${data2}`)
    document.getElementById('showData').innerHTML = `
        <span style="color:#CCC; font-size:2em">
            Data Inicio: ${data1} <br>
            Data Fim: ${data2}
        </span>
    `
}