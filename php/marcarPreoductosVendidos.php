<?php
session_start();
header('Content-Type: application/json');

// Verificar que el usuario esté autenticado
if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

// Incluir conexión a la base de datos
require_once 'conexion.php';

$usuario_id = $_SESSION['usuario_id'];

// Leer el JSON recibido
$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['productos']) || !is_array($input['productos'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Datos de productos inválidos']);
    exit;
}

try {
    // Preparar la consulta para actualizar
    $stmt = $conn->prepare("
        UPDATE productos 
        SET vendido = TRUE 
        WHERE id = :id AND usuario_id = :usuario_id
    ");

    $actualizados = 0;

    foreach ($input['productos'] as $productoId) {
        $stmt->bindParam(':id', $productoId, PDO::PARAM_STR);
        $stmt->bindParam(':usuario_id', $usuario_id, PDO::PARAM_STR);
        if ($stmt->execute()) {
            $actualizados++;
        }
    }

    echo json_encode([
        'success' => true,
        'actualizados' => $actualizados
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en la base de datos: ' . $e->getMessage()]);
}