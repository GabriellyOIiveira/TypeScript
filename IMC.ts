function calcularIMC(peso:number, altura:number) {
    let imc: number = peso / (altura * altura);
  if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
console.log (calcularIMC(60, 1.65)) // PESO E ALTURA
