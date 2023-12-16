document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scroll-to-top");

    // Mostrar ou ocultar a seta com base na posição de rolagem
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 500) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Rolar para o topo ao clicar na seta
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
});
