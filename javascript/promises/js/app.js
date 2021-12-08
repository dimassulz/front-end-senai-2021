const p = new Promise((resolve, reject) => {
    //setTimeout(() => resolve('resolvida'), 3000)
    setTimeout(() => reject('rejeitada'), 3000)
})
  
console.log(p) //pendente

p.then((res) => {
    console.log(res) //resolvida
    alert("Promessa resolvida!")
})

p.catch((rej) => {
    console.log(rej) //rejeitada
    alert("Promessa nao resolvida!")
})
