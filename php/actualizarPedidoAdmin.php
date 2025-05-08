<?php
require 'conexion.php'; // Asegúrate de incluir tu archivo de conexión

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $estado = $_POST['estado'];
    $notas = $_POST['notas'];

    $sql = "UPDATE estado_pedido
            SET estado = ?, notas = ?, fecha_estado = NOW()
            WHERE id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $estado, $notas, $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => "No se pudo actualizar el pedido"]);
    }

    $stmt->close();
    $conn->close();
}