window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();    
recognition.lang = 'pt-Br';
console.log(recognition)
// recognition.start();
// console.log(recognition)
// recognition.stop();
const diagnostico = document.querySelector(".messages__texto");
const chute = document.querySelectorAll("[data-id='chute']")
const botao = document.getElementById('botao')
const acertou = document.querySelector('[data-id="menssagem"]')
var verificar = "";

recognition.addEventListener('error' , (event)=>{
    // ${event.error}
    diagnostico.textContent = "Nao foi reconhecido nada";
    botao.style.display = "block";
})

recognition.addEventListener('result', (event) => {
    console.log(event);
    console.log(event.results); 
    console.log(event.results[0][0]);   
    console.log(event.results[0][0].transcript);

    const palavraFalada = event.results[0][0].transcript;

    exibirMensagem(palavraFalada)
    console.log(verificar)

})

recognition.onspeechend = function() {
    console.log("o stop")
    recognition.stop();
    botao.style.display = "block";
}
  
recognition.addEventListener('error' , (event)=>{
    // ${event.error}
    diagnostico.textContent = "Nao foi reconhecido nada";
    botao.style.display = "block";
})

botao.addEventListener('click', (event) => {
    acertou.innerHTML = ``;
    botao.style.display = "none";
    recognition.start()
    diagnostico.innerText = "Fale um Número";
    console.log(verificar)
})

function exibirMensagem(palavraFalada){

    palavraFalada = palavraFalada.replace(/ /g,'');
    if(!validarPalavra(palavraFalada)) return "erro na validação"


    const check = document.querySelector('.resposta')
    const z = document.querySelector('.dica')
        if(check) check.remove()
        if(z) z.remove()
    const chute = document.querySelector("[data-id = 'chute']")
    const div = document.createElement('div')
    div.classList.add('resposta')
    const span = document.createElement('span')
    span.dataset.id ="box";
    span.classList.add('box')
    span.innerText = palavraFalada
    div.appendChild(span);
    div.innerHTML = "Voce disse: " + div.innerHTML
    chute.appendChild(div)
    const div2 = document.createElement('div')
    div2.classList.add('dica')
    const incone = document.createElement('i')

    
    incone.classList.add('fa-solid', 'fa-arrow-up-long')
    div2.appendChild(incone) 
    div2.innerHTML = "O numero secreto é maior " + div2.innerHTML
 
    chute.appendChild(div2)
   
    dicasNumero(palavraFalada)

    const resposta = document.createElement('div')
    // resposta.classList.add()
    const box = document.querySelector("[data-id='box']") 
    // box.innerText = palavraFalada
    // console.log("ele falo: "+ box.textContent)

    verificar = palavraFalada;
}

