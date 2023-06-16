/*A Secretaria de Meio Ambiente que controla o índice de poluição municipal gerencia 3 grupos de indústrias que são altamente poluentes. O índice de poluição aceitável varia de 5% até 30%. Se o índice sobe para além de 30% as indústrias do 1º grupo são intimadas a suspenderem suas atividades. Se o índice ultrapassar os 40% as industrias do 1º e 2º grupo serão intimadas. Se o índice ficar acima de 50% todos os grupos devem ser notificados e paralisarem suas atividades. Faça um algoritmo que leia o índice de poluição e emita a notificação adequada aos diferentes grupos de empresas.
*/
let industrias = parseInt(prompt("Indique o indice de poluição do seu grupo de indústrias em porcentagem(%): "))

if (industrias <5) {
  console.log("Índice de poluição aceitável")
} else if (industrias >= 5 && industrias <=30 ) {
    console.log("Índice de poluição dentro do aceitável")
}
else if (industrias >=30 && industrias < 40) {
  console.log("Indústrias do grupo 1 serão intimadas a suspenderem suas atividades")
} 
if (industrias >= 40 && industrias < 50) {
     console.log("Indústrias do grupo 1 e grupo 2 serão intimadas a suspenderem suas atividades")
} else if (industrias >= 50) {
  console.log("Todos os grupos serão notificados e devem suspender as suas atividades")
}