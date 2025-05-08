<?php
require 'conexion.php'; // Asegúrate de tener este archivo con tu conexión

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $id = $_POST['id'];

    // Elimina la categoría
    $stmt = $conn->prepare("DELETE FROM categorias WHERE id = ?");
    $stmt->bind_param("s", $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok"]);
    } else {
        echo json_encode(["status" => "error", "mensaje" => "No se pudo eliminar la categoría"]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(["status" => "error", "mensaje" => "Solicitud inválida"]);
}