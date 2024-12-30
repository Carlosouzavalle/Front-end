//Escrava um programa para aprovar o ampréstimo bancário para a compra de uma casa. 
//Pergunta o valor da casa, o salário do comprador a em quantos anos ele vai pagar.
//A prestação mensal, não pode exceder 30% do salário ou então o ampréstimo será negado.

let valorCasa = 80000
let salarioComprador = 1000
let financiamento = 7
let parcelas =  valorCasa / (financiamento * 12)

let porcetagemSalario = 0.30

let porcetagemSalarioFinal = salarioComprador * porcetagemSalario

// let prestacaoFinal = salarioComprador * (1 + prestacaoPorcetagen)

if (parcelas < porcetagemSalarioFinal) {
    console.log(`tudo certo!!! Financiamento aprovado parcela vai ficar ${parcelas.toFixed(2)}R$ `)
} else {
    console.log(`Finaciamento negado, parcelas vão ficar muito pesado para seu bolso ${parcelas.toFixed(2)}R$ `)
}

