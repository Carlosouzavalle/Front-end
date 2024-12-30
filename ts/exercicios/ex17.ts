// faça um programa que leia um angulo e mostre seu seno, cosseno e tangente

let angulo:number = 30
let seno = Math.sin(angulo*Math.PI/180) 
let cosseno = Math.cos(angulo*Math.PI/180) 
let tangente = Math.tan(angulo*Math.PI/180)

console.log(seno.toFixed(2))
console.log(cosseno.toFixed(2))
console.log(tangente.toFixed(2))