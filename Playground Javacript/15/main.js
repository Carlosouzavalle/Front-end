// Encontrar o Maior Número
// Escreva uma função que receba um array de números e retorne o maior número.

// let numeros = [1, 2, 3, 4, 5]



// function Analisa_valores(numeros) {
   
//     console.log(numeros.filter(numero => numero > 1))
  
// }

// Analisa_valores(numeros)


function Analisa_valores(numeros) {
    const maiorNumero = Math.min(...numeros);
    console.log(maiorNumero);
}

let numeros = [1, 2, 3, 4, 5];
Analisa_valores(numeros);  // 5



function Analisa_valores(numeros) {
    const maiorNumero = Math.max(...numeros);
    console.log(maiorNumero);
}

let numeros = [1, 2, 3, 4, 5];
Analisa_valores(numeros);  // 5
