document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-img");

    cards.forEach((card) => {
        // Garante que todos os textos começam escondidos
        const textElement = card.parentElement.querySelector(".h3-card h3");
        if (textElement) {
            textElement.classList.add("h3-hidden");
        }

        card.addEventListener("click", () => {
            const textElement = card.parentElement.querySelector(".h3-card h3");
            // Alterna a animação do card
            card.classList.toggle("slide-left");

            if (card.classList.contains("slide-left")) {
                // Só mostra o texto após a animação terminar
                card.addEventListener("animationend", function handler() {
                    textElement.classList.remove("h3-hidden");
                    textElement.classList.add("h3-visible");
                    card.removeEventListener("animationend", handler);
                });
            } else {
                // Esconde o texto imediatamente ao desfazer a animação
                textElement.classList.remove("h3-visible");
                textElement.classList.add("h3-hidden");
            }
        });
    });

    // --- Animação ao rolar para aparecer elementos da segunda parte ---
    const aparecerElements = document.querySelectorAll('.aparecer');

    function animarAoRolar() {
        aparecerElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visivel');
            }
        });
    }

    window.addEventListener('scroll', animarAoRolar);
    animarAoRolar(); // Para ativar se já estiver visível ao carregar
});