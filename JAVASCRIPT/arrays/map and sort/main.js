//map 
/*
    The map() method of Array instances creates a new array populated with the 
    results of calling a provided function on every element in the calling array.
*/


let nomes = ['carlos', 'joão', 'bia', 'fernanda']

// let tamanho = nomes.map(nome => nome.length)
// console.table(tamanho)


//exemplo2 The Math.sqrt() static method returns the square root of a number. That is
// let valores = [10,25,32,45,60,67,89,122]
// console.table(valores.map(n => Math.sqrt(n)))


//we can use the map to change the value in the array
// console.table(nomes.map(nome => {
//     return 'Olá ' + `${nome}`
// }))


// we can ordened a array
// nomes.sort()
// console.table(nomes)


/*the values are ordened by alfabethic order. it's a standard behavior */
let valores = [10,1, 3, 25,32,45,60,67,89,122]
valores.sort()


function comparar(a,b) {
    if(a > b) return 1
    if(a == b) return 0
    if(a < b) return -1
}

console.table(valores.sort(comparar))


console.table(valores.sort((a,b) => {
    console.log(`${a} compara com ${b}`)
    return a - b
}))