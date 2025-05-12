<?php
header('Content-Type: application/json');
require '../model/conexion.php';

$input = json_decode(file_get_contents('php://input'), true);
$email = trim($input['email'] ?? '');
$codigo = trim($input['codigo'] ?? '');

if (!$email || !$codigo) {
    http_response_code(400);
    echo json_encode(['error' => 'Correo y código son requeridos']);
    exit;
}

$sql = "SELECT u.id, s.codigo_verificacion 
        FROM usuarios u
        JOIN seguridad_usuarios s ON u.id = s.usuario_id
        WHERE u.email = :email";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':email', $email);
$stmt->execute();

$data = $stmt->fetch(PDO::FETCH_ASSOC);

if ($data && $data['codigo_verificacion'] === $codigo) {
    $update = $conn->prepare("UPDATE seguridad_usuarios SET verificado = 1, codigo_verificacion = NULL WHERE usuario_id = :id");
    $update->bindParam(':id', $data['id']);
    $update->execute();

    echo json_encode(['message' => 'Cuenta verificada correctamente']);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Código incorrecto o cuenta no encontrada']);
}