<?php
require '../model/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $id = $_POST['id'];

    try {
        $sql = "DELETE FROM usuarios WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "No se pudo eliminar el usuario"]);
        }

        $stmt = null;
        $conn = null;

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => $e->getMessage()]);
    }
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "mensaje" => "ID de usuario no proporcionado"]);
}