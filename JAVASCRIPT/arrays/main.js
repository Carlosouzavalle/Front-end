/*
    The Array object, as with arrays in other programming languages, enables storing a 
    collection of multiple items under a single variable name, and has members for performing common array operations.
*/

//There are two ways to declare a array

// let nomes = new Array()
// let nomes2 = []



// let nomes2 = ['Carlos', 'Ana', 'Bia']

// console.log(nomes2)
// console.log(nomes2[0])
// console.log(nomes2[1])
// console.log(nomes2.length)



//we can change a value by index
// nomes2[1] = 'Katarina'
// console.log(nomes2)



/*
    we can have object inside the array
*/

let Contas = [
    {nome: 'Carlos', idade: 26, saldo:'1000R$'},
    {nome: 'Ana', idade: 20, saldo:'5000R$'},
    {nome: 'Maria', idade: 46, saldo:'10000R$'}
]

console.log(Contas)
console.log(Contas[0])
console.log(Contas[1])