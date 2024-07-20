// Soma de Dígitos
// Escreva uma função que receba um número e retorne a soma de seus dígitos.


function somaDigitos(numero) {
    let soma = 0;
    while (numero) {
        soma += numero % 10;  // Adiciona o dígito menos significativo
        numero = Math.floor(numero / 10);  // Remove o dígito menos significativo
    }
    return soma;
}

// Testando a função
console.log(somaDigitos(123));  // 6 (1 + 2 + 3)
console.log(somaDigitos(456));  // 15 (4 + 5 + 6)
console.log(somaDigitos(789));  // 24 (7 + 8 + 9)
console.log(somaDigitos(13579)); // 25 (1 + 3 + 5 + 7 + 9)



// Math.floor é uma função em JavaScript que retorna o maior número inteiro menor ou igual a um dado número. 
// Em outras palavras, ela arredonda um número para baixo até o próximo inteiro.