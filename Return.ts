function verificar(num: number) {
    if (num > 10) {
        return "Maior que 10";
    } else if (num<10) {
        return "Menor que 10";
    } else {
            return "Igual a 10"
        }
    }
console.log(verificar(100));
