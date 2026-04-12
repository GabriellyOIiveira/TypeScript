/*Sistema de acesso avançado
Receba:
usuário
senha
código de segurança

Permita acesso se:
usuário = "admin" E senha = "1234"
OU código de segurança = "9999"
*/

function acesso(usuario:string, senha: number, codigo: number){
        if ((usuario === "admin" && senha==1234) || codigo == 9999){
                return "Acesso Liberado";
        } else {
                return "Acesso Negado";
        }
}
console.log(acesso("admin", 1234, 2222));
