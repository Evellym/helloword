/*Calcular o salário reajustado de um funcionário, segundo os critérios a seguir:

SALÁRIO ATUAL
R$500,00 a R$999,99       - Reajuste de 20%
R$1000,00 a R$1499,99  - Reajuste de 15%
R$1500,00 a R$2999,99  - Reajuste de 10%
R$3000,00 a R$4999,99  - Reajuste de 5%
R$5000,00 ou acima       - Não receberá reajuste*/
let salario = parseFloat(prompt("Para calcular o reajuste de seu salário em (%), informe um valor: "));

if (salario < 500) {
    console.log("Deverá contatar o Ministério do Trabalho");
} else if (salario >= 500 && salario <= 999.99) {
    salario *= 1.2; // Reajuste de 20%
    console.log("Salário reajustado para 20%: " + salario);
} else if (salario >= 1000 && salario <= 1499.99) {
    salario *= 1.15; // Reajuste de 15%
    console.log("Salário reajustado para 15%: " + salario);
} else if (salario >= 1500 && salario <= 2999.99) {
    salario *= 1.1; // Reajuste de 10%
    console.log("Salário reajustado para 10%: " + salario);
} else if (salario >= 3000 && salario <= 4999.99) {
    salario *= 1.05; // Reajuste de 5%
    console.log("Salário reajustado para 5%: " + salario);
} else if (salario >= 5000) {
    console.log("Salário não receberá reajuste: " + salario);
} else {
    console.log("Valor inválido. Por favor, insira um valor numérico válido.");
}
