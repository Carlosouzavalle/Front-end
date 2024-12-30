//Separando dígitos de um número unidade, centena,dezena e milhar

let n = 3234

let unidade = n % 10
console.log(unidade)

n = (n - unidade) / 10
let dezena = n % 10
console.log(dezena)

n = (n - dezena) / 10
let centena = n % 10
console.log(centena)

n = (n - centena) / 10
let milhar = n % 10
console.log(milhar)

