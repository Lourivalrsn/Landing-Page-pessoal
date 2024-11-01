function enviarMensagem() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    if (nome && email && mensagem) {
      window.location.href = `mailto:lourirodrigues47@gmail.com?subject=Contato de ${nome}&body=${mensagem}`;
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  
  

const phrases = [
    "programndo Java",
    "programado C",
    "full stack",
    "HTML & CSS ",
    "JavaScript"
];

let currentPhraseIndex = 0;
const animatedText = document.getElementById("animatedText");

function animateText() {
    // Remove a classe para fazer a transição de fade-out
    animatedText.classList.remove("show");
    animatedText.classList.add("fade");

    // Depois de um tempo, mude o texto e adicione a classe para o fade-in
    setTimeout(() => {
        animatedText.textContent = phrases[currentPhraseIndex];
        animatedText.classList.remove("fade");
        animatedText.classList.add("show");
        
        // Atualize o índice da frase para a próxima
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }, 500); // Ajuste o tempo de transição aqui, se necessário
}

// Inicia a animação e a repete a cada 2 segundos
setInterval(animateText, 2000);
