//Implemente um subprograma que receba um array bidimensional e retorne true se existir pelo menos um elemento negativo. 
//Caso contrário, retorne false.

function arrayNegativo (matriz:number[][]):boolean{
    for(let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            if (matriz [i][j]<0){
                return true
            }        
        }
    }
    return false 
}
console.log(arrayNegativo([
    [2, -3],
    [4, 5]
]));

//Implemente um subprograma que receba um array bidimensional e retorne true se todos os elementos forem positivos. 
//Caso exista pelo menos um número menor ou igual a zero, retorne false.

function arrayNegativo (matriz:number[][]):boolean{
    for(let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            if (matriz [i][j]<=0){
                return false
            }        
        }
    }
    return true 
}
console.log(arrayNegativo([
    [2, 3],
    [4, 3]
]));

//Implemente um subprograma que receba um array bidimensional e retorne a quantidade de elementos maiores que 10.

function arrayMaior (matriz:number[][]): number{
let contador=0
 for(let i=0; i<matriz.length;i++){
    for (let j=0; j<matriz[i].length; j++){
    if (matriz[i][j]>10)
    contador ++
 }
 }
 return contador
}
console.log(arrayMaior([
    [3, 3],
    [4, 12]
]));

//Implemente um subprograma que receba um array bidimensional e retorne a soma apenas dos números pares.

function somaPares (matriz:number[][]): number{
    let soma=0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j]%2===0){
                soma = soma + matriz[i][j]
            }
        }
    }
    return soma
}
console.log(somaPares([
    [7, 8],
    [9, 10]
]));

//Implemente um subprograma que receba um array bidimensional e retorne a soma apenas dos números ímpares.

function somaImpares (matriz:number[][]): number{
    let soma=0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j]%2===1){ //ou matriz[i][j]%2!=0
                soma = soma + matriz[i][j]
            }
        }
    }
    return soma
}
console.log(somaImpares([
    [7, 1],
    [9, 10]
]));








