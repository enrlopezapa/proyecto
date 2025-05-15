<?php
session_start();
require '../model/conexion.php'; // Asegúrate de que la variable $conn esté definida aquí

header('Content-Type: application/json');

// Validar sesión y datos recibidos
if (!isset($_POST['id'], $_SESSION['usuario_id'])) {
    http_response_code(400);
    echo json_encode(["error" => "Datos inválidos"]);
    exit;
}

$productoId = $_POST['id'];
$usuarioId = $_SESSION['usuario_id'];

try {
    $stmt = $conn->prepare("DELETE FROM favoritos_producto WHERE producto_id = ? AND usuario_id = ?");
    $stmt->execute([$productoId, $usuarioId]);

    echo json_encode(["status" => "ok"]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error al eliminar favorito: " . $e->getMessage()]);
}