// crie um algoritmo que pergunte a quantidade de km percorridos por um carro alugado e a quantidade de dias pelo 
// qual foi alugado. sendo que o preço a pagar é 60R$ por dia e 0,15R$ por km rodado

const qtdKM: number = 200
const qtdDIA: number = 2
const taxaDIA: number = 60
const taxaKM: number = 0.15

console.log(`Você percoreu ${qtdKM}KM ficou com o carro ${qtdDIA} dias, Você deve pagar ${(taxaDIA * 2) + (taxaKM * qtdKM)}R$`)