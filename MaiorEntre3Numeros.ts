//Dados três números, encontrar o maior entre eles;

function verificar(num1: number, num2: number, num3: number){
    if (num1>num2 && num1>num3){
        return "O primeiro numero é o maior";
    } else if (num2>num1 && num2>num3){
        return "O segundo numero é o maior";
    } else if (num3>num1 && num3>num2){
        return "Terceiro numero é o maior";
    } else{
        return "Sao iguais";
    }
}
console.log(verificar(13, 13, 13)); //iguais
//(10, 3, 1) / primeiro numero é maior
// (1, 13, 3) / segundo  numero é o maior
// (3, 1, 13) / terceiro numero é o maior
