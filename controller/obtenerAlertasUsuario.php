<?php
session_start();

header('Content-Type: application/json');

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

require '../model/conexion.php';

$usuario_id = $_SESSION['usuario_id'];

$sql = "SELECT id, categoria_id, nombre_clave, fecha_creacion, activo
        FROM alertas_usuario
        WHERE usuario_id = :id";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $usuario_id, PDO::PARAM_STR);
$stmt->execute();

$alertas = $stmt->fetchAll();

echo json_encode($alertas);
