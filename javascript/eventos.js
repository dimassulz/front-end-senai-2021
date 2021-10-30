var frmNome;
var frmEmail;
var frmSenha;
var divMostrar;
//Botao cadastrar add evento
btnCadastrar.addEventListener('click', function(){
    frmNome = nome.value //document.getElementById('nome').
    frmEmail = email.value  
    frmSenha = senha.value
    divMostrar = document.getElementById('mostrarCadastro')
    alert('Cadastrado com sucesso')
   
    divMostrar.innerHTML = `
        <div>Nome: <strong>${frmNome}</strong></div>
        <div>E-mail: <strong>${frmEmail}</strong></div>
        <div>Senha: <strong>${frmSenha}</strong></div>
    `
    
})

nome.addEventListener('keyup', function(){
    frmNome = nome.value //document.getElementById('nome').
    frmEmail = email.value  
    frmSenha = senha.value
    divMostrar = document.getElementById('mostrarCadastro')
   
    divMostrar.innerHTML = `
        <div>Nome: <strong>${frmNome}</strong></div>
        <div>E-mail: <strong>${frmEmail}</strong></div>
        <div>Senha: <strong>${frmSenha}</strong></div>
    `
})