/*
    Classes are a template for creating objects. They encapsulate data with code to work on that data
*/

class Pessoa {
    //propeties | fields | campos
    nome;
    sobrenome;
    idade;


    //methods
    apresentar() {
        return `Olá meu nome é ${this.nome} e minha idade é ${this.idade} anos`
    }
}

let eu = new Pessoa();
eu.nome = "carlos";
eu.sobrenome = "eduardo";
eu.idade = 26;

let tu = new Pessoa();
tu.nome = "bia";
tu.sobrenome = "lima";
tu.idade = 20;

console.table(eu.apresentar())
console.table(tu.apresentar())