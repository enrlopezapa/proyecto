<?php
header('Content-Type: application/json');

require_once 'conexion.php';

try {
    // Generar UUID manualmente
    $usuarioId = bin2hex(random_bytes(16)); // 32 caracteres hex = 128 bits

    // Datos del usuario administrador
    $nombre = 'Admin';
    $email = 'admin@dominio.com';
    $telefono = '123456789';
    $direccion = 'Calle Ficticia 123';
    $administrador = true;
    $contrasena = 'admin123';

    // Insertar en la tabla usuarios
    $sqlUsuarios = "INSERT INTO usuarios (id, nombre, email, telefono, direccion, administrador) 
                    VALUES (:id, :nombre, :email, :telefono, :direccion, :administrador)";
    $stmtUsuarios = $conn->prepare($sqlUsuarios);
    $stmtUsuarios->bindParam(':id', $usuarioId);
    $stmtUsuarios->bindParam(':nombre', $nombre);
    $stmtUsuarios->bindParam(':email', $email);
    $stmtUsuarios->bindParam(':telefono', $telefono);
    $stmtUsuarios->bindParam(':direccion', $direccion);
    $stmtUsuarios->bindParam(':administrador', $administrador, PDO::PARAM_BOOL);
    $stmtUsuarios->execute();

    // Encriptar la contraseña
    $hashedPassword = password_hash($contrasena, PASSWORD_BCRYPT);

    // Insertar en la tabla seguridad_usuarios
    $sqlSeguridad = "INSERT INTO seguridad_usuarios (usuario_id, contrasena) 
                     VALUES (:usuario_id, :contrasena)";
    $stmtSeguridad = $conn->prepare($sqlSeguridad);
    $stmtSeguridad->bindParam(':usuario_id', $usuarioId);
    $stmtSeguridad->bindParam(':contrasena', $hashedPassword);
    $stmtSeguridad->execute();

    echo json_encode(['success' => 'Usuario admin creado exitosamente']);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al crear usuario admin', 'detalles' => $e->getMessage()]);
}