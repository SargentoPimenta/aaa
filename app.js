//let titulo=document.querySelector('h1');
//titulo.innerHTML = 'Hora do desafio!';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 a 10';
let listaDeNumeroSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto; 
   if ('speechSynthesis' in window) {
      let utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'pt-BR'; 
      utterance.rate = 1.2; 
      window.speechSynthesis.speak(utterance); 
  } else {
      console.log("Web Speech API não suportada neste navegador.");
  }
}
function exibirMensagemInicial(){
   exibirTextoNaTela ('p', 'Novo jogo criado! Escolha um número de 1 a 10 novamente.');
}

exibirTextoNaTela('h1','Jogo do Número secreto!');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
//Código omitido

function vC() {
   let chute = document.querySelector('input').value;
   
   if (chute == numeroSecreto) {
           exibirTextoNaTela('h1', 'Acertou!');
           let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
           let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
           exibirTextoNaTela('p', mensagemTentativas);
           document.getElementById('reiniciar').removeAttribute('disabled');
   }else {
           if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
           } else {
                   exibirTextoNaTela('p', 'O número secreto é maior');
           }
           tentativas++;
           limparCampo();
   }
}
function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElemntosNalista = listaDeNumeroSorteados.length;

   if(quantidadeDeElemntosNalista == numeroLimite){
      listaDeNumeroSorteados = [];
   } 

   if(listaDeNumeroSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
   } else{
      listaDeNumeroSorteados.push(numeroEscolhido);
      console.log(listaDeNumeroSorteados);
      return numeroEscolhido;
   }
}

function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
}


function dobroN(numero){
   return numero + numero
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

console.log(dobroN(7))