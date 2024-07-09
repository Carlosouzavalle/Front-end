/*
    Crie uma função que receba uma string e retorne
     a mesma string, mas com todas as letras em maiúsculas.
*/

function StringMaiuscula() {
    return "texto"
}

console.log(StringMaiuscula().toUpperCase())



// Resposta do professor
function stringMaiuscula(texto) {
    return texto.toUpperCase();
}

// Testando a função
console.log(stringMaiuscula("olá, mundo!"));  // Deve retornar "OLÁ, MUNDO!"
console.log(stringMaiuscula("javascript é incrível"));  // Deve retornar "JAVASCRIPT É INCRÍVEL"
