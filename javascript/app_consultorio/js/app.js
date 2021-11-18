const adicionarLista = function() {
    console.log("add lista")
}

const adicionarUrgencia = function() {
    console.log("add urgencia")
}
//arrow function
const atender = () => {
    console.log("atender")
}

btnAdd.addEventListener("click", adicionarLista);
btnUrg.addEventListener("click", adicionarUrgencia);
btnAtender.addEventListener("click", atender);