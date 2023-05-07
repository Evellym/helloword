console.log('Welcome to Area Calculator!');
let pi = 3.14;
let rep = true;

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaLosango(dMaior, dmenor) {
    return (dMaior * dmenor) / 2;
}

function areaCirculo(raio) {
    return pi * (raio * raio);
}

function opcoes() {
    console.log('Escolha a opção desejada para saber a área das seguintes figuras geométricas');
    console.log('1: Triângulo');
    console.log('2: Losango');
    console.log('3: Círculo');
    console.log('0: Sair');
}

while (rep) {
    opcoes();
    let opcao = prompt('Digite o número correspondente a sua escolha: ');

    switch (opcao) {
        case '1':
            let base = parseFloat(prompt('Digite o valor da base do triângulo: '));
            let altura = parseFloat(prompt('Digite o valor da altura do triângulo: '));
            let areaTrianguloResultado = areaTriangulo(base, altura);
            console.log('A área do triângulo é: ' + areaTrianguloResultado);
            break;

        case '2':
            let dMaior = parseFloat(prompt('Digite o valor da diagonal maior do losango: '));
            let dmenor = parseFloat(prompt('Digite o valor da diagonal menor do losango: '));
            let areaLosangoResultado = areaLosango(dMaior, dmenor);
            console.log('A área do losango é: ' + areaLosangoResultado);
            break;

        case '3':
            let raio = parseFloat(prompt('Digite o valor do raio do círculo: '));
            let areaCirculoResultado = areaCirculo(raio);
            console.log('A área do círculo é: ' + areaCirculoResultado);
            break;

        case '0':
            rep = false;
            console.log('Saindo...');
            break;

        default:
            console.log('Opção inválida. Tente novamente');
            break;
    }
}
