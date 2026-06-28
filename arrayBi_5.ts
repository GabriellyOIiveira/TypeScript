// ➺ Ｍｉｎｉｐｒｏｖａ　－　Ａｒｒａｙｓ

//(5.0) Implemente um subprograma capaz de, dados um array de duas dimensões de números e um número n como parâmetros, 
//retornar a quantidade de números maiores que n no array.
//Exemplo: array = [[-10, 0, 3], [2, 5, 5, 8, 0]]
//n = 4
//return: 3

function arrayQuantidade(matriz:number[][], n:number):number{
    let contador = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > n){
                contador ++
            }
        }
}
return contador
}
console.log(arrayQuantidade([
    [-10, 0, 3], 
    [2, 5, 5, 8, 0]
], 4));

// Implemente subprogramas capazes de:
// (3.0) Dado um array de duas dimensões como parâmetro, imprimir todos os elementos ímpares do array em ordem inversa;

function imprimirImparesInverso(matriz: number[][]): void {
    for (let i = matriz.length - 1; i >= 0; i--) {
        for (let j = matriz[i].length - 1; j >= 0; j--) {
            if (matriz[i][j] % 2 != 0) {
                console.log(matriz[i][j]);
            }

        }

    }

}

let inverso = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

imprimirImparesInverso(inverso);


//(4.0) Dados dois arrays bidimensionais como parâmetro, retornar true se o primeiro for o inverso do outro, ou false, 
//caso contrário, assuma que ambos os arrays possuem o mesmo tamanho
// Dica: se, e somente se, para todo i e j: a1[i,j] igual a a2[j,i], a saída é true

function arrayInversa(matriz1: number[][], matriz2: number[][]): boolean {
    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz1[i].length; j++) {

            if (matriz1[i][j] != matriz2[j][i]) {

                return false;

            }
        }
    }
    return true;
}
console.log(
    arrayInversa(
        [
            [1,2,3],
            [4,5,6]
        ],
        [
            [1,4],
            [2,5],
            [3,6]
        ]
    )
);
