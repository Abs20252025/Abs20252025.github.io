let lineasNegocio = {
  extintoresSlider: [
    {
      name: "extintor pqs 6kg",
      img: "img/productos/extintores-pqs.webp",
      title: "Extintor PQS - 6kg",
    },
    {
      name: "extintor co2 5kg",
      img: "img/productos/extintores-co2.webp",
      title: "Extintor CO2 - 5kg",
    },
    {
      name: "extintor espuma",
      img: "img/productos/extintores-espuma.webp",
      title: "Extintor espuma - 8kg",
    },
    {
      name: "extintor agua 10l",
      img: "img/productos/extintores-aguapresurizada.webp",
      title: "Extintor Agua Presurizada - 6L",
    },
    {
      name: "extintor Desmineralizada",
      img: "img/productos/extintores-aguadesmineralizada.webp",
      title: "Extintor Agua Desmineralizada - 6L",
    },
    {
      name: "extintor Acetato de Potasio K",
      img: "img/productos/extintores-acetato-de-potasio.webp",
      title: "Extintor Acetato de Potasio K - 6L",
    },
  ],
  deteccionSlider: [
    {
      name: "detector humo óptico",
      img: "img/productos/extintores-pqs.webp",
      title: "Detector de Humo Óptico",
    },
    {
      name: "detector temperatura",
      img: "detector_temperatura.jpg",
      title: "Detector de Temperatura",
    },
    {
      name: "central alarma",
      img: "central_alarma.jpg",
      title: "Central de Alarma",
    },
  ],
};

// Definir las URLs de cada línea de negocio
let urlsLineasNegocio = {
  extintoresSlider: "extintores.html",
  deteccionSlider: "sistema-deteccion-alarma-contra-incendios.html",
};

function cargarProductos() {
  for (let sliderId in lineasNegocio) {
    let sliderContainer = document.getElementById(sliderId); // Contenedor del slider
    sliderContainer.innerHTML = ""; // Limpiar antes de agregar productos

    let sliderWrapper = document.createElement("div");
    sliderWrapper.classList.add("slider-wrapper");

    // 🔥 Duplicar los productos para hacer el carrusel infinito
    let productosDuplicados = [
      ...lineasNegocio[sliderId],
      ...lineasNegocio[sliderId],
    ];

    productosDuplicados.forEach((producto) => {
      let slide = document.createElement("div");
      slide.classList.add("slide");
      slide.setAttribute("data-name", producto.name);

      slide.innerHTML = `
                  <img src="${producto.img}" alt="${producto.title}" loading="lazy">
                  <p>${producto.title}</p>
              `;

      sliderWrapper.appendChild(slide);
    });

    sliderContainer.appendChild(sliderWrapper);

    // 🔹 Hacer que todo el slider sea clickeable y redirija a su página correspondiente
    sliderContainer.addEventListener("click", function () {
      let url = urlsLineasNegocio[sliderId];
      if (url) {
        window.location.href = url; // 🔥 Redirigir a la línea de negocio
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", cargarProductos);

function searchProduct() {
  let searchText = document
    .getElementById("searchBox")
    .value.trim()
    .toLowerCase();

  let searchWords = searchText.split(/\s+/).filter((word) => word !== "");

  let container = document.querySelector(".productosGeneral");
  let sliders = document.querySelectorAll(".slider-container");

  let sections = [];
  let needsReordering = false;

  sliders.forEach((sliderContainer) => {
    let titulo = sliderContainer.previousElementSibling;
    let slider = sliderContainer.querySelector(".slider");

    if (!slider) return; // 🔹 Verifica que exista el slider

    let slides = slider.querySelectorAll(".slide");

    let foundSlide = false;
    let matchLineaNegocio = titulo.textContent
      .toLowerCase()
      .includes(searchText);

    slides.forEach((slide) => slide.classList.remove("highlight"));

    let firstMatchingSlide = null;

    if (searchWords.length > 0) {
      slides.forEach((slide) => {
        let productName = slide.dataset.name.toLowerCase();
        let matchProducto = searchWords.every((word) =>
          productName.includes(word)
        );

        if (matchProducto) {
          slide.classList.add("highlight");
          foundSlide = true;
          if (!firstMatchingSlide) {
            firstMatchingSlide = slide;
          }
        }
      });
    }

    let prioridad = foundSlide || matchLineaNegocio ? 1 : 2;

    sections.push({ titulo, sliderContainer, prioridad });

    if (foundSlide && firstMatchingSlide) {
      let slideIndex = Array.from(slides).indexOf(firstMatchingSlide);
      let slideWidth = firstMatchingSlide.offsetWidth;
      let scrollPosition = slideIndex * slideWidth;

      setTimeout(() => {
        slider.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  });

  let sortedSections = [...sections].sort((a, b) => a.prioridad - b.prioridad);

  if (
    !sections.every(
      (sec, index) =>
        sec.sliderContainer === sortedSections[index].sliderContainer
    )
  ) {
    needsReordering = true;
  }

  if (needsReordering) {
    sortedSections.forEach(({ titulo, sliderContainer }) => {
      container.appendChild(titulo);
      container.appendChild(sliderContainer);

      // 🔥 Asegurar que el CSS sigue aplicándose después de mover los elementos
      setTimeout(() => {
        sliderContainer.classList.add("reload-css"); // 🔹 Clase para forzar la recarga de estilos
      }, 50);
    });
  }

  document.querySelectorAll(".productosContainerGeneral h2").forEach((titulo) => {
    titulo.style.cssText = `
      text-shadow: 1px 1px 4px rgb(15 33 15 / 75%);
      font-weight: bold;
      font-size: 1.5rem;
      color: whitesmoke;
      text-align: center;
      text-transform: uppercase;
    `;
  });
  

}

document.addEventListener("DOMContentLoaded", cargarProductos);
