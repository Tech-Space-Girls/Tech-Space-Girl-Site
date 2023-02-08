

// Callback for IntersectionObserver
const callback = function(entries) {
    entries.forEach(entry => {

        // Is the element in the viewport?
        if (entry.isIntersecting) {

            // Adiciona a classe fadeIn
            entry.target.classList.add("animate-fadeIn");

            // Remove o elemento do observador para não ficar sumindo quando tirar o scroll
            observador.unobserve(entry.target);
        } 
        else {

            // Remove a classe fadin
            entry.target.classList.remove("animate-fadeIn");
        }
    });
};

// Get all the elements you want to show on scroll
const alvos = document.querySelectorAll(".js-show-on-scroll");

// Set up a new observer
const observador = new IntersectionObserver(callback);

// Loop em cada alvo
alvos.forEach(function(alvo) {

    // Adiciona a opacidade 0
    alvo.classList.add("opacity-0");

    // Adiciona elmento no observador
    observador.observe(alvo);
});