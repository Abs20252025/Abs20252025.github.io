document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider-importado");
    const images = document.querySelectorAll(".contenedorImagenProducto-importado");
    const prevButton = document.querySelector(".prev-importado");
    const nextButton = document.querySelector(".next-importado");

    let index = 0;
    let totalImages = images.length;

    function updateSlider() {
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener("click", function () {
        if (index < totalImages - 1) {
            index++;
        } else {
            index = 0; // Regresa al inicio
        }
        updateSlider();
    });

    prevButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = totalImages - 1; // Va a la última imagen
        }
        updateSlider();
    });

    updateSlider();
});
    