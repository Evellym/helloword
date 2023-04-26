//1
const alunos = ["Alisson", "Bianca", "Carlos", "Danilo", "Looo", "Fabyola", "Antonio", "Karol", "Pedro", "João", "Maria"];
console.log(alunos.length);

//2
adicionar = alunos.push("Gabriel", "Camila");
console.log (alunos);

//3
const array = [alunos];
alunos.sort ();
console.log(alunos[0]);
console.log(alunos[11]);

//4
alunos.push("Lucas")
procurar = alunos.indexOf("Lucas");
console.log("Lucas");

//5
const array2 = ["Som", "Carlinho", "Danilicious", "Tony", "Kaka"]
const array3 = alunos.concat(array2);
console.log(array3);

//6
const notas = ["0.0","0.5","1.0","2.5","3.6","3.8","4.0","4.2","4.5","5.0","6.0","7.5","8.0","8.5","9.0","9.8","10.0",];
console.log(notas);

//7 map com chaves alunos e valores = notas
const controle = [["Alisson", 0.0], ["Bianca",0.5], ["Carlos",1.0], ["Danilo",2.5], ["Looo",3.6], ["Fabyola",3.8], ["Antonio",4.0], ["Karol", 4.2], ["Pedro", 4.5], ["João",5.0], ["Maria", 6.0], ["Gabriel", 7.5], ["Camila", 8.0], ["Lucas", 8.5], ["Dhyson",9.0], ["Emilly",9.8], ["Sara",10.0]];
  console.log(controle.length);

const map1 = new Map()

map1.set('Evellyn', 3)
console.log(map1)
/*map1.set = controle(alunos, notas);
console.log(controle);
*/
