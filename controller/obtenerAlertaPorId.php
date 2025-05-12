<?php
require '../model/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
    $id = $_GET['id'];

    $stmt = $conn->prepare("SELECT * FROM alertas_usuario WHERE id = :id");
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    $alerta = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($alerta) {
        echo json_encode($alerta);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Alerta no encontrada']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'ID no proporcionado']);
}