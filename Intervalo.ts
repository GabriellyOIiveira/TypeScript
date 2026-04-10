//Entre 0 e 10 → "Intervalo A"
//Entre 11 e 20 → "Intervalo B"
//Fora → "Fora dos intervalos"

function intervalo(num1: number){
    if (num1 >=0 && num1 <=10){
        return "Intervalo A";
    } else if (num1 >= 11 && num1 <= 20){
        return "Intervalo B";
    } else {
        return "Fora dos intervalos";
    }
}
console.log(intervalo(14));
// 212 = fora do intervalo
// 2 = Intervalo A
// 14 = Intervalo B
