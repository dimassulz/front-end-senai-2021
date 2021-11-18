function adicionarLista() {
    console.log("add lista")
}

function adicionarUrgencia() {
    console.log("add urgencia")
}
//arrow function
const atender = () => {
    console.log("atender")
}

btnAdd.addEventListener("click", adicionarLista);
btnUrg.addEventListener("click", adicionarUrgencia);
btnAtender.addEventListener("click", atender);