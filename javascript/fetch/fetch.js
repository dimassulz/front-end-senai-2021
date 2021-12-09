fetch("./estados-cidades.json")
    .then((resp) => resp.json())
    .then(function (data) {
        let estados = data.estados;
        let options = ""
        estados.forEach(e => options += `<option value="${e.sigla}">${e.nome}</option>`)
        listaEstados.innerHTML = options
        
        listaEstados.addEventListener('change', function () {
            let municipios = []
            let optionsMun = ""
            municipios = estados.filter(e => e.sigla === this.value)[0].cidades
            municipios.forEach(nomeMunicipio => optionsMun += `<option value="${nomeMunicipio}">${nomeMunicipio}</option>`)
            listaMun.innerHTML = optionsMun
        });
    })
    .catch(function (error) {
        console.log(error)
    })