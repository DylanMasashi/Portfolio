// Lista de mensagens
const messages = [
    "Bem Vindo Visitante.",
    "Meu nome é Dylan e sou desenvolvedor Full Stack.",
    "Atualmente desenvolvo em Java, Javascript, NodeJS, NextJS, MySQL, Delphi e C.",
    "Sinta-se à vontade! Agora mostrarei meu portfólio a você."
];

// Variáveis
let currentIndex = 0; // Índice atual da mensagem
const messageElement = document.getElementById("message");
const playButton = document.getElementById("play-button");

// Evento de clique no botão
playButton.addEventListener("click", () => {
    currentIndex++; // Avança para a próxima mensagem
    
    // Se todas as mensagens já foram exibidas
    if (currentIndex >= messages.length) {
        // Redireciona para o repositório
        window.location.href = "https://dylanmasashi.github.io/Portfolio/"; 
        return; // Garante que não tenta trocar a mensagem após o redirecionamento
    }

    // Atualiza a mensagem com animação
    messageElement.style.opacity = "0"; // Inicia transição para esconder
    setTimeout(() => {
        messageElement.innerHTML = messages[currentIndex]; // Troca a mensagem
        messageElement.style.opacity = "1"; // Volta a mostrar
    }, 500); // Delay para sincronizar com o efeito
});
