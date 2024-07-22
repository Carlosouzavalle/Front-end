/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.
*/

let valores = new Map()
valores.set('nome', 'carlos')
valores.set('idade', 26)
valores.set(1,'1111')
console.table(valores)

/* the set method allow us to add a value and to catch a value we can use get */
console.log(valores.get(1))
console.log(valores.get('idade'))

/* we can use "has" to know if the collection have a X value */
if(valores.has('nome')){
  console.log('ta aqui')      
} else {
    console.log('n tem nada aq')
}