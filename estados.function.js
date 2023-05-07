let estado 
let dn = 1

function capital(estado){
    switch(estado){
        case 'AC': console.log('Capital é Rio Branco')
        break
        case 'AL': console.log('Capital é Maceió')
        break
        case 'AM': console.log('Capital é Manaus')
        break
        case 'AP': console.log('Capital é Macapá')
        break
        case 'BA': console.log('Capital é Salvador')
        break
        case 'CE': console.log('Capital é Fortaleza')
        break
        case 'DF': console.log('Capital é Brasília')
        break
        case 'ES': console.log('Capital é Vitória')
        break
        case 'GO': console.log('Capital é Goiânia')
        break
        case 'MA': console.log('Capital é São Luis')
        break
        case 'MT': console.log('Capital é Cuiabá')
        break
        case 'MS': console.log('Capital é Campo Grande')
        break
        case 'MG': console.log('Capital é Belo Horizonte')
        break
        case 'PA': console.log('Capital é Belém')
        break
        case 'PB': console.log('Capital é João Pessoa')
        break
        case 'PR': console.log('Capital é Curitiba')
        break
        case 'PE': console.log('Capital é Recife')
        break
        case 'PI': console.log('Capital é Teresina')
        break
        case 'RJ': console.log('Capital é Rio de Janeiro')
        break
        case 'RN': console.log('Capital é Rio Grande do Norte')
        break
        case 'RS': console.log('Capital é Porto Alegre')
        break
        case 'RO': console.log('Capital é Porto Velho')
        break
        case 'RR': console.log('Capital é Boa Vista')
        break
        case 'SC': console.log('Capital é Florianópolis')
        break
        case 'SP': console.log('Capital é São Paulo')
        break
        case 'SE': console.log('Capital é Aracajú')
        break
        case 'TO': console.log('Capital é Palmas')
        break
        default:
        console.log('Esta sigla não pertence a nenhum estado')
    }
}
function regiao(estado) {
    switch(estado){
        case 'AC': console.log('Pertence a Região Norte')
        break
        case 'AL': console.log('Pertence a Região Nordeste')
        break
        case 'AM': console.log('Pertence a Região Norte')
        break
        case 'AP': console.log('Pertence a Região Norte')
        break
        case 'BA': console.log('Pertence a Região Nordester')
        break
        case 'CE': console.log('Pertence a Região Nordeste')
        break
        case 'DF': console.log('Pertence ao Distrito Federal')
        break
        case 'ES': console.log('Pertence a Região Sudeste')
        break
        case 'GO': console.log('Pertence a Região Centro-Oeste')
        break
        case 'MA': console.log('Pertence a Região Nordeste')
        break
        case 'MT': console.log('Pertence a Região Centro-Oeste')
        break
        case 'MS': console.log('Pertence a Região Centro-Oeste')
        break
        case 'MG': console.log('Pertence a Região Sudeste')
        break
        case 'PA': console.log('Pertence a Região Norte')
        break
        case 'PB': console.log('Pertence a Região Nordeste')
        break
        case 'PR': console.log('Pertence a Região Sul')
        break
        case 'PE': console.log('Pertence a Região Nordeste')
        break
        case 'PI': console.log('Pertence a Região Nordeste')
        break
        case 'RJ': console.log('Pertence a Região Sudeste')
        break
        case 'RN': console.log('Pertence a Região Nordeste')
        break
        case 'RS': console.log('Pertence a Região Sul')
        break
        case 'RO': console.log('Pertence a Região Norte')
        break
        case 'RR': console.log('Pertence a Região Norte')
        break
        case 'SC': console.log('Pertence a Região Sul')
        break
        case 'SP': console.log('Pertence a Região Sudeste')
        break
        case 'SE': console.log('Pertence a Região Nordeste')
        break
        case 'TO': console.log('Pertence a Região Norte')
        break
        default:
        console.log('Região inválida ou não existe')
    }
    }
    function fusoh(estado){
        switch(estado){
            case 'AC': console.log('Fuso Horário GMT-5')
            break
            case 'AL': console.log('Fuso Horário GMT-3')
            break
            case 'AM': console.log('Fuso Horário GMT-3')
            break
            case 'AP': console.log('Fuso Horário GMT-3')
            break
            case 'BA': console.log('Fuso Horário GMT-3')
            break
            case 'CE': console.log('Fuso Horário GMT-3')
            break
            case 'DF': console.log('Fuso Horário GMT-3')
            break
            case 'ES': console.log('Fuso Horário GMT-3')
            break
            case 'GO': console.log('Fuso Horário GMT-3')
            break
            case 'MA': console.log('Fuso Horário GMT-3')
            break
            case 'MT': console.log('Fuso Horário GMT-4')
            break
            case 'MS': console.log('Fuso Horário GMT-4')
            break
            case 'MG': console.log('Fuso Horário GMT-3')
            break
            case 'PA': console.log('Fuso Horário GMT-3')
            break
            case 'PB': console.log('Fuso Horário GMT-3')
            break
            case 'PR': console.log('Fuso Horário GMT-3')
            break
            case 'PE': console.log('Fuso Horário GMT-3')
            break
            case 'PI': console.log('Fuso Horário GMT-3')
            break
            case 'RJ': console.log('Fuso Horário GMT-3')
            break
            case 'RN': console.log('Fuso Horário GMT-3')
            break
            case 'RS': console.log('Fuso Horário GMT-3')
            break
            case 'RO': console.log('Fuso Horário GMT-4')
            break
            case 'RR': console.log('Fuso Horário GMT-4')
            break
            case 'SC': console.log('Fuso Horário GMT-3')
            break
            case 'SP': console.log('Fuso Horário GMT-3')
            break
            case 'SE': console.log('Fuso Horário GMT-3')
            break
            case 'TO': console.log('Fuso Horário GMT-3')
            break
            default:
            console.log('Região inválida ou não existe')
       }
    }
while(dn > 0){
    let opcao = prompt(console.log('Selecione qual informação deseja saber sobre os Estados do Brasil\n 1:Capital do Estado \n2:Região do Estado\n 3:Fuso Horário')).toUpperCase()
    switch(opcao){
        case '1':
            console.log('AC\nAL\nAM\n AP\n BA\n CE\n DF\n ES\n GO\n MA\n MT\n MS\n MG\n PA\n PB\n PR\n PE\n PI\n RJ\n RN\n RS\n RO\n RR\nSC\n SP\n SE\n TO')
            estado = prompt('Qual estado gostaria de saber sobre a capital: '+opcao).toUpperCase()
            opcao = capital(estado)
            break
        case '2':
            console.log('AC\nAL\nAM\n AP\n BA\n CE\n DF\n ES\n GO\n MA\n MT\n MS\n MG\n PA\n PB\n PR\n PE\n PI\n RJ\n RN\n RS\n RO\n RR\nSC\n SP\n SE\n TO')
            estado = prompt('Qual estado gostaria de saber sobre a região: '+opcao).toUpperCase()
            opcao = regiao(estado)
            break
            case '3':
                console.log('AC\nAL\nAM\n AP\n BA\n CE\n DF\n ES\n GO\n MA\n MT\n MS\n MG\n PA\n PB\n PR\n PE\n PI\n RJ\n RN\n RS\n RO\n RR\nSC\n SP\n SE\n TO')
                estado = prompt('Qual estado gostaria de saber sobre o fuso horário: '+opcao).toUpperCase()
                opcao = fusoh(estado)
                dn = 0
                break
                default: console.log('Opção inválida')
                dn = 1
    }
    let continua = prompt('Deseja continuar? (S / N): ')
    switch(continua){
        case 'S':
            dn = 1
            break
         case 'N':
            dn = 0
            default:
                console.log('Tente novamente')
                dn = 1
                break
                
    }
}