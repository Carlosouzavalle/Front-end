// const promises = new Promise((resolve, reject) => {
//     // const sucesso = true

//     if (sucesso) {
//         resolve('Operação realizada com sucesso')
//     } else {
//         reject('opps algo deu errado')
//     }
// })

// promises
//     .then((resultado) => {
//         console.log(resultado)
//     })
   
//     .catch((erro) => {
//         console.error('erro')
//     })

/*
    resolve: Função que você chama quando a operação assíncrona foi completada com sucesso.
    reject: Função que você chama quando algo deu errado.

    Consumindo Promises com .then() e .catch()
    Depois que você cria uma promise, você pode "consumir" ou lidar com o resultado dela usando os métodos .then() e .catch().

    then(): É executado quando a promise é resolvida com sucesso.
    catch(): É executado quando a promise é rejeitada por algum erro.


    Cadeias de Promises (Promise Chaining)
    O método .then() retorna uma nova promise, o que permite encadear várias operações assíncronas de maneira sequencial. 
    Isso é útil quando você precisa de várias operações dependentes umas das outras.

*/


const primeiraPromise = new Promise((resolve, reject) => {
    resolve('Primeira etapa concluída');
});

primeiraPromise
    .then((resultado) => {
        console.log(resultado);
        return 'Segunda etapa concluída';
    })
    .then((novoResultado) => {
        console.log(novoResultado);
        return 'Terceira etapa concluída';
    })
    .then((ultimoResultado) => {
        console.log(ultimoResultado);
    })
    .catch((erro) => {
        console.error('Ocorreu um erro:', erro);
    });
