<?php
// Incluir la conexión PDO
include 'conexion.php';

// Iniciar sesión si no está iniciada
session_start();

// Verificar si existe el ID de usuario en la sesión
if (!isset($_SESSION['usuario_id'])) {
    echo json_encode(["error" => "Usuario no autenticado"]);
    exit();
}

$usuario_id = $_SESSION['usuario_id'];

try {
    // Preparar la consulta SQL con PDO para obtener nombre y dirección
    $sql = "SELECT nombre, direccion FROM usuarios WHERE id = :id LIMIT 1";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $usuario_id, PDO::PARAM_STR);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // Usuario encontrado, devolver datos como JSON
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($usuario);
    } else {
        // Usuario no encontrado
        echo json_encode(["error" => "Usuario no encontrado"]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => "Error de base de datos: " . $e->getMessage()]);
}