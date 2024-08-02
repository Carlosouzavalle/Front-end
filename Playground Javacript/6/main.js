//brincando com array e objetos


const Alunos = {
    lista: [],

    adicionar_aluno: function (nome, sobrenome, idade, curso, numero_matricula) {

        //=========METODOS=================
        const aluno = {
            Nome: nome,
            Sobrenome: sobrenome,
            idade: idade,
            Curso: curso,
            Numero_matricula: numero_matricula,

            //==================================
            nome_completo: function () {
                return this.Nome + ' ' + this.Sobrenome
            }

        }
        this.lista.push(aluno)
    },

    imprimir_alunos: function () {
        for (let aluno of this.lista) {
            for (key in aluno) {

                // if (typeof aluno[key] === 'function') {
                //     console.log(aluno[key]())
                // } else {
                //     console.log(aluno[key])
                // }
            }
        }
    },


    alterar_nome: function (nome_atual, novo_nome) {
        for (let aluno of this.lista) {
            if (aluno.Nome === nome_atual) {
                aluno.Nome = novo_nome
            }
        }
    },


    alterar_curso: function (numero_matricula, novo_curso) {
        for (let aluno of this.lista) {
            if(aluno.Numero_matricula === numero_matricula) {
                aluno.Curso = novo_curso
            }
        }
    }
}


Alunos.adicionar_aluno('Carlos', 'Eduardo', 26, 'Engenharia de Software', 1)
Alunos.adicionar_aluno('Ana', 'Silva', 20, 'Ciencia da Computação', 2)
Alunos.adicionar_aluno('Carol', 'Almeida', 23, 'Ciencia da Computação', 3)

// Alunos.alterar_nome('Julia', 'Carol') 
Alunos.alterar_nome('Ana', 'Julia')


Alunos.alterar_curso(2, 'Medicina')
console.log(Alunos)
