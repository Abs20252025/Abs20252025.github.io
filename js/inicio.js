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

document.querySelectorAll(".dropdown .arrow-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que se active el enlace principal
    let submenu = button.nextElementSibling;
    submenu.classList.toggle("active");
  });
});

/* SERVICIOOOOOOOS */
document.addEventListener("DOMContentLoaded", function () {
  const servicios = [
    {
      nombre: "Extintores",
      descripcion: " Venta, inspección, recarga y certificación de extintores según normativas.",
      imagen: "img/01-ext.jpg",
      enlaces: ["Venta", "Mantenimiento y Recarga"],
    },
    {
      nombre: "Sistema D.A.C.I.",
      descripcion: " Instalación, mantenimiento y proyectos de sistema de detección de alarma contra incendios.",
      imagen: "img/03-daci.jpg",
      enlaces: ["Venta e Instalación", "Proyecto", "Mantenimiento"],
    },
    {
      nombre: "Sistema Red A.C.I.",
      descripcion: " Diseño, instalación y mantenimiento de redes de agua contra incendios.",
      imagen: "img/02-bci.jpg",
      enlaces: ["Venta e Instalación", "Proyecto", "Mantenimiento"],
    },
    {
      nombre: "Bomba Contra Incendios",
      imagen: "img/02-bci.jpg",
      enlaces: ["Venta e Instalación", "Mantenimiento"],
    },
    {
      nombre: "Gabinetes y Mangueras",
      imagen: "img/05-gabi-mangue.jpg",
      enlaces: ["Venta e Instalación", "Mantenimiento"],
    },
    {
      nombre: "Sistema Rociadores",
      imagen: "img/03-daci.jpg",
      enlaces: ["Venta e Instalación", "Mantenimiento"],
    },
    {
      nombre: "Puertas Cortafuego",
      descripcion:"Venta, instalación y mantenimiento de puertas cortafuego certificadas para contener el fuego.",
      imagen: "img/06-puertas-cortafuego.jpg",
      enlaces: ["Venta e Instalación", "Mantenimiento"],
    },
    {
      nombre: "Presurización de Escaleras",
      descripcion:"Venta, instalación y mantenimiento de sistemas para mantener escaleras libres de humo en caso de incendio.",
      imagen: "img/011-presurizacion.jpg",
      enlaces: ["Venta e Instalación", "Mantenimiento"],
    },
    {
      nombre: "Bomba Presión Constante",
      descripcion:" Venta, instalación y mantenimiento de equipos para garantizar un suministro constante de agua.",
      imagen: "img/01-ext.jpg",
      enlaces: ["Venta e Instalación", "Mantenimiento"],
    },
    {
      nombre: "Luces de Emergencia",
      descripcion:"Venta, instalación y mantenimiento de iluminación de seguridad para evacuaciones.",
      imagen: "img/04-le.jpg",
      enlaces: ["Venta e Instalación", "Mantenimiento"],
    },
    {
      nombre: "Pozo a Tierra",
      descripcion:"Venta, instalación y mantenimiento de pozos a tierra para protección eléctrica.",
      imagen: "img/09-pozo-a-tierra.jpg",
      enlaces: ["Venta e Instalación", "Mantenimiento"],
    },
    {
      nombre: "Tablero Eléctrico",
      descripcion:"Venta, Instalación y Mantenimiento de tableros eléctricos para seguridad en industrias, empresas y edificios corporativos.",
      imagen: "img/08-sistemas-electricos.jpg",
      enlaces: ["Venta e Instalación", "Mantenimiento"],
    },
    ,
    {
      nombre: "Asesoría",
      descripcion:"Consultoría en normativas, ITSEN y soluciones integrales en seguridad contra incendios.",
      imagen: "img/03-daci.jpg",
      enlaces: ["Conocer Más"],
    },
    {
      nombre: "Señaléticas",
      descripcion:"Venta e instalación de señalización de seguridad para evacuaciones rápidas.",
      imagen: "img/07-senales-seguridad.jpg",
      enlaces: ["Venta e Instalación"],
    },
  ];

  const contenedor = document.getElementById("gridServicios");

  servicios.forEach((servicio) => {
    const card = document.createElement("div");
    card.classList.add("card-servicio");

    card.innerHTML = `
          <div class="card-inner">
              <div class="card-front">
                  <img src="${servicio.imagen}" alt="${servicio.nombre}">
              </div>
              <div class="card-back">
                  <p>${servicio.descripcion}</p>
                  <div class="links">
                      ${servicio.enlaces
                        .map((link) => `<a href="#">${link}</a>`)
                        .join("")}
                  </div>
              </div>
          </div>
      `;

    contenedor.appendChild(card);
  });
});

//ANIMACION BANNER

document.addEventListener("DOMContentLoaded", function () {
  const imagenBanner = document.querySelector(".imagen-banner");
  const contenidoBanner = document.querySelector(".contenido-banner");

  function mostrarBanner() {
    const posicionImagen = imagenBanner.getBoundingClientRect().top;
    const posicionTexto = contenidoBanner.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    if (posicionImagen < alturaPantalla * 0.75) {
      imagenBanner.classList.add("show");
    }

    if (posicionTexto < alturaPantalla * 0.75) {
      contenidoBanner.classList.add("show");
    }
  }

  window.addEventListener("scroll", mostrarBanner);
  mostrarBanner(); // Ejecutar al cargar la página
});

//DESPLEGABLE PREGUNTAS
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", function () {
    const faqItem = this.parentElement;
    const answer = faqItem.querySelector(".faq-answer");

    if (faqItem.classList.contains("active")) {
      answer.style.maxHeight = null;
      faqItem.classList.remove("active");
    } else {
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".faq-answer").style.maxHeight = null;
      });

      faqItem.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + 20 + "px"; // 🔥 Se suma 20px extra para que no esté justo
    }
  });
});

//ANIMACION ELEGIRNOS

document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.querySelector("#contenido h2");
  const imagen = document.querySelector("#contenido .imagen img");
  const texto = document.querySelector("#contenido .texto");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          titulo.classList.add("show");
          imagen.classList.add("show");
          texto.classList.add("show");
          observer.unobserve(entry.target); // Deja de observar tras la animación
        }
      });
    },
    {
      root: null, // Usa la ventana como referencia
      rootMargin: "0px",
      threshold: 0.2, // Se activa cuando el 20% del elemento es visible
    }
  );

  observer.observe(document.querySelector("#contenido"));
});
