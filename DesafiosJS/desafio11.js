// Calcular Fatorial:

// Crie uma função que calcule o fatorial de um número.
// Exemplo: fatorial(5) → 120


let valor = 5

resultado = valor *  4 
resultado2 = resultado *  3 
resultado3 = resultado2 *  2
console.log(resultado3)


console.log('========resposta chat========')

let valor2 = 5
let fatorial = 1

for(let i = valor2; i > 1; i--) {
    fatorial *= i
}
console.log(fatorial)

// Explicação:
// Inicializamos fatorial como 1: Isso porque o fatorial de 0 ou 1 é 1, e também serve como acumulador para o resultado final.
// Loop for: Começamos do valor 5 (ou qualquer valor que você defina) e multiplicamos fatorial por i em cada iteração, decrementando i até chegar a 2.


console.log('========outra resposta chat========')
// Usando uma Função Recursiva

function calculaFatorial(n) {
    if(n === 0 || n === 1) {
        return 1
    } else {
        return n * calculaFatorial(n - 1)
    }
}

let valor3 = 5
let fatorial2 = calculaFatorial(valor3)

console.log(fatorial2)


// Explicação:
// Função recursiva: calcularFatorial chama a si mesma, diminuindo n até que n seja 0 ou 1, momento em que a recursão termina.
// Caso base: A função retorna 1 se n for 0 ou 1, interrompendo a recursão.