document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formularioContacto").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío normal del formulario

        // Obtener los valores del formulario
        let ruc = document.getElementById("ruc").value;
        let razonSocial = document.getElementById("razonSocial").value;
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;
        let mensaje = document.getElementById("mensaje").value;

        // Número de WhatsApp (reemplázalo con el tuyo)
        let whatsappNumber = "5117436577";

        // Agregar emojis usando Unicode
        let textoMensaje = encodeURIComponent(
            `Hola, mi nombre es ${nombre}.\n` +
            `📌 RUC: ${ruc}\n` +
            `🏢 Razón Social: ${razonSocial}\n` +
            `📧 Email: ${email}\n` +
            `📞 Teléfono: ${telefono}\n` +
            `📝 Mensaje: ${mensaje}`
        );

        // Enlace de WhatsApp
        let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${textoMensaje}`;

        // Detectar si es móvil o PC
        let esMovil = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

        // Abrir WhatsApp sin cambiar la URL de la página
        window.open(whatsappURL, "_blank");

        // Opcional: Resetear el formulario después de enviar
        document.getElementById("formularioContacto").reset();

    });
});
