<?php
session_start();
header('Content-Type: application/json');

require '../model/conexion.php';

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
        WHERE id = :id
    ");

    $actualizados = 0;

    foreach ($input['productos'] as $productoId) {
        $stmt->bindParam(':id', $productoId, PDO::PARAM_STR);
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