/*
Números Primos
    Escreva uma função que receba um número e retorne true se ele for primo e false caso contrário.
*/

function NumeroPrimo(numero) {
    if(numero <= 1) {
        console.log('numero n primo')
        return
    } 

    for(let i = 2; i <= Math.sqrt(numero); i++) {
        if(numero % i === 0) {
            console.log('numero n primo')
            return
        }
    }

    console.log(true)
    console.log(numero)
}

NumeroPrimo(3)
NumeroPrimo(8)

/*
    A função Math.sqrt em JavaScript retorna a raiz quadrada de um número. 
    Por exemplo, Math.sqrt(9) retornará 3 porque 3 * 3 = 9.
*/