let carlos = { nome: 'Carlos', idade: 26 }
let bia = { nome: 'Bia', idade: 20 }
let larisa = { nome: 'larisa', idade: 22 }


let clientes = new Set([carlos, bia, larisa])

// clientes.forEach((value) => {
//     console.log(value.nome, value.idade);
// })


for(let chave of clientes.keys()) {
        console.log(chave)
}

console.log('------------------------------')
for(let valor of clientes.values()) {
    console.log(valor)
}
console.log('------------------------------')

for(let entrada of clientes.entries()) {
    console.log(entrada)
}