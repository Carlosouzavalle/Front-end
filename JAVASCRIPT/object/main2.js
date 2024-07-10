//using the literal of object

let cliente = {
    nome: 'Carlos',
    sobrenome: 'Eduardo',
    telefone: 123456789,



    //------------------------------------------
    //Arrow function doesnt work here
    nome_completo: function() {
        return this.nome + " " + this.sobrenome
    },

    alterar_nome: function(novo_nome) {
        return this.nome = novo_nome
    }, 

    alterar_sobrenome: function(novo_sobrenome) {
        return this.sobrenome = novo_sobrenome
    }, 
    alterar_telefone: function(novo_telefone) {
        return this.telefone = novo_telefone
    }
}

console.log(cliente.nome)
console.log(cliente.nome_completo())
console.log(cliente.telefone)
console.log(cliente.alterar_nome('Cadu'))
console.log(cliente.nome_completo())
console.log(cliente.alterar_sobrenome('Valle'))
console.log(cliente.nome_completo())
console.log(cliente.alterar_telefone(987456321))
