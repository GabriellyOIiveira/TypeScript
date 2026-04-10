//Dados quatro números, contar quantos entre eles são divisíveis por 3 ou 4

function divisiveis(n1: number, n2: number, n3: number, n4: number){
    let contador = 0;

    if (n1 % 3 === 0 || n1 % 4 === 0) {
        contador++;
    } if (n2 % 3 === 0 || n2 % 4 === 0) {
        contador++;
    } if (n3 % 3 === 0 || n3 % 4 === 0) {
        contador++;
    } if (n4 % 3 === 0 || n4 % 4 === 0) {
        contador++;
    } return contador;
}
console.log(divisiveis(3, 4, 12, 12));

/*O que é contador++?
contador +++ significa que ele aumenta o valor da variável em 1.
existem três formas de fazer:
"contador++"
"contador = contador + 1;"
"contador += 1;"
?Para que serve?
Você usa 'contador++' quando quer contar coisas, por exemplo:
- pessoas
- numeros
*/
