"use strict";
const produto = 100;
const AtualDesconto = 0.05;
const desconto = produto * (1 - AtualDesconto);
console.log(`O Produto vai ficar por R$${desconto}`);
