
var menorValor = 2;
var maiorValor = 100;

const elementoMenor = document.querySelector("[data-id='menor-valor']")
const elementoMaior = document.querySelector("[data-id='maior-valor']")

elementoMenor.innerText = menorValor
elementoMaior.innerText = maiorValor

var numeroSelecionado = gerarNumero()
function gerarNumero() {
     let aux = parseInt(Math.random() * maiorValor + 2)
    console.log(aux)
    return aux
    // 0.99 * 100 = 99 +1
    // 0 * 100 = 0 + 1
    //Math.random() -> de 0 a < 1 
}



