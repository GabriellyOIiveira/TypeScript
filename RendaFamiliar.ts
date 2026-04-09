//Implemente um programa que, dados o valor do salario minimo e a renda mensal de uma familia, é capaz identificar a classe social da familia de acordo com a tabela abaixo:
//Classe C / ate 2 salarios minimo
//Classe B / entre 2 e 10 salarios minimo
//Classe A / acima de 10 salarios minimo

function renda(salariomin: number, salario: number){
    if (salario<=salariomin*2){
        return "Classe C";
    } else if (salario>=(salariomin)&&(salario<=salariomin*10)){
        return "Classe B";
    } else {
        return "Classe A";
    }
}
console.log(renda(1.621, 5.000));
