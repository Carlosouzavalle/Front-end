function exibir(num) {
    console.log(num)
}


function soma(a, b, callback) {
    let op = a + b
    callback(op)
}

function mult(a, b, callback) {
    let op = a * b
    callback(op)
}

soma(2, 2, exibir) // 4
mult(2, 3, exibir) // 6