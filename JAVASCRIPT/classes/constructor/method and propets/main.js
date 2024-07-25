class Pessoa { 
    #nome; // privada
    idade; 

    constructor(n, i) {
        this.#nome = n
        this.idade = i

    }

    #apresentar_interno() {
        console.log(`olá me chamo ${this.#nome} e tenho ${this.idade}`)
    }

    apresentar() {
        this.#apresentar_interno()
    }


    /* atraves de get e set 
    temos acesso ao "nome" e podemos alterar */

    //essa primeira vc vai setar o nome
    setNome(nome) {
        //this.#nome = nome.toUpperCase()
    
        if(nome == 'Carlos') {
            this.#nome = 'Carlos Eduardo'.toUpperCase()
        } else {
            this.#nome = nome
        }
    }

    //essa aqui vai receber
    getNome() {
        return this.#nome
    }
}

let eu = new Pessoa('carlos', 26)
// eu. 
/* 
    ao descomentar a linha 
    acima e tentar achar nome vai estar privado
*/
eu.setNome('Carlos')
console.log(eu.getNome())
eu.apresentar()