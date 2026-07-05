/*Crie um tipo chamado Produto.
Campos:
nome
preço
quantidade

Faça as funções:
venderProduto()
reporEstoque()
*/

type Produto = {
    nome: string,
    preco: number,
    quantidade: number
}

function venderProduto(produto: Produto, quantidadeVendida: number): void {
    if (quantidadeVendida > produto.quantidade) {
        console.log("Estoque insuficiente!");
        return;
    }

    produto.quantidade -= quantidadeVendida;
    console.log("Venda realizada:", produto.nome, "Restam:", produto.quantidade);
}

function reporEstoque(produto: Produto, quantidadeAdicionada: number): void {
    produto.quantidade += quantidadeAdicionada;
    console.log("Estoque atualizado:", produto.nome, "Agora tem:", produto.quantidade);
}

let produto: Produto = {
    nome: "Celular",
    preco: 1000,
    quantidade: 10
};

venderProduto(produto, 3);
reporEstoque(produto, 5);

console.log(produto);

/*Crie um tipo chamado Funcionario.

Campos:
nome
cargo
salario

Faça uma função:
aumentarSalario()
Ela recebe um percentual.
*/

type Funcionario ={
    nome:string,
    cargo:string,
    salario:number
}
   function aumentarSalario(funcionario: Funcionario, percentual: number): void {
    funcionario.salario += funcionario.salario * percentual;
    console.log(
        "Novo salário:",
        funcionario.salario,
        "Funcionário:",
        funcionario.nome
    );
}
let funcionario:Funcionario={
    nome: "Joao",
    cargo: "Desenvolvedor Front-end",
    salario: 2500
}

aumentarSalario(funcionario, 0.10);
console.log(funcionario);

