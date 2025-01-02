/*
    The pop() method of Array instances removes the last element from an array and returns that element. 
    This method changes the length of the array.


    The push() method of Array instances adds the specified 
    elements to the end of an array and returns the new length of the array.


    The shift() method of Array instances removes the first element from an array and 
    returns that removed element. This method changes the length of the array.

    The unshift() method of Array instances adds 
    the specified elements to the beginning of an array and returns the new length of the array.


    splice The splice() method of Array instances changes the contents of an array by removing 
    or replacing existing elements and/or adding new elements in place.



    slice - The slice() method of Array instances returns a shallow copy of a portion of an array into 
    a new array object selected  from start to end (end not included) 
    where start and end represent the index of items in that array


    concat - The concat() method of Array instances is used to merge two or more arrays. 
    This method does not change the existing arrays, but instead returns a new array.

*/

let nomes = ['Carlos', 'Maria', 'Bruna']

//=============POP - remove the last element in the array

// console.log(nomes)
// console.log(nomes[2])
// nomes.pop()
// console.log(nomes)
// console.log(nomes[2])




//=========PUSH - add a element in the final of array
nomes.push('Bia')
console.log(nomes)


//=======SHIFT  -  remove the first element
nomes.shift()
console.log(nomes)


//========UNSHIFT - add a element in the first position of the array
nomes.unshift('Helena')
console.log(nomes)




let nomes2 = ['Carlos', 'Maria', 'Bruna', 'Camila']

nomes2.splice(2, 1) // no indice 2, remove 1 elemento
console.log(nomes2)


nomes2.splice(2, 1, 'jesica')
console.log(nomes2)


nomes2.splice(2, 0, 'jefiner, samantha')
console.log(nomes2)



let nomes_extraidos = nomes2.slice(1,3)
console.log(nomes2)
console.log(nomes_extraidos)

let nova_lista = nomes_extraidos.concat(nomes2)
console.log(nova_lista)