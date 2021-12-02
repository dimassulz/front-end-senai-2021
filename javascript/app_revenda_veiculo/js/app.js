let estoqueRevenda = []

const salvarCarro = () => {
    if(verificaCamposNaoPreenchidos()){
        Swal.fire('Verifique os dados da tela (campos não preenchidos)!')
        return
    }
    //1 forma 
    //crio o objeto, populando os dados diretamente
    let carro = {
        marca: document.querySelector('#marca').value,
        modelo: document.querySelector('#modelo').value,
        ano: document.querySelector('#ano').value,
        valor: document.querySelector('#valor').value
    }

     /** 2 forma
    let carro2 = {} //novo objeto vazio
    //populando o objeto
    carro2.marca = document.querySelector('#marca').value
    carro2.modelo = document.querySelector('#modelo').value
    carro2.ano = document.querySelector('#ano').value
    carro2.valor = document.querySelector('#valor').value

    console.log(carro2) */
    estoqueRevenda.push(carro)
    consultarEstoque(estoqueRevenda)
    limparCamposCadastro()
    Swal.fire('Dado salvo com sucesso!')
}

const verificaCamposNaoPreenchidos = () => {
   return document.querySelector('#marca').value == "" ||
    document.querySelector('#modelo').value == "" ||
    document.querySelector('#ano').value == "" ||
    document.querySelector('#valor').value == ""
}

const limparCamposCadastro = () => {
    document.querySelector('#marca').value = ""
    document.querySelector('#modelo').value = ""
    document.querySelector('#ano').value = ""
    document.querySelector('#valor').value = ""
    document.querySelector('#marca').focus()
}

const consultarEstoque = (estoque) => {
    mostrarLinhaCarro = ''
    if(estoque.length === 0){
        Swal.fire('Carro não encontrado!')
        let carroNaoEncontrado = `<tr><td colspan="5" class="text-center">- NENHUM REGISTRO ENCONTRADO -</td></tr>`
        document.querySelector('#listaCarros').innerHTML = carroNaoEncontrado
        return
    }
    estoque.forEach((carro, index)=>{
        mostrarLinhaCarro += `
        <tr>
            <td>${++index}</td>
            <td>${carro.marca}</td>
            <td>${carro.modelo}</td>
            <td>${carro.ano}</td>
            <td>${carro.valor}</td>
        </tr>
    `})
    document.querySelector('#listaCarros').innerHTML = mostrarLinhaCarro
}

const filtrarCarros = () => {
    if(document.querySelector('#pesquisar').value === '' &&  document.querySelector('#limite').value == ""){
        consultarEstoque(estoqueRevenda)
        return
    }
    let pesquisa = {
        nome: document.querySelector('#pesquisar').value,
        limite: Number(document.querySelector('#limite').value)
    }
  
    let dadoFiltrado = estoqueRevenda.filter((carro) => {
        let filterNome = carro.marca.includes(pesquisa.nome)
                        || carro.modelo.includes(pesquisa.nome)
                        || carro.ano.includes(pesquisa.nome)
        let filterPreco = Number(carro.valor) <= pesquisa.limite

        if(document.querySelector('#pesquisar').value !== '' && document.querySelector('#limite').value !== '') {
            return filterNome && filterPreco
        }
        if(document.querySelector('#pesquisar').value !== '' && document.querySelector('#limite').value === '') {
            return filterNome
        }
        if(document.querySelector('#pesquisar').value == '' && document.querySelector('#limite').value !== '') {
            return filterPreco
        }
    })
    consultarEstoque(dadoFiltrado)
    //limparCamposPesquisa()
}

const limparCamposPesquisa = () => {
    document.querySelector('#pesquisar').value = ""
    document.querySelector('#limite').value = ""
    document.querySelector('#pesquisar').focus()
}
novo.addEventListener("click", salvarCarro)
btnPesquisa.addEventListener("click", filtrarCarros)