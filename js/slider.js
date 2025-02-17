// ANIMACIÓN DEL HEADER

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".inicio-abs").classList.add("animated");
  }); // Se activa 2 segundos después del header
});

document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const slideContents = document.querySelectorAll(".slide-content");
    const slider = document.querySelector(".slider");
    const totalSlides = slides.length;
  
    if (totalSlides === 0 || !slider) return;
  
    function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  
    function nextSlide() {
      // **1. Quitar animación del contenido antes de cambiar la imagen**
      if (slideContents[currentSlide]) {
        slideContents[currentSlide].classList.remove("animated");
      }
  
      slides[currentSlide].classList.remove("active");
  
      // **2. Esperar a que termine la animación de salida (500ms)**
      setTimeout(() => {
        currentSlide = (currentSlide + 1) % totalSlides; // Avanzar al siguiente slide
  
        slides[currentSlide].classList.add("active");
  
        // **3. Cambiar la imagen con animación suave**
        updateSliderPosition();
  
        // **4. Esperar a que la imagen cambie completamente (1s) y luego animar el contenido**
        setTimeout(() => {
          if (slideContents[currentSlide]) {
            slideContents[currentSlide].classList.add("animated");
          }
        }); // 1000ms = duración de la transición de imagen
      }, 1000); // 500ms = tiempo de salida del contenido actual
  
      // **5. Repetir el ciclo**
      setTimeout(nextSlide, 4500);
    }
  
    // **Iniciar el primer slide**
    if (slideContents[currentSlide]) {
      setTimeout(() => {
        slideContents[currentSlide].classList.add("animated");
      }, 2000);
    }
  
    setTimeout(nextSlide, 6500); // Espera 6.5s antes del primer cambio
  });
  