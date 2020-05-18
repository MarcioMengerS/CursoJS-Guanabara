//alert('Olá!')

function contar(){
    let ini = window.document.getElementById('in')
    let fi = window.document.getElementById('fi')
    let pas = window.document.getElementById('pas')
    let conta = window.document.querySelector('div#conta')

    // se não transformar em numero dá esse erro[object HTMLInputElement]
    i = Number(ini.value)

    //devolve resultado na página HTML na div conta
    conta.innerHTML = `testando impressáo n tela do valor inicio: ${i}`

}