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

function cargarProductos() {
    for (let sliderId in lineasNegocio) {
        let slider = document.getElementById(sliderId);
        slider.innerHTML = ""; // Limpiar slider antes de añadir elementos

        let sliderWrapper = document.createElement("div");
        sliderWrapper.classList.add("slider-wrapper");

        // 🔥 Duplicar los productos para hacer el carrusel infinito
        let productosDuplicados = [...lineasNegocio[sliderId], ...lineasNegocio[sliderId]];

        productosDuplicados.forEach((producto) => {
            let slide = document.createElement("div");
            slide.classList.add("slide");
            slide.setAttribute("data-name", producto.name);
            slide.innerHTML = `
                <img src="${producto.img}" alt="${producto.title}">
                <p>${producto.title}</p>
            `;
            sliderWrapper.appendChild(slide);
        });

        slider.appendChild(sliderWrapper);
    }
}



document.addEventListener("DOMContentLoaded", cargarProductos);



function searchProduct() {
  let searchText = document
    .getElementById("searchBox")
    .value.trim()
    .toLowerCase();

  // Dividir palabras de búsqueda en un array
  let searchWords = searchText.split(/\s+/).filter((word) => word !== "");

  let container = document.querySelector(".productosGeneral"); // Contenedor de líneas de negocio
  let sections = []; // Guardará las secciones ordenadas

  let sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((sliderContainer) => {
    let titulo = sliderContainer.previousElementSibling; // El <h2> de la línea de negocio
    let slider = sliderContainer.querySelector(".slider");
    let slides = slider.querySelectorAll(".slide");

    let foundSlide = false;
    let matchLineaNegocio = titulo.textContent
      .toLowerCase()
      .includes(searchText);

    slides.forEach((slide) => slide.classList.remove("highlight"));

    if (searchWords.length > 0) {
      slides.forEach((slide) => {
        let productName = slide.dataset.name.toLowerCase();
        let matchProducto = searchWords.every((word) =>
          productName.includes(word)
        );

        if (matchProducto) {
          slide.classList.add("highlight");
          foundSlide = true;
        }
      });
    }

    // Agregar la sección al array con prioridad
    sections.push({
      titulo,
      sliderContainer,
      prioridad: foundSlide || matchLineaNegocio ? 1 : 2, // Prioridad 1 si coincide, 2 si no
    });

    // Si hay coincidencias, detener animación
    if (foundSlide) {
      slider.style.animation = "none";
      slider.scrollLeft = slides[0].offsetLeft - 50;
    } else {
      slider.style.animation = "scrollSlider 20s linear infinite";
    }
  });

  // Ordenar: primero los que coinciden, luego el resto
  sections.sort((a, b) => a.prioridad - b.prioridad);

  // Reordenar en el HTML
  sections.forEach(({ titulo, sliderContainer }) => {
    container.appendChild(titulo);
    container.appendChild(sliderContainer);
  });
}

document.addEventListener("DOMContentLoaded", cargarProductos);
