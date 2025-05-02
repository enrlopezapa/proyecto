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
$datos = json_decode(file_get_contents('php://input'), true);

// Validar que al menos haya categoría o palabra clave
if (empty($datos['categoria_id']) && empty($datos['nombre_clave'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Debes proporcionar al menos una categoría o una palabra clave.']);
    exit;
}

try {
    $sql = "INSERT INTO alertas_usuario (
                id,
                usuario_id,
                categoria_id,
                nombre_clave,
                fecha_creacion
            ) VALUES (
                UUID(),
                :usuario_id,
                :categoria_id,
                :nombre_clave,
                NOW()
            )";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':usuario_id', $usuario_id);
    $stmt->bindParam(':categoria_id', $datos['categoria_id']);
    $stmt->bindParam(':nombre_clave', $datos['nombre_clave']);

    $stmt->execute();

    echo json_encode(['mensaje' => 'Alerta creada correctamente.']);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al crear la alerta: ' . $e->getMessage()]);
}