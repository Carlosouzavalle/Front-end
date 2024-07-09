// Crie uma função que receba dois números e retorne a soma, subtração, multiplicação e divisão desses números.

function valores(a, b) {
   console.log(a + b, a - b, a / b, a * b)
}

valores(10, 5)



//resposta do professor
// Função que realiza operações matemáticas básicas
function valores(a, b) {
   return {
       soma: a + b,
       subtracao: a - b,
       divisao: a / b,
       multiplicacao: a * b
   };
}

// Testando a função
let resultado = valores(10, 5);
console.log("Soma:", resultado.soma);              // Deve retornar 15
console.log("Subtração:", resultado.subtracao);    // Deve retornar 5
console.log("Divisão:", resultado.divisao);        // Deve retornar 2
console.log("Multiplicação:", resultado.multiplicacao);  // Deve retornar 50
