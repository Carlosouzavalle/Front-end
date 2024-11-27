"use strict";
const qtdKM = 200;
const qtdDIA = 2;
const taxaDIA = 60;
const taxaKM = 0.15;
console.log(`Você percoreu ${qtdKM}KM ficou com o carro ${qtdDIA} dias, Você deve pagar ${(taxaDIA * 2) + (taxaKM * qtdKM)}R$`);
