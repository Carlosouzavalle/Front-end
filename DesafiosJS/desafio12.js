// Verificar Par ou Ímpar:

// Escreva uma função que verifique se um número é par ou ímpar.
// Exemplo: parOuImpar(3) → "Ímpar"

function VerificarValor(num) {
    if(num % 2 === 0) {
        console.log('o numero é par')
    } else {
        console.log('numero impar')
    }
}

console.log(VerificarValor(5))