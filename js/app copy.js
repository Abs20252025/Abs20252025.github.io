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

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".Abs-Slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let currentIndex = 0; // Índice inicial
    const totalSlides = slides.length;
  
    // Función para actualizar el slider
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    // Función para avanzar al siguiente slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides; // Vuelve al inicio si llega al final
      updateSlider();
    }
  
    // Función para retroceder al slide anterior
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Va al final si está en el inicio
      updateSlider();
    }
  
    // Eventos de los botones
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  
    // Cambio automático cada 5 segundos
    setInterval(nextSlide, 5000);
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