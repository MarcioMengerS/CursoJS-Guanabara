function tabuada(){
    //valores obtidos da página HTML da tabuada são colocados em variáveis.
    let num = window.document.getElementById("txtn")
    let tab = window.document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        //transforma o texto da variável "num" em número
        let n = Number(num.value)
        //limpa a tela/tabuada anterior
        tab.innerHTML = ''
        //o laço faz a multiplicação e mostra na tela
        let c = 1
        while(c <= 10){
            //cria varias tags <option> no html de forma dinâmica e coloca dentro da váriavel "item"
            let item = document.createElement('option')
            //coloca o cálculo que é um texto dentro do <option> através da variável "item"
            item.text = `${n}  X ${c} = ${n*c}`
            //serve para saber qual linha foi selecionada
            item.value = `tab${c}`
            //adiciona um elemento filho que é um "item"
            tab.appendChild(item)
            c++
        }
    }

    
}