<?php
require 'conexion.php'; // Conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $id = $_POST['id'];

    $stmt = $conn->prepare("DELETE FROM estado_pedido WHERE id = ?");
    $stmt->bind_param("s", $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok"]);
    } else {
        echo json_encode(["status" => "error", "mensaje" => "Error al eliminar el pedido"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["status" => "error", "mensaje" => "Solicitud inválida"]);
}