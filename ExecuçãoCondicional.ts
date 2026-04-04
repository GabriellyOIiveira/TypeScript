// Implemente um programa capaz de sugerir se 
//um livro deve ser lido por um estudante de acordo com os cenários abaixo listados
//Romance / Inferior a 500 /Leitura
//Romance / Igual ou superior a 500 / Leitura nas férias
//Outros gêneros / Qualquer valor / Não leitura

function genero (genero:string, paginas:number): string{
    if ((genero === "romance")&&(paginas < 500)) {
        return "Leitura";
    } else if ((genero === "romance")&&(paginas>=500)){
        return "Leitura nas férias";
    }
    else{
        return "nao leitura";
    }

}
console.log(genero("romance", 10 ));

