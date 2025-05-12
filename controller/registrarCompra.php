<?php
// Conecta a la base de datos
if (!isset($_SESSION['usuario_id']) || !isset($_SESSION['usuario_email'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

require '../model/conexion.php';

$usuarioId = $_SESSION['usuario_id'];
$usuarioEmail = $_SESSION['usuario_email'];

// Recibe los datos
$data = json_decode(file_get_contents("php://input"), true);

$stmtNombre = $conn->prepare("SELECT nombre FROM usuarios WHERE id = ?");
$stmtNombre->bind_param("s", $usuarioId);
$stmtNombre->execute();
$resultadoNombre = $stmtNombre->get_result();

if ($resultadoNombre->num_rows > 0) {
    $filaNombre = $resultadoNombre->fetch_assoc();
    $nombrePagador = $filaNombre['nombre'];
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Nombre del usuario no encontrado']);
    exit;
}

$stmtNombre->close();
$direccionEntrega = $data['direccion_entrega'];
$destinatario = $data['destinatario'];

// Prepara e inserta la compra
$stmt = $conn->prepare("INSERT INTO compras (usuario_comprador_id, nombre_pagador, direccion_entrega, destinatario) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $usuarioId, $nombrePagador, $direccionEntrega, $destinatario);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "compra_id" => $stmt->insert_id]);
    require "../model/class/Envios.php";
    $nuevoMail = new Envios();
    $asunto = "Factura de tu compra";
    $mensaje = "
            <h2>Factura de Compra</h2>
            <p><strong>Nombre del Pagador:</strong> $nombrePagador</p>
            <p><strong>Destinatario:</strong> $destinatario</p>
            <p><strong>Dirección de Entrega:</strong><br>" . nl2br(htmlspecialchars($direccionEntrega)) . "</p>
            <p><strong>Fecha:</strong> " . date('Y-m-d H:i:s') . "</p>
            <p><strong>El equipo de Wallafood le da las gracias!</strong></p>
    ";
    $nuevoMail->enviarMail($asunto,$mensaje,$usuarioEmail);

} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $stmt->error]);
}

$stmt->close();
$conn->close();