// Radar eletrônico

let velocidade = 120
let taCorrendoCarai = 80
let multa = 7
let guardaValor = velocidade - taCorrendoCarai
let vaiPagar = guardaValor * multa

if(velocidade > taCorrendoCarai) {
    console.log(`Ta correndo em pai, RECEBA  ${vaiPagar}R$ `)
}


