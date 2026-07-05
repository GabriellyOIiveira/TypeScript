//Implemente o tipo Estado (2.0) que representa um estado dentro de um país, além disso, implemente a operação mesmaRegiao (2.0) 
//que, dado dois estados, retorna true quando ambos são da mesma região, ou false, caso contrário.

type Estado = {
    nome: string;
    populacao: number;
    regiao: string;
}
function mesmaRegiao(e1: Estado, e2: Estado): boolean {
    return e1.regiao === e2.regiao;
}
const e1: Estado = {
    nome: "Pernambuco",
    populacao: 9562007,
    regiao: "nordeste"
};

const e2: Estado = {
    nome: "Paraíba",
    populacao: 4164468,
    regiao: "nordeste"
};

console.log(mesmaRegiao(e1, e2));


// Implemente o tipo Continente (2.0) que agrupa todos os países de um continente, além disso, 
// implemente a operação paisesDeGrandePopulacao (4.0) que, dado um Continente, retorna a quantidade de países 
//com população superior a cem milhões de habitantes.

type Estado = {
    nome: string;
    populacao: number;
    regiao: string;
}
type Pais = {
    nome: string;
    estados: Estado[];
}
function populacaoPais(p: Pais): number {
    let total = 0;

    for (let estado of p.estados) {
        total += estado.populacao;
    }
    return total;
}
const brasil: Pais = {
    nome: "Brasil",
    estados: [
        {
            nome: "Pernambuco",
            populacao: 9562007,
            regiao: "nordeste"
        },
        {
            nome: "Paraíba",
            populacao: 4164468,
            regiao: "nordeste"
        }
    ]
};
console.log(populacaoPais(brasil));

// Implemente o tipo Continente (2.0) que agrupa todos os países de um continente, além disso, 
// implemente a operação paisesDeGrandePopulacao (4.0) que, dado um Continente, retorna a quantidade de países 
//com população superior a cem milhões de habitantes.

type Pais = {
    nome: string;
    populacao: number;
}

type Continente = {
    nome: string;
    paises: Pais[];
}

function paisesDeGrandePopulacao(c: Continente): number {
    let contador = 0;

    for (let pais of c.paises) {
        if (pais.populacao > 100000000) {
            contador++;
        }
    }

    return contador;
}
const mundo: Continente = {
    nome: "América do Sul",
    paises: [
        {
            nome: "Brasil",
            populacao: 203000000
        },
        {
            nome: "Argentina",
            populacao: 46000000
        },
        {
            nome: "Colômbia",
            populacao: 52000000
        }
    ]
};

console.log(paisesDeGrandePopulacao(mundo));







