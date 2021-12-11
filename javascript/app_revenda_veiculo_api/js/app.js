let estoqueRevenda = []

const API = 'https://app-revenda-mentoria.herokuapp.com/api/revenda'
//GET https://app-revenda-mentoria.herokuapp.com/api/revenda //BUSCO TODOS OS CARROS
//GET https://app-revenda-mentoria.herokuapp.com/api/revenda/ID_CARRO //BUSCO UM CARRO
//POST https://app-revenda-mentoria.herokuapp.com/api/revenda //SALVO UM CARRO
//PUT https://app-revenda-mentoria.herokuapp.com/api/revenda/ID_CARRO //EDITO UM CARRO
//DELETE https://app-revenda-mentoria.herokuapp.com/api/revenda/ID_CARRO //DELETO UM CARRO

//BUSCA OS CARROS 
const buscarCarros = () => {
    fetch(API) //promessa (VERB: GET)
    .then(response => response.json()) //fullified ok! resposta e uso um metodo json() pra converter o objeto
    .then(json => json.data) // pego o json e a propriedade data (resultado com o array do estoque)
    .then(estoque => {
        estoqueRevenda = estoque
        consultarEstoque(estoqueRevenda)
    }) //chamo a funcao consultarEstoque passando o resultado do array encontrado na api
    .catch(err => console.log(err))
}

//ACAO DO BOTAO NOVO ou SALVAR
const salvarCarro = () => {
    if(verificaCamposNaoPreenchidos()){
        Swal.fire('Verifique os dados da tela (campos não preenchidos)!')
        return
    }
    let carro = {
        marca: document.querySelector('#marca').value,
        modelo: document.querySelector('#modelo').value,
        ano: document.querySelector('#ano').value,
        valor: document.querySelector('#valor').value
    }

    if(document.querySelector('#idCarro').value !== ""){ //VERIFICAR SE VAI ATUALIZAR OU CADASTRAR UM NOVO CARRO
        editarApi(carro, document.querySelector('#idCarro').value)
    }else{
        cadastrarApi(carro)
    }
    
}

//CADASTRO DO CARRO 
const cadastrarApi = (carro) => {
    let paramsApi = { 
        method:'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: Object.keys(carro).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(carro[k])}`).join('&')
    }
    fetch(API, paramsApi) //promessa (VERB: POST) //salvando na API
    .then(response => {
        if (!response.ok) {
            return new Error('Falhou a inserção do carro') //catch
        }
        return response.json()
    }) 
    .then(e =>{
        buscarCarros()
        limparCamposCadastro()
        Swal.fire('Carro adicionado com sucesso!')
    }) //busco os carros novamente
    .catch(err => Swal.fire("OCORREU UM ERRO"))
}

//FIM CADASTRO DO CARRO 


//EDITAR O CARRO 
const editarItem = (id) => {
    fetch(API+"/"+id) //promessa (VERB: GET)
    .then(response => response.json()) //fullified ok! 
    .then(json => json.data) 
    .then(carro => preencherCampoEditar(carro))
    .catch(err => console.error("OCORREU UM ERRO AO RETORNAR O VEICULO!"))
}

const preencherCampoEditar = (carro) => {
    document.querySelector('#marca').value = carro.marca
    document.querySelector('#modelo').value = carro.modelo
    document.querySelector('#ano').value = carro.ano
    document.querySelector('#valor').value = carro.valor
    document.querySelector('#idCarro').value = carro.id
    document.querySelector('#marca').focus()
    document.querySelector("#boxCadastro h2").textContent = "EDITANDO CARRO "+carro.id + " - " +carro.marca + " - "+carro.modelo 
    document.querySelector("#novo").textContent = "SALVAR"
}

const editarApi = (carro, id) => {
    let paramsApi = { 
        method:'PUT', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: Object.keys(carro).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(carro[k])}`).join('&')
    }
    fetch(API+"/"+id, paramsApi) //promessa (VERB: PUT) ATUALIZANDO
    .then(response => response.json()) //fullified ok! 
    .then(data => {
        buscarCarros()
        limparCamposCadastro()
        Swal.fire("Carro editado com sucesso!")
    }) 
    .catch(err => console.error("OCORREU UM ERRO AO RETORNAR O VEICULO!"))
}

//FIM EDITAR O CARRO 


//DELETE

const perguntarDeletarItem = (id) => {
    Swal.fire({
        title: 'Deseja remover o carro do estoque?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SIM!',
        cancelButtonText: 'NÃO!',
    }).then((result) => {
        if (result.isConfirmed) {
            apiDeleteItem(id)
        }
    })
}

const apiDeleteItem = (id) => {
    let paramsApi = { 
        method:'DELETE'
    }
    fetch(API+"/"+id, paramsApi) //promessa (VERB: DELETE)
    .then(response => {
        if(response.ok){
            buscarCarros()
            Swal.fire(
                'REMOVIDO!',
                'O carro foi removido com sucesso!',
                'success'
            )
        }
    })
    .catch(err => console.error(err))
}

// FIM DELETE



//LISTA DOS CARROS
const consultarEstoque = (estoque) => {
    let mostrarLinhaCarro = ''
    if(estoque.length === 0){
        Swal.fire('Carro não encontrado!')
        document.querySelector('#listaCarros').innerHTML = `<tr><td colspan="5" class="text-center">- NENHUM REGISTRO ENCONTRADO -</td></tr>`
        return
    }
    estoque.forEach(carro => mostrarLinhaCarro += construirLinha(carro))
    document.querySelector('#listaCarros').innerHTML = mostrarLinhaCarro
}

const construirLinha = (carro) => {
    return `<tr>
                <td>${carro.id}</td>
                <td>${carro.marca}</td>
                <td>${carro.modelo}</td>
                <td>${carro.ano}</td>
                <td>${carro.valor}</td>
                <td><a class="btn btn-primary" onclick="editarItem(${carro.id})">EDITAR</a> 
                    <a class="btn btn-danger" onclick="perguntarDeletarItem(${carro.id})">DELETE</a></td>
            </tr>`
}

//FIM LISTA DOS CARROS


//PESQUISA DOS CARROS

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
//FIM PESQUISA DOS CARROS

//LIMPEZA DOS CAMPOS

const limparCamposPesquisa = () => {
    document.querySelector('#pesquisar').value = ""
    document.querySelector('#limite').value = ""
    document.querySelector('#pesquisar').focus()
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
     document.querySelector('#idCarro').value = ""
     document.querySelector("#boxCadastro h2").textContent = "Cadastrar Novo"
     document.querySelector("#novo").innerHTML = `<i class="fas fa-plus-square"></i> Novo`
     document.querySelector('#marca').focus()
 }

window.addEventListener("load", buscarCarros)
novo.addEventListener("click", salvarCarro)
btnPesquisa.addEventListener("click", filtrarCarros)
