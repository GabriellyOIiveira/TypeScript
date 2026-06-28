//Implemente um subprograma que receba um array bidimensional de números e retorne a quantidade de elementos iguais a zero.

function iguaisZero (matriz:number[][]):number {
    let contador = 0
    for (let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            if (matriz[i][j]=== 0){
                contador ++
            }
        }
    }
    return contador
}
console.log(iguaisZero([
    [1, 1],
    [3, 2]
]));

//Implemente um subprograma que receba um array bidimensional de números e retorne a quantidade de elementos negativos.

function iguaisNegativos (matriz:number[][]):number {
    let contador = 0
    for (let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            if (matriz[i][j]< 0){
                contador ++
            }

        }
    }
    return contador
}
console.log(iguaisNegativos([
    [1, -1],
    [3, 2]
]));

//Implemente um subprograma que receba um array bidimensional e um número. 
//O subprograma deve somar esse número a todos os elementos do array e retornar o array modificado.

function somaArray(matriz:number [][], numero:number):number[][] {
    let soma=0
    for (let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            matriz[i][j] = matriz[i][j] + numero
        }
    } 
    return matriz
}

let somaMatriz= [
    [1, 3],
    [4, 5]
];

somaArray(somaMatriz, 2) // Chamamos a função passando a matriz E o número que queremos somar (ex: 2)

console.log(somaMatriz);

//Implemente um subprograma que receba um array bidimensional e retorne a média de todos os seus elementos.

function mediaArray(matriz: number[][]): number {
    let somaTotal = 0;
    let contador = 0; 

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            somaTotal = somaTotal + matriz[i][j]; 
            contador++;
        }
    }
    if (totalElementos === 0) {
        return 0;
    }

    return somaTotal / contador;
}
let notas = [
    [7, 8],
    [9, 10]
];

console.log(mediaArray(notas)); 



