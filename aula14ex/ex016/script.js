
function contar(){
    //valores obtidos da página HTML modelo são colocados em variáveis
    let ini = window.document.getElementById('in')
    let fi = window.document.getElementById('fi')
    let pas = window.document.getElementById('pas')
    let conta = window.document.querySelector('div#conta')

    //Transforme as váriaveis obtidas em números, caso contrário aparecerá a mensagem de erro:[object HTMLInputElement]
    ini = Number(ini.value)
    pas = Number(pas.value)
    fi = Number(fi.value)

    //validação
    if(ini>fi){
        window.alert('Valor de Início tem que ser menor que o de FIM!!')
    }

    //A estrutura de repetição serve para imprimir e somar os números de passo e início. Enquanto fim for maior ou igual ao inicio.
    while(fi>=ini){
        //Sem o += o valor a ser impresso na página será o último do loop
        //devolve resultado na página HTML modelo na div de id=conta
        conta.innerHTML += `${ini} `
        ini = pas+ini
    }
    
    //conta.innerHTML = `testando impressão na tela valor inicio: ${pas}`

}