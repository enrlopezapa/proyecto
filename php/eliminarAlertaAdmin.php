<?php
require 'conexion.php'; // Asegúrate de tener este archivo con tu conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $id = $_POST['id'];

    $stmt = $conn->prepare("DELETE FROM alertas_usuario WHERE id = ?");
    $stmt->bind_param("s", $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok"]);
    } else {
        echo json_encode(["status" => "error", "mensaje" => "No se pudo eliminar la alerta"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["status" => "error", "mensaje" => "Solicitud inválida"]);
}