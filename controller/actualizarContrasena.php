<?php
session_start();
header('Content-Type: application/json');

require '../model/conexion.php';

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'mensaje' => 'No autenticado']);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];
$contrasena_actual = $_POST['contrasena_actual'] ?? '';
$contrasena_nueva = $_POST['contrasena_nueva'] ?? '';

if (empty($contrasena_actual) || empty($contrasena_nueva)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'mensaje' => 'Faltan campos requeridos']);
    exit;
}

try {
    $stmt = $conn->prepare("SELECT contrasena FROM seguridad_usuarios WHERE usuario_id = :usuario_id");
    $stmt->bindParam(':usuario_id', $usuario_id);
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$usuario || !password_verify($contrasena_actual, $usuario['contrasena'])) {
        http_response_code(403);
        echo json_encode(['status' => 'error', 'mensaje' => 'Contraseña actual incorrecta']);
        exit;
    }

    $hash = password_hash($contrasena_nueva, PASSWORD_DEFAULT);
    $update = $conn->prepare("UPDATE seguridad_usuarios SET contrasena = :nueva, fecha_ultimo_cambio_contrasena = NOW() WHERE usuario_id = :usuario_id");
    $update->bindParam(':nueva', $hash);
    $update->bindParam(':usuario_id', $usuario_id);

    if ($update->execute()) {
        echo json_encode(['status' => 'ok']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'mensaje' => 'No se pudo actualizar la contraseña']);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'mensaje' => 'Error de base de datos', 'detalle' => $e->getMessage()]);
}