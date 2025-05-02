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

// Validar ID de la alerta
if (empty($datos['id'])) {
    http_response_code(400);
    echo json_encode(['error' => 'ID de la alerta requerido.']);
    exit;
}

// Validar al menos una modificación
if (empty($datos['categoria_id']) && empty($datos['nombre_clave'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Debes proporcionar al menos una nueva categoría o palabra clave.']);
    exit;
}

try {
    $sql = "UPDATE alertas_usuario
            SET categoria_id = :categoria_id,
                nombre_clave = :nombre_clave
            WHERE id = :id AND usuario_id = :usuario_id";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':categoria_id', $datos['categoria_id']);
    $stmt->bindParam(':nombre_clave', $datos['nombre_clave']);
    $stmt->bindParam(':id', $datos['id']);
    $stmt->bindParam(':usuario_id', $usuario_id);

    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        echo json_encode(['mensaje' => 'Alerta actualizada correctamente.']);
    } else {
        echo json_encode(['mensaje' => 'No se actualizó ninguna alerta. Verifica que el ID sea correcto y pertenezca al usuario.']);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al modificar la alerta: ' . $e->getMessage()]);
}