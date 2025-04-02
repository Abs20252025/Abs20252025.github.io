// ANIMACIÓN PARA LA SECCIÓN DE SERVICIOS DE FUMIGACIÓN
document.addEventListener("DOMContentLoaded", function () {
    const imagenServicio = document.querySelector(".contenedorImagenServicio img");
    const tituloSlider = document.querySelector(".titulo-slider"); // Seleccionamos el título en la imagen
    const contenedorDescripcion = document.querySelector(".contenedorDescripcionServicio");
    const tituloServicio = document.querySelector(".contenedorDescripcionServicio h1");
    const parrafoServicio = document.querySelector(".contenedorDescripcionServicio .parrafoServicio");
    const metodologia = document.querySelector(".contenedorMetodologia");
    const listaMetodologia = document.querySelectorAll(".contenedorMetodo .li");
    const slogan = document.querySelector(".slogan");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    imagenServicio.classList.add("show");
                    tituloSlider.classList.add("show"); // Se anima junto con la imagen
                    contenedorDescripcion.classList.add("show");
                    tituloServicio.classList.add("show");
                    parrafoServicio.classList.add("show");
                    metodologia.classList.add("show");
                    slogan.classList.add("show");

                    // Aplica la animación en cascada a cada punto de la metodología
                    listaMetodologia.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add("show");
                        }, index * 200);
                    });

                    observer.unobserve(entry.target); // Deja de observar
                }
            });
        },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.3, // Se activa cuando el 30% del elemento es visible
        }
    );

    observer.observe(document.querySelector(".sectionServicio"));
});

