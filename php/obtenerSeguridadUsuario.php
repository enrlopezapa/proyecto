<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

require_once 'conexion.php';

$usuario_id = $_SESSION['usuario_id'];

$sql = "SELECT usuario_id, verificado, codigo_verificacion, fecha_envio_codigo, fecha_ultimo_cambio_contrasena 
        FROM seguridad_usuarios 
        WHERE usuario_id = :id";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $usuario_id, PDO::PARAM_STR);
$stmt->execute();

$usuario = $stmt->fetchAll();

echo json_encode($usuario);