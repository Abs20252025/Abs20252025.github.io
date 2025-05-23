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

document.querySelectorAll(".dropdown .arrow-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que se active el enlace principal
    let submenu = button.nextElementSibling;
    submenu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".arrow-button");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Evita que el evento afecte a elementos padres

      const submenu = this.parentElement.querySelector(".submenu"); // Obtiene solo el submenú dentro del mismo <li>

      if (submenu) {
        const isOpen = submenu.style.display === "block";

        // Cierra solo los submenús dentro del mismo nivel
        const siblingSubmenus =
          this.parentElement.parentElement.querySelectorAll(".submenu");
        siblingSubmenus.forEach((sub) => {
          if (sub !== submenu) {
            sub.style.display = "none"; // Cierra otros submenús del mismo nivel
            const arrow =
              sub.previousElementSibling?.querySelector(".arrow-icon");
            if (arrow) arrow.style.transform = "rotate(0deg)";
          }
        });

        // Alterna el estado del submenú actual
        submenu.style.display = isOpen ? "none" : "block";

        // Alterna la rotación de la flecha
        const arrowIcon = this.querySelector(".arrow-icon");
        if (arrowIcon) {
          arrowIcon.style.transform = isOpen
            ? "rotate(0deg)"
            : "rotate(180deg)";
        }
      }
    });
  });

  // Cierra los submenús si se hace clic fuera del menú
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      document.querySelectorAll(".submenu").forEach((sub) => {
        sub.style.display = "none";
      });
      document.querySelectorAll(".arrow-icon").forEach((icon) => {
        icon.style.transform = "rotate(0deg)";
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(
    ".menu > li, .menu .submenu > li"
  );

  menuItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");

    if (submenu) {
      // Evento para mostrar el submenú al hacer clic
      item.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que el evento se propague al documento
        closeOtherSubmenus(item); // Cierra otros submenús antes de abrir uno nuevo
        submenu.style.display = "block";
      });

      // Evento para mantener el submenú abierto si el mouse está sobre él
      item.addEventListener("mouseenter", () => {
        submenu.style.display = "block";
      });

      item.addEventListener("mouseleave", () => {
        submenu.style.display = "none";
      });
    }
  });

  // Cerrar submenús si el usuario hace clic fuera
  document.addEventListener("click", () => {
    closeAllSubmenus();
  });

  function closeOtherSubmenus(currentItem) {
    document
      .querySelectorAll(".menu > li, .menu .submenu > li")
      .forEach((item) => {
        if (item !== currentItem) {
          const submenu = item.querySelector(".submenu");
          if (submenu) {
            submenu.style.display = "none";
          }
        }
      });
  }

  function closeAllSubmenus() {
    document.querySelectorAll(".submenu").forEach((submenu) => {
      submenu.style.display = "none";
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsapp-btn");
  const whatsappModal = document.getElementById("whatsapp-modal");

  // Alternar el modal al hacer clic en el botón de WhatsApp
  whatsappBtn.addEventListener("click", function () {
      whatsappModal.classList.toggle("active");
  });

  // Cerrar el modal si se hace clic fuera de él
  document.addEventListener("click", function (event) {
      if (!whatsappBtn.contains(event.target) && !whatsappModal.contains(event.target)) {
          whatsappModal.classList.remove("active");
      }
  });
});
