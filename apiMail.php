<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $to = "digitador@absequiposcontraincendios.com.pe"; // Cambia esto al correo donde recibirás los mensajes
    $subject = "Nuevo mensaje de contacto de: $nombre";
    $headers = "From: $email\r\n";
    $headers = "Reply-To: $email\r\n";
    $headers = "Content-type: text/plain; charset=UTF-8\r\n";

    $body = "Nombre: $nombre\n";
    $body = "Correo: $email\n\n";
    $body = "Mensaje:\n$mensaje\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Hubo un error al enviar el mensaje. Inténtalo nuevamente.";
    }
} else {
    echo "Acceso denegado.";
}
?>
