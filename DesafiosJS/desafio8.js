// Contar Vogais em uma String:

// Crie uma função que conte o número de vogais em uma string.
// Exemplo: "JavaScript" → 3

const vogais = str => {

    let contadorDeVogais = 0;

    for (let char of str) {

        if ('aeiou'.includes(char)) contadorDeVogais++;
    }
    return contadorDeVogais
};

console.log(vogais('carlos'))
