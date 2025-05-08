<?php
require 'conexion.php'; // tu archivo de conexión a base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $imagen_url = $_POST['imagen_url'];
    $fecha_produccion = $_POST['fecha_produccion'];
    $unidad_medida = $_POST['unidad_medida'];
    $precio_actual = $_POST['precio_actual'];
    $vendido = $_POST['vendido'];

    $sql = "UPDATE productos 
            SET nombre = ?, descripcion = ?, imagen_url = ?, fecha_produccion = ?, unidad_medida = ?, precio_actual = ?, vendido = ?
            WHERE id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssdss", $nombre, $descripcion, $imagen_url, $fecha_produccion, $unidad_medida, $precio_actual, $vendido, $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => "Error al actualizar"]);
    }

    $stmt->close();
    $conn->close();
}