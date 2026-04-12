//(2.0) 1- a) Identificar se um número é positivo e ímpar ao mesmo tempo

function verificar(num: number){
    if (num %2 ===1 && num>=0){
        return "Ele é positivo e impar";
    } else if (num %2 != 0){
        return "Ele é apenas impar";
    } else if(num>=0){
        return "Ele é apenas positivo";
    } else{
        return "Ele não é positivo e nem impar";
    }
}
console.log(verificar(-2));

// b) Dados quatro números distintos, identificar quando exatamente dois deles são ímpares 
//(observação: soluções que não usarem operadores lógicos não serão corrigidas)

function verificar(n1: number, n2: number, n3: number, n4: number){
    let contador = 0

    if (n1 % 2 != 0) contador ++;
    if (n2 % 2 != 0) contador ++;
    if (n3 % 2 != 0) contador ++;
    if (n4 % 2 != 0) contador ++;

    if (contador === 2){
        return "Exatamente dois números são ímpares";
    } else {
        return "Não atende a condição"
    }
}

console.log (verificar(4, 5, 3, 2));

//(5.0) 2- Reescreva corretamente o programa abaixo para que ele possa identificar 
//se dois números são próximos (distância menor ou igual a 10) ou distantes (distância maior do que 10). 
//Para cada alteração feita no código escreva uma frase justificando a mesma como comentário no código-fonte:

/*let a = 5
let b =  2


if (a - b < 10 && b - a < 10) {
        console.log(a)
} else if (a - b < 10 && b - a < 10) {
        console.log('iguais')
} else if (a == b || b == a) {
        console.log('distantes')
}
*/

let a = 5
let b = 2
//coloquei mais um 'let', para distancia
let distancia = Math.abs(a-b)

 if (a === b) { //Antes mostrava "a", agora faz sentido com o enunciado
        console.log("Iguais") //coloquei as aspas duplas 
} else if (distancia<=10) { //retirei a condição dupla
        console.log("Proximos") //troquei o nome da variavel
} else{
    console.log ("distantes") 
}

