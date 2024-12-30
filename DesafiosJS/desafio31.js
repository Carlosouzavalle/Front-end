// analisando uma frase 

let frase = 'ana ama pedro'

let contador = frase.toLowerCase().split('a').length - 1
let primeira = frase.indexOf('a')
let ultima = frase.lastIndexOf('a')

console.log(contador)
console.log(primeira)
console.log(ultima)