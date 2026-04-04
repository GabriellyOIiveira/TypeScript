//Implemente um programa capaz de, dados três números como entradas, identificar quando o primeiro deles é o maior.

function verificar(num1: number, num2:number, num3: number): string{
    
    if (num1>num2 && num1>num3) {
    return "Primeiro numero é maior";
} else {
    return "O primeiro é menor ou igual";
}
}

console.log(verificar(4, 2, -3))

//Implemente um programa capaz de, Dado três números, verificar se o segundo número é o menor de todos

function verificar(num1: number, num2:number, num3: number): string{
    
    if (num2<num1 && num2<num3) {
    return "Segundo numero é o menor";
} else {
    return "O Segundo é maior ou igual";
}
}

console.log(verificar(5, 2, 8))
