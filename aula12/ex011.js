var idade = 70
    console.log(`Você tem ${idade} anos`)
if(idade<16){
    console.log('Não vota')
}else{
    if(idade< 18 || idade>67){
        console.log('Voto opcional')
    }else{
        console.log('Voto obrigatório')
    }
}
/*também pode ser feito dessa forma:
var idade = 22
if(idade<16){
    console.log('Não vota')
}else if(idade < 18 || idade>67){
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatório')
}
*/