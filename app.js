let nome = 'Miguel';
let linguagemDeProgramacao = prompt('Qual sua linguagem de programação favorita?');
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 - valor2;
let idade = prompt('Informe sua idade: ')
let nota = prompt('Informe sua nota: ')
let numeroAleatorio1 = Math.random();
let numeroAleatorio2 = parseInt(Math.random() *10 + 1);
let numeroAleatorio3 = parseInt(Math.random() * 100 + 1);
console.log(`Numero aleatório1: ${numeroAleatorio1}`)
console.log(`Numero aleatório1: ${numeroAleatorio2}`)
console.log(`Numero aleatório1: ${numeroAleatorio3}`)
console.log(`Olá , ${nome}`); // olá, Miguel
alert(`Olá ${nome}`);

console.log(`Sua linguagem de programação favorita é : ${linguagemDeProgramacao}`); // sua linguagem favorita é : java
console.log(`Valor da soma dos valores: ${resultado}`); // valor da soma dos valores: 30

if (nota >= 7) {
    alert(`Aprovado com media ${nota}`)
    } else {
        alert(`Reprovado com media ${nota}`)
    }

if (idade >= 18) {
    alert('Você é maior de idade')
    } else{
        alert('Você é menor de idade')
}
