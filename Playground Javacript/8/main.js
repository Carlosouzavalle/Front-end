/*
    Crie um loop que percorra os números de 1 a 100 e exiba 
    "Fizz" para múltiplos de 3, "Buzz" para múltiplos de 5 e 
    "FizzBuzz" para múltiplos de ambos.
 */

//meu codigo

// for(let i = 0; i < 100; i++) {

//     let mult3 = 3
//     if(mult3 < i) {
//         mult3 * 3
//         mult3++
//         console.log(mult3)
//     }
// }


// codigo da aula
for(let i = 0; i < 100; i++) {
    if(i % 3 === 0) {
        console.log(`${i} Fizz`)
    } else if(i % 5 === 0) {
        console.log(`${i} Buzz`)
    } else if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`)
    } else {
        console.log(i)
    }
}