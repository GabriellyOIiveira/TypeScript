//atualização
//Dados três números, encontrar o maior entre eles;

function identificar(n1: number, n2:number, n3: number){
    if (n1>n2 && n1>n3){
        return (n1) + ", " + "Primeiro Numero é o maior";
    } else if (n2>n1 && n2>n3){
        return (n2) + ", " + "Segundo Numero é o maior";
    } else if (n3>n1 && n3>n2){
        return (n3) + ", " + "Terceiro Numero é o maior";
    } else {
        return "São Iguais."
    }
}
console.log(identificar( 8, 8, 8));
//( 5, 4, 3) / "5, Primeiro Numero é o maior" 
//( 5, 8, 3) / "8, Segundo Numero é o maior" 
//( 5, 8, 9) / "9, Terceiro Numero é o maior" 
//( 8, 8, 8) / "São Iguais." 

//antigo:
/*function verificar(num1: number, num2: number, num3: number){
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
*/
