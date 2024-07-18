/*
    The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.


    The lastIndexOf() method of Array instances returns the last index at 
    which a given element can be found in the array, or -1 if it is not present. 
    The array is searched backwards, starting at fromIndex.

    The includes() method of Array instances determines whether an array includes a certain 
    value among its entries, returning true or false as appropriate.


    The find() method of Array instances returns the first element in the provided array that satisfies 
    the provided testing function. If no values satisfy the testing function, undefined is returned.

    
    The filter() method of Array instances creates a shallow copy of a portion of a given array, 
    filtered down to just the elements from the given array that pass the test implemented by the provided function.

*/

let nomes = ['carlos', 'bia', 'bruna', 'fernanda']

let posicao1 = nomes.indexOf('bia')
console.log(posicao1)

let posicao2 = nomes.indexOf('bruna', 2)
console.log(posicao2)

//if doesnt exist
// returns -1
let posicao3 = nomes.indexOf('Caio')
console.log(posicao3)


//lastindexOf
//searched backwards to start
let posicao4 = nomes.lastIndexOf('fernanda')
console.log(posicao4)


// returns a boolean if exist or not
let pesquisa = 'ana'
if(nomes.includes(pesquisa)) {
    console.log(pesquisa,' existe no array')
} else {
    console.log(pesquisa, 'n existe no array')
}

const CLIENTES = [
    {Nome: 'Carlos', idade: 26},
    {Nome: 'Vanesa', idade: 32 },
    {Nome: 'Caio', idade: 20 },
    {Nome: 'Bia', idade: 18 },
]


let cliente = CLIENTES.find(cli => cli.Nome == 'Caio')
console.log(cliente)


//
console.log(CLIENTES.filter(cli => cli.idade > 20))