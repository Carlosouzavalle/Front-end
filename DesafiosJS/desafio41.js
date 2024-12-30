///Desenvolva um programa 
//que laia o comprimento de três ratas a diga ao usuário se
//elas podem ou não formar um triangulo.

let r1 = 3.5
let r2 = 2.75
let r3 = 4
let juncao = r2 + r3
let juncao2 = r1 + r3
let juncao3 = r1 + r2


if (r1 < juncao && r2 < juncao2 && r3 < juncao3) {
    console.log('da pra formar um triangulo')
} else {
    console.log('não da pra formar triangulo')
}