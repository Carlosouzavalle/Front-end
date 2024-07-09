/* Crie uma função que receba um número como argumento e retorne "par" se o 
número for par e "ímpar" se o número for ímpar. 
*/

function valor(numero) {
    if (numero % 2 === 0) {
        return "par"
    } else {
        return "impar"
    }
}

console.log(valor(4))
console.log(valor(3))
console.log(valor(5))

// Não conseguir fazer 