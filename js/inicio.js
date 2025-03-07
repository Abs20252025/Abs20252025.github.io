



/* SERVICIOOOOOOOS */
document.addEventListener("DOMContentLoaded", function () {
  const servicios = [
    {
      nombre: "Extintores",
      descripcion:
        " Venta, inspección, recarga y certificación de extintores según normativas.",
      imagen: "img/01-ext.webp",
      enlaces: [
        { texto: "Venta", url: "/extintores.html" },
        {
          texto: "Mantenimiento y Recarga",
          url: "/recarga-extintores.html",
        },
      ],
    },
    {
      nombre: "Sistema D.A.C.I.",
      descripcion:
        " Instalación, mantenimiento y proyectos de sistema de detección de alarma contra incendios.",
      imagen: "img/03-daci.webp",
      enlaces: [
        {
          texto: "Venta e Instalación",
          url: "/sistema-deteccion-alarma-contra-incendios.html",
        },
        { texto: "Proyecto", url: "/proyecto-daci.html" },
        { texto: "Mantenimiento", url: "mantenimiento-sistema-daci.html" },
      ],
    },
    {
      nombre: "Sistema Red A.C.I.",
      descripcion:
        "Diseño, instalación y mantenimiento de redes de agua contra incendios.",
      imagen: "img/ACI.webp",
      enlaces: [
        { texto: "Proyecto", url: "/proyecto-sistema-red-aci.html" },
      ],
    },
    {
      nombre: "Bomba Contra Incendios",
      descripcion:
        "Venta, instalación y mantenimiento de bombas contra incendios para sistemas de alta presión.",
      imagen: "img/02-bci.webp",
      enlaces: [
        { texto: "Venta e Instalación", url: "/bomba-de-agua-contra-incendios.html" },
        { texto: "Mantenimiento", url: "/mantenimiento-bomba-de-agua-contra-incendios.html" },
      ],
    },
    {
      nombre: "Gabinetes y Mangueras",
      descripcion:
        "Venta, instalación y mantenimiento en gabinetes y mangueras para protección contra incendios.",
      imagen: "img/05-gabi-mangue.webp",
      enlaces: [
        { texto: "Venta e Instalación", url: "/gabinetes-contra-incendios.html" },
        { texto: "Mantenimiento", url: "/mantenimiento-rociadores-y-manguera-contra-incendios.html" },
      ],
    },
    {
      nombre: "Sistema Rociadores",
      descripcion:
        "Venta, instalación y mantenimiento de sistema de rociadores contra incendios.",
      imagen: "img/mntto-red-de-agua-contra-incendios3.webp",
      enlaces: [
        { texto: "Venta e Instalación", url: "/sistema-de-rociadores.html" },
        { texto: "Mantenimiento", url: "/mantenimiento-rociadores-y-manguera-contra-incendios.html" },
      ],
    },
    {
      nombre: "Puertas Cortafuego",
      descripcion:
        "Venta, instalación y mantenimiento de puertas cortafuego certificadas para contener el fuego.",
      imagen: "img/06-puertas-cortafuego.webp",
      enlaces: [
        { texto: "Venta e Instalación", url: "/puertas-cortafuego.html" },
        { texto: "Mantenimiento", url: "/mantenimiento-puertas-cortafuego.html" },
      ],
    },
    {
      nombre: "Presurización de Escaleras",
      descripcion:
        "Venta, instalación y mantenimiento de sistemas para mantener escaleras libres de humo en caso de incendio.",
      imagen: "img/011-presurizacion.webp",
      enlaces: [
        { texto: "Venta e Instalación", url: "/presurizacion-de-escaleras.html" },
        { texto: "Mantenimiento", url: "/mantenimiento-de-presurizacion-de-escaleras.html" },
      ],
    },
    {
      nombre: "Bomba Presión Constante",
      descripcion:
        "Venta, instalación y mantenimiento de equipos para garantizar un suministro constante de agua.",
      imagen: "img/BPC.webp",
      enlaces: [
        { texto: "Venta e Instalación", url: "/bomba-de-agua-presion-constante.html" },
        { texto: "Mantenimiento", url: "/mantenimiento-bomba-presion-constante.html" },
      ],
    },
    {
      nombre: "Luces de Emergencia",
      descripcion:
        "Venta, instalación y mantenimiento de iluminación de seguridad para evacuaciones.",
      imagen: "img/04-le.webp",
      enlaces: [
        { texto: "Venta e Instalación", url: "/luces-de-emergencia.html" },
        { texto: "Mantenimiento", url: "/mantenimiento-luces-emergencias.html" },
      ],
    },
    {
      nombre: "Pozo a Tierra",
      descripcion:
        "Venta, instalación y mantenimiento de pozos a tierra para protección eléctrica.",
      imagen: "img/09-pozo-a-tierra.webp",
      enlaces: [
        { texto: "Venta e Instalación", url: "/pozos-a-tierra.html" },
        { texto: "Mantenimiento", url: "/mantenimiento-pozo-a-tierra.html" },
      ],
    },
    {
      nombre: "Tablero Eléctrico",
      descripcion:
        "Venta, instalación y mantenimiento de tableros eléctricos para seguridad en industrias, empresas y edificios corporativos.",
      imagen: "img/08-sistemas-electricos.webp",
      
      enlaces: [
        { texto: "Venta e Instalación", url: "/tableros-electricos.html" },
        { texto: "Mantenimiento", url: "/mantenimiento-de-tableros-electricos.html" },
      ],
    },
    {
      nombre: "Asesoría",
      descripcion:
        "Consultoría en normativas, ITSEN y soluciones integrales en seguridad contra incendios.",
      imagen: "img/certificacion-itse.webp",
      enlaces: [{ texto: "Conocer Más", url: "/certificacion-itse.html" }],
    },
    {
      nombre: "Señaléticas",
      descripcion:
        "Venta e instalación de señalización de seguridad para evacuaciones rápidas.",
      imagen: "img/07-senales-seguridad.webp",
      enlaces: [{ texto: "Venta e Instalación", url: "/senalizacion-de-seguridad.html" }],
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
                        .map(
                          (link) => `<a href="${link.url}">${link.texto}</a>`
                        )
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
