document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".contenedorImagenProducto, .contenedorDescripcionProducto");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach((elemento) => observer.observe(elemento));
});
