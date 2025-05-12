<?php
session_start();
$usuario_id_session = $_SESSION['usuario_id'];
session_write_close();
session_name($usuario_id_session);
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

require '../model/conexion.php';

$usuario_id = $_SESSION['usuario_id'];

$sql = "SELECT id, nombre, email, telefono, direccion, valoracion_media
        FROM usuarios
        WHERE id = :id";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $usuario_id, PDO::PARAM_STR);
$stmt->execute();

$usuario = $stmt->fetch();

echo json_encode($usuario);