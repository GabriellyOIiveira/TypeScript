//Implemente um subprograma que receba um array bidimensional e um número.
//O subprograma deve contar quantas vezes esse número aparece no array.

function arrayNumero (matriz:number[][], numero:number):number{
    let contador = 0

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j]===numero){
                contador ++
            }
        }
    }
    return contador
}
console.log(arrayNumero([
    [1, 2],
    [2, 4]
], 2));

//Implemente um subprograma que receba um array bidimensional e retorne true se todos os elementos forem iguais. 
//Caso contrário, retorne false.

function arrayIguais (matriz:number[][]):boolean{
    let referencia = matriz[0][0];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j]!= referencia)
            return false
        }
    }
    return true
}
console.log(arrayIguais([
    [2, 2],
    [2, 2]
]));

//Implemente um subprograma que receba um array bidimensional e retorne um novo array contendo:
// - a soma de cada linha.

function arrayLinha (matriz:number[][]): number[] {
    let resultados: number[] = [];

    for (let i = 0; i < matriz.length; i++) {
        let soma= 0;
        for (let j = 0; j < matriz[i].length; j++) {
        soma = soma + matriz[i][j]
        }
        resultados[i]= soma;
    }
return resultados; 
}

let matrizAntiga = [
    [7, 8],  // Linha 0 -> Soma: 15
    [9, 10]  // Linha 1 -> Soma: 19
];

let somasfinais = arrayLinha(matrizAntiga);

console.log(somasfinais); 





