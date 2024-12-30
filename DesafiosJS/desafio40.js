//Escreva um programa que pergunta o salário de um funcionário e calcule o valor do seu aumento.
//Para salários superiores a R$1.250.00, calcula um aumento de 10%.
//Para os inferiores ou iguais, o aumento é de 15%.


let salarioBase = 900
let superior = 1250

if (salarioBase > superior) {
    let bonus = 0.10
    let ajuste = salarioBase * bonus
    // console.log(ajuste) 150
    let ajusteFinal = salarioBase * (1 + bonus)
    console.log(ajusteFinal.toFixed(2))
    //console.log(bonus)
} else if(salarioBase <= superior) {
    let bonus = 0.15
    let ajuste = salarioBase * bonus
    let ajusteFinal = salarioBase * (1 + bonus)
    console.log(ajusteFinal)   
}

