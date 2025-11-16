// Animação de aparecimento ao rolar
const cards = document.querySelectorAll(".fade-card");

function showCards() {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            card.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showCards);
window.addEventListener("load", showCards);
