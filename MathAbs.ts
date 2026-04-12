//Dado três números inteiros, escreva uma função que:
//Calcule a média aritmética dos três valores
//Retorne qual número está mais distante da média

function aritmetica(n1: number, n2: number, n3: number){
    let media: number = Number (((n1 + n2 + n3)/3).toFixed(2));
    let d1 = Number (Math.abs(n1 - media).toFixed(2));
    let d2 = Number (Math.abs(n2 - media).toFixed(2));
    let d3 = Number (Math.abs(n3 - media).toFixed(2));

    if (d1>=d2 && d1>= d3){
        return d1 + media + ", " + "O primeiro numero é o mais distante";
    } else if (d2>=d1 && d2>=d3){
        return d2 + ", media:" + media +  ", " + "O segundo numero é o mais distante";
    } else if (d3>=d1 && d3>=d2){
        return d3 + ", " + "O terceiro numero é o mais distante";
    } else {
        return "Empate"
    }
}
console.log(aritmetica(0, 0, 0));
//(0, 9, 6) // O primeiro numero é o mais distante;
//(4, 10, 6) // O segundo numero é o mais distante;
//(10, 9, 6) // O terceiro numero é o mais distante;

//Math.abs() = pega a distância sem sinal
//.toFixed(2) = limitar a quantidade de casas decimais de um número (Porem, retorna em uma string) / é o mais facil
//Sempre que usar em cálculo, use = Number(...)
//Math.round() = mantém como número direto
