var idade = parseInt(prompt("Digite a sua idade: "))
//IDADE
var idade = 18
var resposta = "";
if (idade >= 18) {
    resposta = 'Ola sua idade, deixa vc ver o conteudo desse site!';
} else {
    resposta = 'Sua idade não permite vc ver o conteudo desse site!';
    //window.location = "https://google.com"; //redicionamento da pagina
}

alert(resposta)


//HORA

var hora = parseInt(prompt("Digite a hora: "))
var respostaHora;

if (hora < 12) { //-99999999 a 11
    respostaHora = "Bom dia!";
} else if (hora <= 18) { //12 a 18
    respostaHora = "Boa tarde!";
} else { // > 18
    respostaHora = "Boa noite!";
}

alert(respostaHora)


//SENHA

var senha = prompt("Digite a senha: ") //string
var respostaSenha;
if (senha == 123456) { // senha: 123456 (int) === 123456 (int)
    respostaSenha = "Senha correta! Bem vindo ao sistema!";
}  else { 
    respostaSenha = "Senha incorreta! Tente novamente!";
}
alert(respostaSenha)