//dissecando uma variavel
let so_espacos: any = 'Carlos'
let is_number: any = 'adjsy'
let is_alphbetic: any = '555'
let is_alpha_num: any = 'carloss2s'
let is_High: any = 'c'

function isOnlySpace(value: any): boolean {
    return typeof value === 'string' && value.trim() === ''
}

function isNum(value: any): boolean {
    return typeof value === 'number'
}

function isAlpha(value: any): boolean {
    return typeof value === 'string' && /^[a-zA-Z]+$/.test(value);
}

function isAlphaNum(value: any): boolean {
    return typeof value === 'string' && /^[a-zA-Z0-9]+$/.test(value)
}

// segue a mesma logica para minuscula, apenas alterar a regez para a-z
function isHigh(value: any):boolean {
    return typeof value === 'string' && /^[A-Z]+$/.test(value)
}


console.log(isOnlySpace(so_espacos))
console.log(isNum(is_number))
console.log(isAlpha(is_alphbetic))
console.log(isAlphaNum(is_alpha_num))
console.log(isHigh(is_High))