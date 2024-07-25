class Pessoa {
    // nome;
    // idade;


    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }

    Apresentar() {
        return `Olá eu sou ${this.nome} e tenho ${this.idade} anos de idade`;
    }
}

let eu = new Pessoa('Carlos', 26);
eu.nome = 'cadu'
console.log(eu.Apresentar())
