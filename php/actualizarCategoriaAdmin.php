<?php
require 'conexion.php'; // Tu archivo de conexión

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $nombre = trim($_POST['nombre']);
    $descripcion = trim($_POST['descripcion']);

    $sql = "UPDATE categorias
            SET nombre = ?, descripcion = ?
            WHERE id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre, $descripcion, $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => "No se pudo actualizar la categoría"]);
    }

    $stmt->close();
    $conn->close();
}