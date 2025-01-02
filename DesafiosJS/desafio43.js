// conversão de bases binario, octal e hexadecimal 

function converteToBin(n) {
    return (n >>> 0).toString(2)
}
const x = converteToBin(45)
console.log(x)




let decimal = 20
function convertDecToHex() {
    let decimal2 = decimal.toString(16);

    console.log("Hex of " + decimal
        + " is =  " + decimal2)
}
convertDecToHex()




let d = 20
function convertDecToOct() {
    let d2 = decimal.toString(8)

    console.log(d2)
}
convertDecToOct()