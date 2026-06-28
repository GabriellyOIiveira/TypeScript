//Implemente uma função chamada zerarNegativos(matriz: number[][]): void que percorre a matriz e, caso encontre algum número menor que zero, substitui esse número por 0
function zerarNegativos(matriz: number[][]): void{
    for (let i:number =0; i<matriz.length; i++){
    for (let j:number =0; j<matriz[i].length; j++){
        if (matriz[i][j]< 0){ //i=linha, j=coluna
            matriz[i][j] = 0;
        }
    }
 }
}
let minhamatriz= [
    [-5,-6],
    [-7,-8]
];

zerarNegativos(minhamatriz);

console.log(minhamatriz);

//Implemente um subprograma que receba um array bidimensional de números e retorne a soma de todos os seus elementos.

function somaDeTodos(matriz:number[][]):number {
    let soma = 0
    for (let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            soma = soma + matriz[i][j]
        }
    }
    return soma
}
console.log(somaDeTodos([
    [1, 3],
    [2, 4]
    
]));

//Implemente um subprograma que receba um array bidimensional de números e retorne o maior número presente nele.

function maiorNumero(matriz:number[][]):number{

    let maior:number = matriz[0][0];

    for(let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            if (matriz[i][j]>maior){
                maior = matriz [i][j]
            }
        }
    }
return maior
}
console.log(maiorNumero([
    [3,4],
    [9,4]
]));

//Implemente um subprograma que receba um array bidimensional de números e retorne o menor número presente nele.

function menorNumero(matriz:number[][]):number{

    let menor:number = matriz[0][0];

    for(let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            if (matriz[i][j]<menor){
                menor = matriz [i][j]
            }
        }
    }
return menor
}
console.log(menorNumero([
    [3,4],
    [9,4]
])
);
