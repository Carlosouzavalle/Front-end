//we can use destruturing in a interation


let cliente = {
    nome: 'Carlos',
    idade: 26,
    Profissao: 'Dev'
}


for(let [key, value] of Object.entries(cliente)) {
    console.log(`${key}: ${value}`)
}

