//Dados três números, encontrar o menor entre eles;

function verificar(num1: number, num2: number, num3: number){
    if (num1<num2 && num1<num3){
        return "O primeiro numero é o menor";
    } else if (num2<num1 && num2<num3){
        return "O segundo numero é o menor";
    } else if (num3<num1 && num3<num2){
        return "Terceiro numero é o menor";
    } else{
        return "Sao iguais";
    }
}
console.log(verificar(0, 2, 1));
