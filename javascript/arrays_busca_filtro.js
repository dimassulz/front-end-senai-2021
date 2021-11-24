var listaIdades = [18,20,21,21,30,50,60,65,70,75,90]

console.log(`Usando o indexOf no 21: Posição do ARRAY ${listaIdades.indexOf(21)}`)
console.log(`Usando o lastIndexOf no 21: Posição do ARRAY ${listaIdades.lastIndexOf(21)}`)

//filtro array maior que 50 1a forma
let senior = listaIdades.filter(function(lista){
   return lista > 50
})

const filtroMaiorQueCinquenta = function(lista){
    return lista > 50
}
// filtro array maior que 50 2a forma - usando uma funcao a parte
senior = listaIdades.filter(filtroMaiorQueCinquenta)

//filtro array maior que 50 3a forma - usando arrow function
senior = listaIdades.filter(lista => lista > 50)

//mostrando no console
console.log(senior)

//array de usuarios
var usuarios = [
    {nome: "Irineu", login:"irineu1234@gmail.com", senha:"@12456"},
    {nome: "Marta", login:"martafeliz@gmail.com", senha:"@1244356"},
    {nome: "Vera", login:"vera_234@gmail.com", senha:"@43434"},
    {nome: "Francisco", login:"chiquinho_1234@gmail.com", senha:"@43434"},
    {nome: "Antonio", login:"antonio_321654@gmail.com", senha:"@65656"}
]

//filtro se quiser filtrar o array usuario pela senha @12456
let filterSenha = usuarios.filter(function(usuario){
    return usuario.senha === "@12456"
})

console.log("filterSenha "+filterSenha[0])

//filtro se quiser filtrar o array usuario pelo nome "Vera"
let filterNome = usuarios.filter(function(usuario){
    return usuario.nome === "Vera"
})

console.log("filterNome "+filterNome[0])

/**
 * Encontrar um nome no array usuarios
 */
const encontrarNome = function(){
    //verifica se o valor esta preenchido
    if(valor.value === ""){
        alert("Preencha um nome!")
        return 
    }   
    //filtro verificando se existe esse nome (tela) de usuario no array usuarios
    let encontrado = usuarios.filter(function(usuario){
        return usuario.nome.toLocaleLowerCase() === valor.value.toLocaleLowerCase()
    })
    //se o array encontrado tiver tamanho 0 o sistema mostra Nome não encontrado
    if(encontrado.length === 0){
        alert("Nome não econtrado")
    }else{//se encontrar algum valor ele vai mostrar a posicão 0 ${encontrado[0]}
        alert(`Nome: ${encontrado[0].nome} \nLogin: ${encontrado[0].login} \nSenha: ${encontrado[0].senha}`)
    }
}
//pegar o valor do campo na tela quando for retirado o foco do campo
valor.onblur = encontrarNome