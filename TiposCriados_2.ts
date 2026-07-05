/*Crie um tipo chamado Conta.
Campos:
titular
saldo
numero agência

Faça as funções:
depositar()
sacar()
*/

type Conta = {
    titular: string,
    saldo: number,
    numero: number
}
function depositar(dinheiro: Conta, deposito:number): void{
    dinheiro.saldo += deposito
    console.log("Depósito realizado. Saldo:", dinheiro.saldo);
    }
let conta: Conta ={
    titular:"Fulano",
    saldo: 400,
    numero: 2223
}
function sacar(dinheiro:Conta, saque:number): void{
      if (dinheiro.saldo < saque) {
        console.log("Saldo insuficiente!");
        return;
      }
    dinheiro.saldo= dinheiro.saldo - saque;
    console.log("Seu saldo após o saque é de:", dinheiro.saldo);
}
depositar(conta, 23)
sacar(conta, 13)
console.log(conta);

/*Crie um tipo chamado Aluno.
Campos:
nome
nota1
nota2

Faça uma função chamada:
calcularMedia()
Ela deverá retornar a média.
*/

type Aluno ={
    nome: string,
    nota1: number,
    nota2: number
}

function calcularMedia(media:Aluno):number{
    return (media.nota1 + media.nota2)/2
}
let aluno: Aluno = {
    nome: "João",
    nota1: 8,
    nota2: 9
}
console.log(aluno.nome);
console.log("Média:", calcularMedia(aluno));
