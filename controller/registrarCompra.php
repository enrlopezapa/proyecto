<?php
session_start();

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

try {
    // Usamos PDO para la consulta de nombre del usuario
    $stmtNombre = $conn->prepare("SELECT nombre FROM usuarios WHERE id = :usuarioId");
    $stmtNombre->bindParam(':usuarioId', $usuarioId, PDO::PARAM_INT);
    $stmtNombre->execute();

    // Verificar si se encontró el usuario
    if ($stmtNombre->rowCount() > 0) {
        $filaNombre = $stmtNombre->fetch(PDO::FETCH_ASSOC);
        $nombrePagador = $filaNombre['nombre'];
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Nombre del usuario no encontrado']);
        exit;
    }

    // Recibir los datos de la compra
    $direccionEntrega = $data['direccion_entrega'];
    $destinatario = $data['destinatario'];
    $direccionFiscal = $data['direccionFiscal'];

    // Insertar la compra en la base de datos
    $stmt = $conn->prepare("INSERT INTO compras (usuario_comprador_id, nombre_pagador, direccion_entrega, destinatario) VALUES (:usuarioId, :nombrePagador, :direccionEntrega, :destinatario)");
    $stmt->bindParam(':usuarioId', $usuarioId, PDO::PARAM_INT);
    $stmt->bindParam(':nombrePagador', $nombrePagador, PDO::PARAM_STR);
    $stmt->bindParam(':direccionEntrega', $direccionEntrega, PDO::PARAM_STR);
    $stmt->bindParam(':destinatario', $destinatario, PDO::PARAM_STR);

    // Ejecutar la consulta de inserción
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "compra_id" => $conn->lastInsertId()]);
        
        // Enviar el correo
        require "../model/class/Envios.php";
        $nuevoMail = new Envios();
        $asunto = "Factura de tu compra";
        $mensaje = "
            <h2>Factura de Compra</h2>
            <p><strong>Nombre del Pagador:</strong> $nombrePagador</p>
            <p><strong>Destinatario:</strong> $destinatario</p>
            <p><strong>Dirección de Entrega:</strong><br>" . nl2br(htmlspecialchars($direccionEntrega)) . "</p>
            <p><strong>Dirección de Fiscal:</strong><br>" . nl2br(htmlspecialchars($direccionFiscal)) . "</p>
            <p><strong>Fecha:</strong> " . date('Y-m-d H:i:s') . "</p>
            <p><strong>El equipo de Wallafood le da las gracias!</strong></p>
        ";
        $nuevoMail->enviarMail($asunto, $mensaje, $usuarioEmail);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => $stmt->errorInfo()]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}

// Cerrar la conexión
$conn = null;