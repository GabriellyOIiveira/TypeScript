/*Desconto em compra
Receba:
valor da compra
cliente VIP (boolean)
Dê desconto se:
valor > 100 OU cliente VIP
*/

function desconto(valor: number, vip: boolean){
        if (valor>100 || vip){
                return "Há desconto";
        } else {
                return "Não há desconto";
        }
}
console.log(desconto(100, false));
