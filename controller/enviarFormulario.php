<?php
require '../model/class/Envios.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitiza y obtiene los datos
    $nombre = htmlspecialchars(trim($_POST['nombre'] ?? ''));
    $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $mensajeUsuario = htmlspecialchars(trim($_POST['mensaje'] ?? ''));

    if (!$nombre || !$email || !$mensajeUsuario) {
        http_response_code(400);
        echo "Datos inválidos.";
        exit;
    }

    // Crea el mensaje HTML
    $asunto = "Nuevo mensaje desde el formulario de contacto";
    $mensaje = "
        <h2>Mensaje desde el sitio web</h2>
        <p><strong>Nombre:</strong> $nombre</p>
        <p><strong>Correo:</strong> $email</p>
        <p><strong>Mensaje:</strong><br>" . nl2br($mensajeUsuario) . "</p>
        <hr>
        <p>Enviado el: " . date('Y-m-d H:i:s') . "</p>
    ";

    $envios = new Envios();
    $destinatario = 'administracion@wallafood.es';

    if ($envios->enviarMail($asunto, $mensaje, $destinatario)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un problema al enviar el mensaje.";
    }
}