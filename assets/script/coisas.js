const botaoNao = document.getElementById("btnNao");

botaoNao.addEventListener("mouseover", () => {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosX = Math.random() * (larguraJanela - botaoNao.offsetWidth);
    const novaPosY = Math.random() * (alturaJanela - botaoNao.offsetHeight);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = novaPosX + "px";
    botaoNao.style.top = novaPosY + "px";
});

function acao() {
    setTimeout(() => {
        window.location.href = "SIM.html";
    }, 0); // espera 1 segundo
}

const container = document.querySelector(".hearts-container");

function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // posição aleatória
    heart.style.left = Math.random() * 100 + "vw";

    // tamanho aleatório
    const size = Math.random() * 20 + 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // duração aleatória
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + "s";

    // leve transparência variando
    heart.style.opacity = Math.random();

    // blur opcional (profissional)
    heart.style.filter = `blur(${Math.random() * 2}px)`;

    container.appendChild(heart);

    // remove depois da animação
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// cria corações infinitamente
setInterval(criarCoracao, 300);