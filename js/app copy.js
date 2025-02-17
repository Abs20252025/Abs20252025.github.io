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



  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
  
    window.addEventListener('scroll', () => {
      if (window.scrollY < lastScrollY) {
        // Si el usuario se desplaza hacia arriba, muestra el header
        header.classList.add('visible');
      } else {
        // Si el usuario se desplaza hacia abajo, oculta el header
        header.classList.remove('visible');
      }
      lastScrollY = window.scrollY;
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
  
    // Detectar movimiento del mouse
    window.addEventListener('mousemove', (event) => {
      // Si el cursor está en los primeros 50 píxeles desde el borde superior
      if (event.clientY <= 50) {
        header.classList.add('visible'); // Muestra el header
      } else {
        header.classList.remove('visible'); // Oculta el header
      }
    });
  });