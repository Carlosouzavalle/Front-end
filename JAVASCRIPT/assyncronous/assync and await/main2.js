// async function myfunction() {
//     return 'Hello World'
// }       

// myfunction().then(console.log)

/* Uma função assincrona sempre vai retornar uma promise */

/* A palavra-chave await só pode ser usada dentro de funções async e é usada para "pausar" a execução da função 
até que uma promise seja resolvida.  Quando a promise é resolvida, o valor retornado
 pela promise pode ser atribuído diretamente a uma variável. */


//  async function funcao() {
//     const resposta = await fetch('https://api.exemplo.com/dados')
//     const dados = await resposta.json()
//     console.log(dados)
// }

// console.log(funcao())

// Nesse exemplo, fetch retorna uma promise. O uso de await 
// faz com que o JavaScript espere a resolução dessa promise antes de continuar para a próxima linha.


async function funcao2() {
    try {
        const resposta = await fetch('https://api.waifu.pics/many/sfw/waifu', {
            method: 'POST', // Especifica o método POST
            headers: {
                'Content-Type': 'application/json' // Define o cabeçalho para JSON
            },
            body: JSON.stringify({ // Envia um corpo JSON se necessário
                // Dependendo da API, você pode precisar passar um corpo.
                // Exemplo:
                // quantidade: 10
            })
        });

        console.log('Status da resposta:', resposta.status);

        if (!resposta.ok) {
            throw new Error('Erro aq: ' + resposta.status);
        }

        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.log('Ocorreu um erro:', error.message);
    }
}

funcao2();


