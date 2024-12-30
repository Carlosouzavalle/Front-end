// Remover Duplicatas de um Array:

// Escreva uma função que receba um array e remova todos os elementos duplicados.
// Exemplo: [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]



const removeDuplicatas = (array) => {
    return [...new Set(array)]
}

const numeros = [1, 2, 2, 3, 4, 4]
const arraySemDuplicatas = removeDuplicatas(numeros)

console.log(arraySemDuplicatas)