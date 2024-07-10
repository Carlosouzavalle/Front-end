/*
    The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities
*/

let client1 = new Object(); // using the construct of object
let client2 = {} // using the literal of object 


// construct 
function Pessoa(nm, sb, tlf) {
    this.nome = nm 
    this.sobrenome = sb
    this.telefone = tlf

    /* here is a function that shows the full_name of our client
    */
    this.nome_completo = () => {
        return this.nome + " " + this.sobrenome
    }

    /*Here change the name to another name */
    this.alterar_nome = (novo_nome) => {
        this.nome = novo_nome
    }

    /* Here change the sobrenome */
    this.alterar_sobrenome = (novo_sobrenome) => {
        this.sobrenome = novo_sobrenome
    }

    /* this way also works  */
    this.alterar_telefone = function(novo_telefone) {
        this.telefone = novo_telefone
    }
}

let cliente = new Pessoa('Carlos', 'Eduardo', 123456789)
console.log(cliente.nome_completo())
console.log(cliente.telefone)
cliente.alterar_nome('Cadu')
console.log(cliente.nome_completo())
cliente.alterar_sobrenome('Valle')
console.log(cliente.nome_completo())
cliente.alterar_telefone(987456321)
console.log(cliente.telefone)


/* nome is totallyt diferent from nm, nm come to argument and
nome is a propety
*/