<?php
function generarUUIDv4() {
    return sprintf(
        '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand(0, 0xffff), mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0x0fff) | 0x4000, // versión 4
        mt_rand(0, 0x3fff) | 0x8000, // variante
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
    );
}

header('Content-Type: application/json');
require_once 'conexion.php';

$input = json_decode(file_get_contents('php://input'), true);
$nombre = trim($input['nombre'] ?? '');
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

if (!$nombre || !$email || !$password) {
    http_response_code(400);
    echo json_encode(['error' => 'Todos los campos son obligatorios']);
    exit;
}

// Verificar si el usuario ya existe
$sql = "SELECT id FROM usuarios WHERE email = :email";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':email', $email);
$stmt->execute();

if ($stmt->fetch()) {
    http_response_code(409);
    echo json_encode(['error' => 'El correo ya está registrado']);
    exit;
}

// Crear nuevo usuario
$usuario_id = generarUUIDv4();
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$codigo_verificacion = strval(rand(100000, 999999)); // Código de 6 dígitos

try {
    $conn->beginTransaction();

    $stmt1 = $conn->prepare("INSERT INTO usuarios (id, nombre, email) VALUES (:id, :nombre, :email)");
    $stmt1->execute([
        ':id' => $usuario_id,
        ':nombre' => $nombre,
        ':email' => $email
    ]);

    $stmt2 = $conn->prepare("INSERT INTO seguridad_usuarios (usuario_id, contrasena, codigo_verificacion, fecha_envio_codigo) 
                             VALUES (:usuario_id, :contrasena, :codigo, NOW())");
    $stmt2->execute([
        ':usuario_id' => $usuario_id,
        ':contrasena' => $hashed_password,
        ':codigo' => $codigo_verificacion
    ]);

    $conn->commit();

    // Enviar correo
    $to = $email;
    $subject = "Verificación de cuenta";
    $message = "Hola $nombre,\n\nTu código de verificación es: $codigo_verificacion\n\nValida tu cuenta aquí:\nhttps://localhost/proyecto/html/validar.html";
    $headers = "From: no-reply@proyecto.com";

    mail($to, $subject, $message, $headers);

    echo json_encode(['message' => 'Registro exitoso. Revisa tu correo para validar tu cuenta.']);

} catch (Exception $e) {
    $conn->rollBack();
    http_response_code(500);
    echo json_encode(['error' => 'Error al registrar usuario']);
}
