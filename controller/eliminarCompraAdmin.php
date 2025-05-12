<?php
require '../model/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $id = $_POST['id'];

    try {
        $stmt = $conn->prepare("DELETE FROM compras WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode(["status" => "ok"]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "mensaje" => "No se pudo eliminar la compra",
            "error" => $e->getMessage()
        ]);
    }

    // Liberar recursos (opcional en PDO)
    $stmt = null;
    $conn = null;

} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "mensaje" => "ID no proporcionado"]);
}