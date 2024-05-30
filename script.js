document.addEventListener('DOMContentLoaded', () => {
    const fortunes = [
        "Hoje será um dia de grandes conquistas!",
        "Você encontrará uma surpresa agradável em breve.",
        "Uma oportunidade incrível está a caminho.",
        "A sorte está do seu lado hoje.",
        "Alguém especial está pensando em você.",
        "Seja paciente, grandes coisas estão por vir.",
        "Hoje é um bom dia para começar algo novo.",
        "Confie em si mesmo e em suas habilidades.",
        "Algo maravilhoso está prestes a acontecer.",
        "Você está cercado de boas energias."
    ];

    const button = document.getElementById('open-cookie');
    const messageDiv = document.getElementById('fortune-message');

    button.addEventListener('click', openFortuneCookie);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            openFortuneCookie();
        }
    });

    function openFortuneCookie() {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const fortune = fortunes[randomIndex];
        messageDiv.textContent = fortune;
        messageDiv.classList.add('show-message');
    }
});
