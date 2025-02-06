// JS PARA EL SLIDER INICIO
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slider = document.querySelector('.slider');
  
    // Función para avanzar al siguiente slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides; // Avanza al siguiente slide
      updateSliderPosition();
    }
  
    // Función para actualizar la posición del slider
    function updateSliderPosition() {
      const newTransformValue = `translateX(-${currentSlide * 100}%)`;
      slider.style.transform = newTransformValue;
    }
  
    // Intervalo para cambiar el slide automáticamente cada 4500 ms
    setInterval(nextSlide, 4500);
  
    // Event listener para manejar la transición y reiniciar al llegar al último slide
    slider.addEventListener('transitionend', function () {
      if (currentSlide === totalSlides - 1) {
        // Reiniciar el slider sin animación antes de volver al primer slide
        slider.style.transition = 'none';   
        setTimeout(function () {
          currentSlide = 0; // Reiniciar al primer slide
          updateSliderPosition();
          setTimeout(function () {
            slider.style.transition = 'transform 1s ease-in-out'; // Rehabilitar la animación
          }, 50);
        }, 4500);  // Intervalo antes de reiniciar
      }
    });
  });