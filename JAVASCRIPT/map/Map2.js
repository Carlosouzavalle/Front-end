let valores = new Map([
    ['nome', 'Carlos'],
    ['Idade', 26],
    ['Profissão', 'Programador'],
])

console.log(valores)
console.log(typeof(valores))
console.log('-' .repeat(50))


let objeto = {
    nome: 'Carlos',
    idade: 26,
    Profissao: 'Programador'
}

let valores2 = new Map(Object.entries(objeto))
console.log(valores2.get('Profissao'))

console.log('-' .repeat(50))
console.log(typeof(valores2))