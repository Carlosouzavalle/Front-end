// faça um programa que leia o comprimento do cateto oposto e do cateto adjacente
// de um triângulo, calcule e mostre o comprimento da hipotenusa.

let catetoAdjacente = 4
let catetoOposto = 3
let hipotenusa = (catetoAdjacente ** 2) + (catetoOposto ** 2)
let resultado = Math.sqrt(hipotenusa)
console.log(resultado)