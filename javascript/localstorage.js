/*fetch("https://instagram-stories1.p.rapidapi.com/v1/get_stories?userid=11680289981", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "instagram-stories1.p.rapidapi.com",
		"x-rapidapi-key": "511b370a49msh0901d954a2fb128p15502cjsnb6a9efdcaec4"
	}
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => {
	console.error(err);
})
*/

localStorage.setItem("aplicacao", "buscaCep")
localStorage.setItem("cep", JSON.stringify({cep: "72302501", cep2: "71100053", cep3: "70220300"}))
//JSON.stringfy transforma um objeto JSON em uma string (texto)

let app = localStorage.getItem("aplicacao")
let cep = JSON.parse(localStorage.getItem("cep")) //JSON.parse transformar a string armazenada em um objeto JSON

//localStorage.removeItem("cep") remove o item do localstorage
//localStorage.clear() remove todos os itens do localstorage

document.querySelector("h1").textContent = " Trabalhando o LocalStorage"

let enderecos = []

const apiCep = (cep) => {
    fetch("https://viacep.com.br/ws/"+cep+"/json/")
    .then(response => response.json())
    .then(json => {
        if(json.erro){
            document.getElementById("cep").value = ""
            return alert("CEP não encontrado!!!!")
        }
        let endereco = json.logradouro + " " + json.bairro + " - " + json.localidade + " - " +json.uf
        let objEnd = {cep, endereco} //cep: cep, endereco: endereco
        let encontrado = enderecos.find(e => e.cep == cep) 
        if(!encontrado){
            enderecos.push(objEnd)
        }
        localStorage.setItem("enderecos", JSON.stringify(enderecos))
        document.getElementById("endereco").textContent = endereco
    })
    .catch(err => {
        console.error(err)
    })
}

const buscarEnderecosCadastrados = () => {
    let endCad = JSON.parse(localStorage.getItem("enderecos"))
    if(endCad){
        endCad.map(e => {
            document.getElementById("enderecoCad").innerHTML += e.endereco + " - "+e.cep + " <br>"
        })
    }
}

document.getElementById("cep").addEventListener("keyup", () => {
    if(document.getElementById("cep").value !== "" && document.getElementById("cep").value.length === 8){
        apiCep(document.getElementById("cep").value)
        buscarEnderecosCadastrados()
    }else{
        document.getElementById("endereco").textContent = ""
    }
})
buscarEnderecosCadastrados()