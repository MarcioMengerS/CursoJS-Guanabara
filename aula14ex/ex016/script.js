
function contar(){
    //valores obtidos da página HTML modelo são colocados em variáveis
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    //validação
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        //Transforme as váriaveis obtidas em números, caso contrário aparecerá a mensagem de erro:[object HTMLInputElement]
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Inválido! Considerando passo 1')
            p = 1
        }
        //A estrutura de repetição serve para imprimir e somar os números de passo e início. Enquanto fim for maior ou igual ao inicio.
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}