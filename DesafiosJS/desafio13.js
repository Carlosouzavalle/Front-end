// Gerar uma Lista de Números:

// Escreva uma função que retorne um array com todos os números de 1 até n.
// Exemplo: gerarNumeros(5) → [1, 2, 3, 4, 5]


function geraValores(n) {
    let numeros = []

    for(let i = 1; i <= n; i++) {
        numeros.push(i)
    } 

    return numeros
}

console.log(geraValores(10))