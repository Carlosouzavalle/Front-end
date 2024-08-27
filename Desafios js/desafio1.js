// Reverter uma String:

// Escreva uma função que receba uma string e retorne essa string ao contrário.
// Exemplo: "hello" → "olleh"

function revertString(valor) {
    return valor.split("").reverse().join("")
}

console.log(revertString("carlos"))


// split vai separar 
// reverse vai reverter 
// join vai juntar tudo