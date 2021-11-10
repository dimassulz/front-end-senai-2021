var numero1 = Number(prompt("Digite o primeiro numero"))
var numero2 = Number(prompt("Digite o segundo numero"))

n1.innerHTML = numero1;
n2.innerHTML = numero2;

var numerosPares = "";
var numerosImpares = "";

//USANDO O WHILE
/* while(numero1 <= numero2){
    if(numero1 % 2 == 0){
        numerosPares += `${numero1}, `
    }else{
        numerosImpares += `${numero1}, `
    }
    numero1++
}  */

//USANDO O FOR
for(var n = numero1; n <= numero2; n++){
    if(n % 2 == 0){
        numerosPares += `${n}, `
    }else{
        numerosImpares += `${n}, `
    }
}

resultado.innerHTML = `Os números pares desse intervalo são ${numerosPares} <hr>

Já o números ímpares desse intervalo são ${numerosImpares}`


