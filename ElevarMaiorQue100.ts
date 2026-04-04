//Elevar um número ao quadrado e informar se o resultado é maior do que 100.


function verificar(num: number) {
    if (num**2 === 100) {
        return "igual a 100";
    }
    else if (num**2 > 100) {
        return "maior que 100";
    } else {
          return "menor q 100";
        }
    }
console.log(verificar(2));
