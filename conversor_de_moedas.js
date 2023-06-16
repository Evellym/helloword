console.log('Bem-vindo ao Conversor de Moedas!')
let reais = parseFloat(prompt('Digite o valor em Reais: '))

function opcoesm () {
  console.log('Escolha para qual moeda deseja converter: ')
  console.log('1: Dólar')
  console.log('2: Ien')
  console.log('0: Sair')
}

function convertedolar (reais) {
  const cotacaoDolar = 4.98
  return reais / cotacaoDolar
}

function converteiene (reais) {
  const cotacaoIene = 0.037
  return reais / cotacaoIene
}

let opcoes = null
while (opcoes !== '0') {
  opcoesm()
  opcoes = prompt('Opção: ')
  switch (opcoes) {
    case '1':
      const reaisParaDolar = convertedolar(reais)
      console.log('O valor para dólar é: ' + reaisParaDolar.toFixed())
      break

    case '2':
      const reaisParaIene = converteiene(reais)
      console.log('O valor para Iene é: ' + reaisParaIene.toFixed())
      break

    case '0':
      console.log('Saindo...')
      break

    default:
      console.log('Opção inexistente. Tente novamente')
      break
  }
}
