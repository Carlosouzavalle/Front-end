let nomes = ['carlos', 'bruna', 'bia', 'fernanda']

// for(let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i])
// }



/* The forEach() method of Array instances executes a provided function once for each array element. */

//com arrowfunction
nomes.forEach((e, index) => {
    console.log(`o elemeto é ${e} e o indice é ${index}`)
});


// function normal
// nomes.forEach(function(e, index) {
//     console.log(`o elemento é ${e} e seu indice é ${index}`)
// })


// nomes.forEach(function(e, index, colecao) {
//     console.log(`o elemento é ${e} o indice é ${index} e sua coleção é ${colecao}`)
// })

