<?php
session_start();
header('Content-Type: application/json');

require 'conexion.php';

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'mensaje' => 'Usuario no autenticado']);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];

// Validar los datos
$campos = ['nombre', 'email', 'telefono', 'direccion'];
foreach ($campos as $campo) {
    if (!isset($_POST[$campo])) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'mensaje' => "Falta el campo: $campo"]);
        exit;
    }
}

$nombre = trim($_POST['nombre']);
$email = trim($_POST['email']);
$telefono = trim($_POST['telefono']);
$direccion = trim($_POST['direccion']);

try {
    $stmt = $conn->prepare("UPDATE usuarios SET nombre = :nombre, email = :email, telefono = :telefono, direccion = :direccion WHERE id = :id");
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':telefono', $telefono);
    $stmt->bindParam(':direccion', $direccion);
    $stmt->bindParam(':id', $usuario_id);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'ok']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'mensaje' => 'No se pudo actualizar el perfil']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'mensaje' => 'Error en la base de datos', 'detalle' => $e->getMessage()]);
}