//Dividir a por b e verificar se o resultado é maior do que a;

function verificar(a: number, b: number) {
    if (b === 0) {
        return "não pode dividir por zero";
    }
    if ((a / b) > a) {
        return "maior que A";
    } else {
          return "menor q A";
        }
    }
console.log(verificar(10, 0));
