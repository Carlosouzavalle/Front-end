//Functions without parameters

// function SemParametros() {
//     console.log('Sem parametros')
// }

// SemParametros()


//Functions with parameters
// function ComParametros(texto) {
//     return texto = "OLáaa"
// }
// console.log(ComParametros())


//Functions with a lot of parameters

// function VariosParametros(a, b) {
//     console.log(a + b)
// }

// VariosParametros(2, 3)



//Some interest things

// function RandomValue() {
//     let a = "dentro"
//     console.log(a)
// }

// let a = "fora"
// console.log(a)

// RandomValue()
// console.log(a)

/* if u variable has be within a function u got a error cause the scope
    scope means the variable can exist in one place i mean 


    function RandomValue() {
    let a = "dentro"
    console.log(a)
}

its okay i know the value within variable "a" but if a call the same variable outside of function we got a error because 
that variable is not defined

*/



// Another way to declare a variable

// let texto = function() {
//     console.log('Texto legal')
// }

// console.log(texto())



//arrow function 
// let adicao = (a,b) => a + b
// console.log(20+30) 

let aviso = () => 'Warning!!!'
console.log(aviso())


let aviso2 = (nome) => `Warning!! ${nome}`
console.log(aviso2('carlos'))