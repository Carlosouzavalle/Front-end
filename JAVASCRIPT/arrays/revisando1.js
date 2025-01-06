let arr = [1,2,3,4,5,6,'carlos']

console.log(arr[4]) // Acessando valores de um array

arr.push(8,9) // aqui a gente add um valor ao final do array
console.log(arr)

// mb o animal aqui não explico o que é um array, de forma resumida um array é uma gaveta de roupas onde você pode guarda
// varias coisas tipo camisa, meias ,calças etc...
// Temos alguns metodos para manipular um array um deles é o push que vimos logo acima.

arr.pop()
console.log(arr)

// o metodo pop remove o ultimo elemento

arr.shift()
console.log(arr)

// o metodo shift a gente remove o primeiro elemento do array

arr.unshift('patricia')
console.log(arr)

// o metodo unshift add um elemento no começo do array


arr.splice(1, 3) 
console.log(arr)

// o metodo splice ele pode remover ou add elementos 1, 3 apartir do indice 1 remova 3 elementos