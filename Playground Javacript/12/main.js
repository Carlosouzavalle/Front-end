// Inversão de Array
// Escreva uma função que inverta a ordem dos elementos de um array.

// let valores = [1,2,3,4,5]

// function inverte_valores() {
//     let novos_valores = valores.reverse()
//     console.log(novos_valores)
// }

// inverte_valores()

//resposta do professor


let valores2 = [6,7,8,9,10]

function inverte_valores2(arr) {
    let novos_valores2 = [...arr].reverse()
    console.log(novos_valores2 + ' reverteu')
}

inverte_valores2(valores2)
console.log(valores2 + ' permanece normal')