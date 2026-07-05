/*Crie um tipo chamado Celular com:
marca (string)
modelo (string)
bateria (number)
ligado (boolean)

Depois:
Crie um objeto.
Faça uma função chamada ligarCelular.
Faça outra função chamada carregarBateria que aumente a bateria em 20%.
*/

type Celular ={
    marca:string,
    modelo:string,
    bateria: number,
    ligado:boolean
}
function ligarCelular(lc: Celular):void{
    lc.ligado = true;
    console.log(lc.modelo, "foi ligado");
}
const celular: Celular={
    marca: "samsung",
    modelo: "A06",
    bateria: 10,
    ligado: true
}
function carregarBateria(c: Celular): void {
    c.bateria += 20;

    if (c.bateria > 100) {
        c.bateria = 100;
    }
}
ligarCelular(celular);
carregarBateria(celular);
console.log(celular);

/*Crie um tipo chamado Animal com:

nome
espécie
idade
peso

Depois:
Crie dois animais.
Faça uma função envelhecer() que aumente a idade em 1.
*/

type Animal = {
    nome: string,
    especie: string,
    idade: number,
    peso: number
}
    function envelhecer(animal: Animal): void {
    animal.idade += 1;
    console.log("Agora", animal.nome, "tem", animal.idade, "anos");
}
let animais: Animal[] = [
    {
        nome: "Apollo",
        especie: "Pincher",
        idade: 2,
        peso: 4
    },
    {
        nome: "Luna",
        especie: "Siames",
        idade: 1,
        peso: 3
    }
]
for (let animal of animais) {
    console.log(animal.nome, animal.idade);
    envelhecer(animal);
}

