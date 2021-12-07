let anoAtual =  new Date().getFullYear() // buscando o ano atual //1980

document.querySelector(".title span").textContent = anoAtual

document.querySelector("#idade").addEventListener("blur", () => {
    let idade = Number(document.querySelector("#idade").value)
    let anoNasc = anoAtual - idade;
    if(idade === '' || idade <= 0 || isNaN(idade) || idade > 125){
        Swal.fire({
            title: 'Erro!',
            text: 'Digite corretamente um valor entre 1 e 125',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
        document.querySelector("#idade").value = ""
        return 
    }
    document.querySelector(".subtitle").textContent = 'Ah... Então você nasceu em '+anoNasc
    Swal.fire({
        title: 'Show!',
        text: 'Ah... Então você nasceu em '+anoNasc,
        icon: 'success',
        confirmButtonText: 'Ok'
    })
    
})


 