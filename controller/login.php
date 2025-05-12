<?php
header('Content-Type: application/json');

require '../model/conexion.php';

// Asegura que los datos se envían por POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Obtener y validar datos
$input = json_decode(file_get_contents('php://input'), true);
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

if (!$email || !$password) {
    http_response_code(400);
    echo json_encode(['error' => 'Correo y contraseña requeridos']);
    exit;
}

// Buscar al usuario y su contraseña
$sql = "SELECT u.id, u.nombre, u.email, s.contrasena, u.administrador 
        FROM usuarios u
        JOIN seguridad_usuarios s ON u.id = s.usuario_id
        WHERE u.email = :email";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->execute();

$usuario = $stmt->fetch(PDO::FETCH_ASSOC);

if ($usuario && password_verify($password, $usuario['contrasena'])) {
    session_start();
    $_SESSION['usuario_id'] = $usuario['id'];
    session_write_close();
    session_name($usuario['id']);
    session_start();
    $_SESSION['usuario_id'] = $usuario['id'];
    $_SESSION['usuario_nombre'] = $usuario['nombre'];
    $_SESSION['usuario_email'] = $usuario['email'];
    $_SESSION['usuario_admin'] = $usuario['administrador'];

    echo json_encode(['success' => true, 'message' => 'Inicio de sesión exitoso']);
    exit;
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Correo o contraseña incorrectos']);
    exit;
}
