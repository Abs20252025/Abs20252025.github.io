document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón para abrir el menú y el menú de navegación
    const toggleMenuButton = document.querySelector(".toggle-menu");
    const menu = document.querySelector(".menu");

    // Agrega el evento de clic al botón
    toggleMenuButton.addEventListener("click", function () {
        // Alterna la visibilidad del menú
        menu.classList.toggle("active");
    });
});