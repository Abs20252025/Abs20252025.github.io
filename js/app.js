document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.silpa-header__menu-toggle');
  const navMenu = document.querySelector('.silpa-header__nav');
  const closeButton = document.querySelector('.silpa-header__close-btn');
  const menuItems = document.querySelectorAll('.silpa-header__menu-item a'); // Todos los links del menú
  const overlay = document.querySelector('.silpa-header__overlay'); // El fondo oscuro

  // Asegurarse de que el overlay esté oculto cuando la página se cargue
  overlay.style.display = 'none';

  // Abre o cierra el menú al hacer clic en el botón de menú
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
      overlay.style.display = 'block'; // Mostrar el overlay
    } else {
      overlay.style.display = 'none'; // Ocultar el overlay
    }
  });

  // Cierra el menú cuando se hace clic en un enlace del menú
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('active');
      overlay.style.display = 'none'; // Ocultar el overlay
    });
  });

  // Cierra el menú cuando se hace clic en la "X"
  closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.style.display = 'none'; // Ocultar el overlay
  });

  // Cierra el menú al hacer clic en el overlay
  overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.style.display = 'none'; // Ocultar el overlay
  });
});






// Función reutilizable para verificar si un elemento es visible en la ventana
function isVisible(el) {
  if (!el) return false; // Verifica si el elemento existe
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// JS PARA LAS COLUMNAS
document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".silpa-column");

  function handleScroll() {
    columns.forEach((column) => {
      if (isVisible(column)) {
        column.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Llamado inicial para mostrar elementos al cargar
});

// JS PARA LOS TITULOS
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".silpa-row .silpa-full-column h3");

  if (title) { // Verifica si el título existe antes de hacer cualquier cosa
    function checkVisibility() {
      if (isVisible(title)) {
        title.classList.add("visible");
      }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
  }
});

// JS PARA TARJETAS
document.addEventListener("DOMContentLoaded", function () {
  const valueCards = document.querySelectorAll(".silpa-value-card");

  if (valueCards.length > 0) { // Verifica si hay tarjetas
    function handleScroll() {
      valueCards.forEach((card) => {
        if (isVisible(card)) {
          card.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamado inicial para mostrar tarjetas al cargar
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const sectionServicios = document.querySelector("#servicios");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionServicios.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    },
    {
      root: null, // Usa el viewport
      threshold: 0.75, // Activa cuando el 50% de la sección es visible
    }
  );

  observer.observe(sectionServicios);
});

