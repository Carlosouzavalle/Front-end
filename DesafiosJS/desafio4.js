//faça um programa que mostre os seguintes resultados de um determinado valor 
/// (tipo, se tem espaços, se é um numero, se é alfabético, se é alfanumerico, se esta em maiusculo, 
// se esta em minusculo, e se esta capitalizado ) 


let valor = " 1234";
console.log("Tipo: ", typeof valor);
console.log("Tem espaços: ", valor.includes(" "));
console.log("É um número: ", !isNaN(valor));
console.log("É alfabético: ", isNaN(valor));
console.log("É alfanumérico: ", !isNaN(valor) && isNaN(valor));
console.log("Está em maiúsculo: ", valor === valor.toUpperCase());
console.log("Está em minúsculo: ", valor === valor.toLowerCase());
console.log("Está capitalizado: ", valor === valor[0].toUpperCase() + valor.slice(1).toLowerCase());
