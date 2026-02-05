document.addEventListener("DOMContentLoaded", function() {
    // Configuramos o observador para detectar a entrada dos elementos na tela
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% do item estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Uma vez que animou, não precisa mais observar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos do site que você quer que deslizem
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));
});