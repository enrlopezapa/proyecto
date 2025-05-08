<?php
require 'conexion.php'; // Asegúrate de tener un archivo de conexión

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'] ?? null;
    $direccion = $_POST['direccion'] ?? null;
    $administrador = $_POST['administrador'];

    $sql = "UPDATE usuarios 
            SET nombre = ?, email = ?, telefono = ?, direccion = ?, administrador = ?
            WHERE id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssis", $nombre, $email, $telefono, $direccion, $administrador, $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => "Error al actualizar el usuario"]);
    }

    $stmt->close();
    $conn->close();
}