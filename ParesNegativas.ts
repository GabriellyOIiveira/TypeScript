//Identificar se duas variáveis são pares e negativas ao mesmo tempo;

function identificar(var1: number, var2: number){
    if(var1 %2===0 && var1 < 0 && var2 %2===0 && var2<0){
        return "Ambos são pares e negativas.";
    } else if ((var1 %2===0 && var1 < 0 || var2 %2===0 && var2<0)){
        return "Apenas um é par e negativo.";
    } else{
        return "Nenhum é par e negativo.";
    }
}
console.log(identificar(-4, -2));
//(-1, -5) / "Nenhum é par e negativo."
//(-4, -3) / "Apenas um é par e negativo."
//(-4, -2) / "Ambos são pares e negativas."
