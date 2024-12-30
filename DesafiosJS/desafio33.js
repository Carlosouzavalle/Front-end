// Jogo da Adivinhação numero aleatorio

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numero = Math.floor(Math.random() * 6)
console.log('Vou pensar em um número entre 0 e 5. Tente adivinhar...')
setTimeout(function() {
    console.log('PROCESSANDO...')
    setTimeout(function() {
        rl.question('Em que número eu pensei? ', (resposta) => {
            let tentativa = parseInt(resposta, 10) 
            if(tentativa === numero) {
                console.log('ACERTOU MIZERAVI!!!')
            } else {
                console.log('ERROU!!!')
            }
            rl.close()
        })
    }, 2000)
}, 2000)