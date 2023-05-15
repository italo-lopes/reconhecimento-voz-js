
function validarPalavra(chute){
    const visualTela = document.querySelector("[data-id='chute']")
    const numero = parseInt(chute)
    console.log(numero)
    if(validarNumero(numero)){
         alert('Nao é um Numero n sabe ler avisa')
        return false
    }

    if(validarRage(numero)){
        alert('Nao é do rage permitido mds favor fechar o site')
        return false
    }

    
    if(acertouNumero(numero)){
        
        alert('acertou ate q fim')
        visualTela.innerHTML = ""
        return false
    }
    
    return true

}

function  validarNumero(numero){
    return Number.isNaN(numero) // booleano
}

function validarRage(numero){
    if(maiorValor >= numero && menorValor <= numero){
        console.log(menorValor)
        console.log(maiorValor)
        return false
    }
    return true
}

function acertouNumero(numero){
    if(numero == numeroSelecionado){
        acertou.innerHTML = `Vc acertou <span> ${numeroSelecionado} aperte jogar para Reniciar</span>`;
        menorValor = 1;
        maiorValor = 100;
        elementoMenor.innerText = menorValor
        elementoMaior.innerText = maiorValor
        numeroSelecionado  = gerarNumero()
        console.log("===reniciou===");
        console.log(numeroSelecionado);
        console.log("==fim==")
        return true
    }
    return false
}