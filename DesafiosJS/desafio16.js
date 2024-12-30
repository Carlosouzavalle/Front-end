// faça um programa que receba a altura e a largura mostre o tamanho e m² e quantos litros de tinta precisa para pintar
// a cada 2m de parede precisa de 1L de tinta


const altura = 2.5
const largura = 1.75
const areaTotal = altura * largura

const litrosDeTinta = areaTotal / 2;

console.log(`A área total da parede é ${areaTotal.toFixed(2)} m².`);
console.log(`Você precisará de ${litrosDeTinta.toFixed(2)} litros de tinta para pintá-la.`);