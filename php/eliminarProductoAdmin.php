<?php
require 'conexion.php'; // Debe devolver un objeto PDO en $conn

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $id = $_POST['id'];

    try {
        $stmt = $conn->prepare("DELETE FROM productos WHERE id = :id");
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "No se pudo eliminar el producto"]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "mensaje" => "Error al ejecutar la consulta",
            "detalle" => $e->getMessage()
        ]);
    }

    // Liberar recursos
    $stmt = null;
    $conn = null;

} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "mensaje" => "ID de producto no proporcionado"]);
}