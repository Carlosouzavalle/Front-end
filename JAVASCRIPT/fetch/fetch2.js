//sintase básica

// fetch(url, options)
//     .then(response => {
//         // Lida com a resposta da requisição
//     })
//     .catch(error => {
//         // Lida com erros que podem ocorrer durante a requisição
//     })


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if(!response.ok) {
            throw new Error('Erro encontrado')
        }
        return response.json() // Converte a resposta em JSON
    })

    .then(data => {
        console.log(data) // Manipula os dados retornados
    })

    .catch(error => {
        console.error('There was a problem with the fetch operation', error)
    })