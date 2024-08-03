//Contar Vogais
//Escreva uma função que conta o número de vogais em uma string.

function contaVogais(str) {
    const vogais = 'aeiouAEIOU'
    let count = 0


    for(let char of str) {
        if (vogais.includes(char)) {
            count++
        }
    }

    return count
}

console.log(contaVogais('carlos'))