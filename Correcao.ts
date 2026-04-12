/*(3.0) O programa abaixo deveria ser capaz de testar se três números são iguais, corrija todos os erros do mesmo, e 
para cada erro encontrado faça um comentário explicando qual o erro e qual foi a solução encontrada 
(obs.: é obrigatório o uso de operadores lógicos nesta questão):

let x = 10 //coloquei o tipo da variavel "number' e deixei todas "let" para ser agradavel visualmente
var y = 10
var z = 10 

if (x == y && == z) {
    console.log("diferentes")
} else if (y == x && == z) {
    console.log("diferentes")   // retirei um dos "else if"
} else {
    console.log("iguais")   //troquei as saidas.
}
*/

let x : number = 10
let y : number = 1
let z : number = 10

if (x === y && y === z){
    console.log("iguais");
} else {
    console.log ("diferentes");
}
