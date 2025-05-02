<?php
session_start();
header('Content-Type: application/json');

// Validar que el usuario esté autenticado
if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

require_once 'conexion.php'; // Conecta a la base de datos

$usuario_id = $_SESSION['usuario_id'];

$sql = "SELECT id, nombre, descripcion, imagen_url, numero_lote, fecha_produccion, fecha_caducidad, unidad_medida, cantidad_disponible
        FROM productos
        WHERE usuario_id = :id";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $usuario_id, PDO::PARAM_STR);
$stmt->execute();

$productos = $stmt->fetchAll();

echo json_encode($productos);