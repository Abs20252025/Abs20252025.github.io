document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".arrow-button");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que el evento afecte a elementos padres

            const submenu = this.parentElement.querySelector(".submenu"); // Obtiene solo el submenú dentro del mismo <li>

            if (submenu) {
                const isOpen = submenu.style.display === "block";

                // Cierra solo los submenús dentro del mismo nivel
                const siblingSubmenus = this.parentElement.parentElement.querySelectorAll(".submenu");
                siblingSubmenus.forEach(sub => {
                    if (sub !== submenu) {
                        sub.style.display = "none"; // Cierra otros submenús del mismo nivel
                        const arrow = sub.previousElementSibling?.querySelector(".arrow-icon");
                        if (arrow) arrow.style.transform = "rotate(0deg)";
                    }
                });

                // Alterna el estado del submenú actual
                submenu.style.display = isOpen ? "none" : "block";

                // Alterna la rotación de la flecha
                const arrowIcon = this.querySelector(".arrow-icon");
                if (arrowIcon) {
                    arrowIcon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
                }
            }
        });
    });

    // Cierra los submenús si se hace clic fuera del menú
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".submenu").forEach(sub => {
                sub.style.display = "none";
            });
            document.querySelectorAll(".arrow-icon").forEach(icon => {
                icon.style.transform = "rotate(0deg)";
            });
        }
    });
});
