function dicasNumero(palavraFalada){
     const dicasVisual = document.querySelector('.dica')
     const valorFalado = parseInt(palavraFalada)
     console.log("========")
     console.log(valorFalado)
     console.log("========")
     console.log(numeroSelecionado)

    if(numeroSelecionado > valorFalado){
        menorValor = valorFalado
        elementoMenor.innerText = menorValor
    }

    if(numeroSelecionado < valorFalado){
        maiorValor = valorFalado
        elementoMaior.innerText = maiorValor
        console.log(elementoMaior)
        const incone  =  document.createElement('i')
        incone.classList.add('fa-solid','fa-arrow-down-long')
        dicasVisual.innerHTML = "";
        console.log(dicasVisual)
        dicasVisual.appendChild(incone)
        dicasVisual.innerHTML = "O numero secreto é menor" +  dicasVisual.innerHTML
    }
}