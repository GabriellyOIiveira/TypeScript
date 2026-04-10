/* 4. Pode entrar na festa
Regras:
Idade ≥ 18 E tem convite → pode entrar
Senão → não entra
*/
function festa (idade: number, convite: boolean){
    if (idade >= 18 && convite === true){
        return "Pode entrar";
    } else {
        return "Não entra";
    }
}
console.log (festa(12, true));
