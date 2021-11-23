
let url = "./estados-cidades.json"
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let estados = data.estados;
        let options = ""
        estados.forEach(e => options += `<option value="${e.sigla}">${e.nome}</option>`)
        listaEstados.innerHTML = options
        listaEstados.addEventListener('change', function () {
            let optionsMun = ""
            let municipios = []
            municipios = estados.filter(e => e.sigla === this.value)[0].cidades
            municipios.forEach(v => optionsMun += `<option value="${v}">${v}</option>`)
            listaMun.innerHTML = optionsMun
        });
        
    })
    .catch(function (error) {
        console.log(error);
    });