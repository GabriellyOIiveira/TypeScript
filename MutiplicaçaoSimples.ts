function mutiplicar(num: number){
if (num%2 === 0){
    return (num*8) + "," + ' par' ;
}else{
    return (num*9)  + "," + ' impar' ;
}
}
console.log(mutiplicar(9));
