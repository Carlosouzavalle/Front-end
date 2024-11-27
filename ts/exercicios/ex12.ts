// crie um algoritmo que leia o preço de um produto e apresente ele com 5% de desconto

const produto: number = 100
const AtualDesconto: number = 0.05
const desconto: number = produto * (1 - AtualDesconto)
console.log(`O Produto vai ficar por R$${desconto}`)