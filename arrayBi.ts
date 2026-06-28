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
