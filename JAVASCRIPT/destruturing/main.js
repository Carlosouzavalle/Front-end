/*
    The destructuring assignment syntax is a JavaScript expression that makes it possible to 
    unpack values from arrays, or properties from objects, into distinct variables.
*/


let nomes = ['carlos', 'bia', 'alice'];
let [nome1, nome2, nome3] = nomes

console.log(nome1);
console.log(nome2);
console.log(nome3);

console.log('-' .repeat(50));

let nome_completo = 'carlos eduardo';
let [nome, sobrenome] = nome_completo.split(' ');
console.log(nome);
console.log(sobrenome);

console.log('-' .repeat(50))
//we can use destruturing in all interact variables (Map, Set, ect...)

let palavra = 'teste';
let [letra1, letra2,, letra4] = palavra;
console.log(letra1);
console.log(letra2);
console.log(letra4);


console.log('-' .repeat(50))

let valores = new Set(['carlos', 'bia', 'aline']);
let [nm1, nm2, nm3] = valores;
console.log(nm1);
console.log(nm2);
console.log(nm3);

console.log('-' .repeat(50))

let usuario = {};
[usuario.nome, usuario.sobrenome] = "Carlos Eduardo".split(' ');
console.log(usuario.nome);
console.log(usuario.sobrenome);

