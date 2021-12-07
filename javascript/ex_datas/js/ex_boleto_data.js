
let btnCalcular = document.querySelector("#calcular")
let btnNovaConta = document.querySelector("#novaConta")

const TAXA_MULTA = 2 / 100; // multa por atraso
const TAXA_JUROS = 0.33 / 100;// juros por dia de atraso

const camposInvalidos = (dataBoleto, vlrBoleto) => dataBoleto === "" || vlrBoleto === 0 || isNaN(vlrBoleto) ||  vlrBoleto === ""

const calcular = () => {
    let dataBoleto = document.querySelector("#dtBoleto").value
    let vlrBoleto = VMasker.toNumber(document.querySelector("#vlBoleto").value) //vlBoleto 101123,99
    if(camposInvalidos(dataBoleto, vlrBoleto)){
        Swal.fire("Informe corretamente os dados do boleto!")
        document.querySelector("#dtBoleto").focus()
        return 
    }
    // cria duas variáveis (instancia dois objetos) tipo data (momentjs)
    let hoje = moment()
    console.log(hoje)
    let dataVencimento = moment(dataBoleto)
    console.log(dataVencimento)
    let diferenca = dataVencimento.diff(hoje, 'days') //numero de dias sem pagamento do boleto
    
    console.log(diferenca) // diferença tem que virar positivo

    //CALCULO DA MULTA 
    //CALCULO DO VALOR do Juro  
    //TOTAL BOLETO
}

//inicio a biblioteca momentjs com o padrao pt-br
moment.locale('pt-br')

//inicio a biblioteca VMasker para trabalhar um campo financeiro no campo vlBoleto 101.123,99
VMasker(document.querySelector("#vlBoleto")).maskMoney()

btnCalcular.addEventListener("click", () => calcular())
btnNovaConta.addEventListener("click", () => window.location.reload())