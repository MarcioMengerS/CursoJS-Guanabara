function gerar(){
    //valores obtidos da página HTML da tabuada são colocados em variável
    let numero = window.document.getElementById("num")
    let resultado = window.document.querySelector('div#result')

    let cont= 0
    numero = Number(numero.value)

    while(cont<=10){
        numero*cont
        resultado.innerHTML += ` ${numero}X${cont} = ${numero*cont}<br>`

        cont++
    }
}