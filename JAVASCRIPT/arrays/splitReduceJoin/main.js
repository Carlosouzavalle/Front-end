//reverse split and join

/*
    The reverse() method of Array instances reverses an array in place and returns the 
    reference to the same array, the first array 
    element now becoming the last, and the last array element becoming the first. 
    In other words, elements order in the array will be turned towards the direction 
    opposite to that previously stated.



    The split() method of String values takes a pattern and divides this string into an ordered list of 
    substrings by searching for the pattern, puts these substrings into an array, and returns the array.


    The join() method of Array instances creates and returns a new string by concatenating all of the 
    elements in this array, separated by commas or a specified separator string. 
    If the array has only one item, then that item will be returned without using the separator.


*/



let nomes = ['carlos', 'joao', 'bia', 'fernanda','amanda']

console.table(nomes.reverse())


let enderecos = 'carlos@gmail.com, fernanda@gmail.com, bia@gmail.com'

// let colecao = enderecos.split(',')
// console.table(colecao)


let colecao2 = enderecos .split(',').map(e => {
    return e.trim()
    //The trim() method of String values removes whitespace from 
    //both ends of this string and returns a new string, without modifying the original string
})
console.table(colecao2)


let string1 = nomes.join('') // all together
let string2 = nomes.join(',') // comma separator
let string3 = nomes.join(' e ') // separated by e

console.table(string1)
console.table(string2)
console.table(string3)