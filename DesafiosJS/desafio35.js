//calcular o preço de uma viagem em km. calcule o preço da passagem
// cobrando 0.50 por km para viagens acima de 200km e 0.45 para viagens mais longas


let distancia = 300
let precoPadrao = 0.50
let promocao = 0.45

if(distancia <= 200) {
    console.log(distancia * precoPadrao)
} else if(distancia > 200) {
    console.log(distancia * promocao)
}