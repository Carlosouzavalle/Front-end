"use strict";
let so_espacos = 'Carlos';
let is_number = 'adjsy';
let is_alphbetic = '555';
let is_alpha_num = 'carloss2s';
let is_High = 'c';
function isOnlySpace(value) {
    return typeof value === 'string' && value.trim() === '';
}
function isNum(value) {
    return typeof value === 'number';
}
function isAlpha(value) {
    return typeof value === 'string' && /^[a-zA-Z]+$/.test(value);
}
function isAlphaNum(value) {
    return typeof value === 'string' && /^[a-zA-Z0-9]+$/.test(value);
}
function isHigh(value) {
    return typeof value === 'string' && /^[A-Z]+$/.test(value);
}
console.log(isOnlySpace(so_espacos));
console.log(isNum(is_number));
console.log(isAlpha(is_alphbetic));
console.log(isAlphaNum(is_alpha_num));
console.log(isHigh(is_High));
