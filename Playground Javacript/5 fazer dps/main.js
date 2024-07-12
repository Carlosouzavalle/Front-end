/*
Crie um array de números e escreva uma função que retorne a soma de todos os elementos do array
*/

function sommaArray(numeros) {
    let soma = 0
    for(let i = 0; i <  numeros.length; i++) {
        soma += numeros[i]
    }

    return soma
}


// Tende agora
function MulptiplicaArray(numeros) {
    let mult = 1
    for(let i = 0; i < numeros.length; i++) {
        mult *= numeros[i]
    }
    return mult
}



let numeros = [3, 3, 3]

let resultado1 = sommaArray(numeros) 
let resultado2 = MulptiplicaArray(numeros)
console.log(resultado1)
console.log(resultado2)

// Não sabia fazer