<?php
require '../model/conexion.php';

// Obtener el contenido JSON enviado
$input = json_decode(file_get_contents('php://input'), true);

// Validación básica
if (!$input || empty($input['palabra_clave'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Palabra clave es requerida']);
    exit;
}

session_start();
$usuario_id_session = $_SESSION['usuario_id'];
session_write_close();
session_name($usuario_id_session);
session_start();
if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

$usuario_id = $_SESSION['usuario_id']; // Debe ser un UUID
$nombre_clave = trim($input['palabra_clave']);
$categoria_id = !empty($input['categoria']) ? trim($input['categoria']) : null;
$activo = isset($input['activa']) ? (int)$input['activa'] : 0;

try {
    $stmt = $conn->prepare("
        INSERT INTO alertas_usuario (id, usuario_id, categoria_id, nombre_clave, activo)
        VALUES (UUID(), :usuario_id, :categoria_id, :nombre_clave, :activo)
    ");
    $stmt->bindParam(':usuario_id', $usuario_id);
    $stmt->bindParam(':categoria_id', $categoria_id);
    $stmt->bindParam(':nombre_clave', $nombre_clave);
    $stmt->bindParam(':activo', $activo, PDO::PARAM_BOOL);

    $stmt->execute();

    echo json_encode(['success' => true, 'mensaje' => 'Alerta creada correctamente']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en la base de datos: ' . $e->getMessage()]);
}