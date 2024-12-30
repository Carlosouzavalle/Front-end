// Trocar Valores de Variáveis:

// Crie duas variáveis e troque seus valores.
// Exemplo: Se a = 5 e b = 10, após a troca, a = 10 e b = 5.

let a = 5
let b = 10
let guardavalor 

guardavalor = a
a = b 
b = guardavalor
console.log(b, 'valor de b')
console.log(a, 'valor de a')


console.log('==================chat resposta ================================')
let valor1 = 5;
let valor2 = 10;

// Troca os valores de 'valor1' e 'valor2'
// Usando Desestruturação de Arrays
[valor1, valor2] = [valor2, valor1];

console.log(valor2, 'valor de valor2'); // Saída: 5 'valor de valor2'
console.log(valor1, 'valor de valor1'); // Saída: 10 'valor de valor1'
