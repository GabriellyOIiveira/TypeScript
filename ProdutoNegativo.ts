//Multiplicar dois números e verificar se o resultado é um número negativo;

function verificar(num1: number, num2: number) {
    if (num1 * num2 < 0) {
        return "negativo";
    } else {
            return "positivo"
        }
    }
console.log(verificar(5, -2));
