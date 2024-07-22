let valores = new Map()
valores.set('nome', 'carlos')
valores.set('idade', 26)
valores.set(1,'1111')
console.table(valores)
console.log('-' .repeat(50))
for(let key of valores.keys()) {
    console.log(key)
}

console.log('-' .repeat(50))
for(let key of valores.values()) {
    console.log(key)
}
console.log('-' .repeat(50))
for(let key of valores.entries()) {
    console.log(key)
}
console.log('-' .repeat(50))
valores.forEach((valor, key) => {
    console.log(`o valor é ${valor} e a chave é ${key}`)
})
