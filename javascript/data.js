//HOJE
let dataAtual = new Date() //Fri Dec 03 2021 20:22:26 GMT-0300 (Horário Padrão de Brasília)
console.log(dataAtual) //Fri Dec 03 2021 20:22:26 GMT-0300 (Horário Padrão de Brasília)
console.log(dataAtual.getDate()) //o dia atual
console.log(dataAtual.getMonth()) //o mes atual
console.log(dataAtual.getFullYear()) //o ano atual

let dia = dataAtual.getDate() // 03/12/2021 dia atual
let mes = dataAtual.getMonth()+1 // 03/12/2021 dia atual
let ano = dataAtual.getFullYear() // 03/12/2021 dia atual

//AMANHA
let amanha = new Date()
amanha.setDate(dia+1) //adicionando o dia atual + 1 e setando a data de amanha 04/12/2021

let diaAmanha = amanha.getDate() // 03/12/2021 dia atual
let mesAmanha = amanha.getMonth()+1 // 03/12/2021 dia atual
let anoAmanha = amanha.getFullYear() // 03/12/2021 dia atual

console.log(amanha)
let msgData = `O dia de hoje é ${dia}/${mes}/${ano} e amanhã será dia ${diaAmanha}/${mesAmanha}/${anoAmanha}`
console.log(msgData)

//HORA
let hora = new Date()  //data atual
console.log(hora.getHours()) //hora
console.log(hora.getMinutes()) //minuto
console.log(hora.getSeconds()) //segundo
console.log(hora.getTime()) //valor numérico correspondente ao horário da data especificada de acordo com o horário universal.


//DATA ALTERADA
let dataNascimento = new Date(1995, 11, 1) 
//setando o Dia
dataNascimento.setDate(6)
console.log('dataNascimento', dataNascimento)

//setando o Ano
dataNascimento.setFullYear(1999)
console.log('dataNascimento', dataNascimento)

//setando o Mes
dataNascimento.setMonth(8)
console.log('dataNascimento', dataNascimento)

//mostrando o getTime()
console.log(Date.now())

const ajustarData = () => {
    let dataCampo = document.querySelector("#frmData").value
    let parteData = dataCampo.split("-")
    let frmAno = parteData[0] //ano
    let frmMes = parteData[1] //mes
    let frmDia = parteData[2] //dia

    console.log(`Data do campo: ${frmDia}/${frmMes}/${frmAno}`)
    alert(`Data do campo: ${frmDia}/${frmMes}/${frmAno}`)
    alert(`Data do campo momentJS: ${moment(dataCampo).format('DD/MM/YYYY')}`)
}

frmData.onchange = () => ajustarData()

//MOMENTJS
moment.locale('pt-br');   
console.log(moment().format('MMMM Do YYYY, hh:mm:ss a')); 
console.log(moment().format('dddd'));   
console.log(moment().format('dddd'));   