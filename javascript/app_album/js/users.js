const contruirTabela = (htmlLinhas) => {
    return `<table class="table table-hover table-bordered table-responsive">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">USERNAME</th>
                    <th scope="col">E-MAIL</th>
                    <th scope="col">TELEFONE</th>
                    <th scope="col">SITE</th>
                    <th scope="col">ENDEREÇO</th>
                    <th scope="col">AÇÃO</th>
                </tr>
                ${htmlLinhas}
            </table>`
}

const contruirLinha = (user) => {
    return `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td><a href="http://${user.website}" target="_blank">${user.website}</a></td>
                <td>${user.address.street} ${user.address.suite} ${user.address.city} - ${user.address.zipcode}</td>
                <td><button type="button" class="btn btn-primary">EDITAR</button> <button type="button" class="btn btn-danger">DELETAR</button></td>
            </tr>`
}

const buscarUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users") //10 registros
    //apiFotos
    .then((resp) => resp.json())
    .then((users)=>{
        let htmlLinhas = "" //linhas
        let htmlTabela = "" //tabela
        users.map(user => htmlLinhas += contruirLinha(user)) //constroi todas as linhas (registros)
        htmlTabela = contruirTabela(htmlLinhas) //controi a tabela e injeta todas as linhas 
        document.querySelector("#listaUsuario").innerHTML = htmlTabela // exibe na tela
    })
    .catch(err => console.error("Errrou!"))  //opcional
    .finally(console.log("funcionando a API com usuarios")) //opcional
}
window.addEventListener("load", buscarUsers()) //load primeiro carregamento da pagina  