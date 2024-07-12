const Alunos = {
    lista: [],

    adicionar_aluno: function (nome, sobrenome, idade, curso) {

        //=========METODOS=================
        const aluno = {
            Nome: nome,
            Sobrenome: sobrenome,
            idade: idade,
            Curso: curso,

        //==================================
            nome_completo: function () {
                return this.Nome + ' ' + this.Sobrenome
            }
        }
        this.lista.push(aluno)
    },

    imprimir_alunos: function() {
        for (let aluno of this.lista) {
            for (key in aluno) {

                if (typeof aluno[key] === 'function') {
                    console.log(aluno[key]())
                } else {
                    console.log(aleuno[ky])
                }
            }
        }
    }
}


Alunos.adicionar_aluno('Carlos', 'Eduardo', 26, 'Engenharia de Software')
Alunos.adicionar_aluno('Ana','Silva', 20, 'Ciencia da Computação')
console.log(Alunos)

Alunos.imprimir_alunos()