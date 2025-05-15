<?php
header('Content-Type: application/json');

require_once 'conexion.php';

try {
    $usuarios = [
        ['nombre' => 'Juan Pérez', 'email' => 'juan@example.com', 'telefono' => '111111111', 'direccion' => 'Calle Uno 123', 'contrasena' => 'clave123'],
        ['nombre' => 'Ana Gómez', 'email' => 'ana@example.com', 'telefono' => '222222222', 'direccion' => 'Calle Dos 456', 'contrasena' => 'clave456'],
        ['nombre' => 'Carlos Ruiz', 'email' => 'carlos@example.com', 'telefono' => '333333333', 'direccion' => 'Calle Tres 789', 'contrasena' => 'clave789'],
        ['nombre' => 'María López', 'email' => 'maria@example.com', 'telefono' => '444444444', 'direccion' => 'Calle Cuatro 101', 'contrasena' => 'maria123'],
        ['nombre' => 'Pedro Martínez', 'email' => 'pedro@example.com', 'telefono' => '555555555', 'direccion' => 'Avenida 5', 'contrasena' => 'pedro456'],
        ['nombre' => 'Lucía Torres', 'email' => 'lucia@example.com', 'telefono' => '666666666', 'direccion' => 'Calle Seis 202', 'contrasena' => 'lucia789'],
        ['nombre' => 'José Ramírez', 'email' => 'jose@example.com', 'telefono' => '777777777', 'direccion' => 'Plaza Central 303', 'contrasena' => 'jose000'],
        ['nombre' => 'Sandra Díaz', 'email' => 'sandra@example.com', 'telefono' => '888888888', 'direccion' => 'Calle Ocho 404', 'contrasena' => 'sandra456'],
        ['nombre' => 'Manuel García', 'email' => 'manuel@example.com', 'telefono' => '999999999', 'direccion' => 'Zona Norte 505', 'contrasena' => 'manuel789'],
        ['nombre' => 'Laura Fernández', 'email' => 'laura@example.com', 'telefono' => '101010101', 'direccion' => 'Av. Sol 606', 'contrasena' => 'laura321'],
        ['nombre' => 'Diego Herrera', 'email' => 'diego@example.com', 'telefono' => '111222333', 'direccion' => 'Calle Nube 707', 'contrasena' => 'diego987'],
        ['nombre' => 'Carolina Varela', 'email' => 'carolina@example.com', 'telefono' => '444555666', 'direccion' => 'Calle 9 de Julio', 'contrasena' => 'caro123'],
        ['nombre' => 'Alberto Soto', 'email' => 'alberto@example.com', 'telefono' => '777888999', 'direccion' => 'Pasaje Luna 808', 'contrasena' => 'alberto456'],
        ['nombre' => 'Elena Morales', 'email' => 'elena@example.com', 'telefono' => '222333444', 'direccion' => 'Boulevard Central', 'contrasena' => 'elena789'],
        ['nombre' => 'Ricardo Núñez', 'email' => 'ricardo@example.com', 'telefono' => '555666777', 'direccion' => 'Ruta 66', 'contrasena' => 'ricardo000'],
        ['nombre' => 'Natalia Castro', 'email' => 'natalia@example.com', 'telefono' => '999888777', 'direccion' => 'Av. Siempre Viva 123', 'contrasena' => 'nata123'],
        ['nombre' => 'Miguel Vega', 'email' => 'miguel@example.com', 'telefono' => '123456789', 'direccion' => 'Av. Las Palmas', 'contrasena' => 'miguel456'],
        ['nombre' => 'Verónica Salas', 'email' => 'veronica@example.com', 'telefono' => '321654987', 'direccion' => 'Calle Sur 111', 'contrasena' => 'vero789'],
        ['nombre' => 'Sergio Bravo', 'email' => 'sergio@example.com', 'telefono' => '888777666', 'direccion' => 'Pje. del Sol', 'contrasena' => 'sergio000'],
        ['nombre' => 'Paula Medina', 'email' => 'paula@example.com', 'telefono' => '741852963', 'direccion' => 'Pje. Norte 202', 'contrasena' => 'paula123']
    ];

    foreach ($usuarios as $usuario) {
        // Generar UUID
        $usuarioId = bin2hex(random_bytes(16));

        // Insertar en la tabla usuarios
        $sqlUsuarios = "INSERT INTO usuarios (id, nombre, email, telefono, direccion, administrador) 
                        VALUES (:id, :nombre, :email, :telefono, :direccion, :administrador)";
        $stmtUsuarios = $conn->prepare($sqlUsuarios);
        $administrador = false;
        $stmtUsuarios->bindParam(':id', $usuarioId);
        $stmtUsuarios->bindParam(':nombre', $usuario['nombre']);
        $stmtUsuarios->bindParam(':email', $usuario['email']);
        $stmtUsuarios->bindParam(':telefono', $usuario['telefono']);
        $stmtUsuarios->bindParam(':direccion', $usuario['direccion']);
        $stmtUsuarios->bindParam(':administrador', $administrador, PDO::PARAM_BOOL);
        $stmtUsuarios->execute();

        // Encriptar contraseña
        $hashedPassword = password_hash($usuario['contrasena'], PASSWORD_BCRYPT);

        // Insertar en la tabla seguridad_usuarios
        $sqlSeguridad = "INSERT INTO seguridad_usuarios (usuario_id, contrasena) 
                         VALUES (:usuario_id, :contrasena)";
        $stmtSeguridad = $conn->prepare($sqlSeguridad);
        $stmtSeguridad->bindParam(':usuario_id', $usuarioId);
        $stmtSeguridad->bindParam(':contrasena', $hashedPassword);
        $stmtSeguridad->execute();
    }

    echo json_encode(['success' => 'Usuarios creados exitosamente']);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al crear usuarios', 'detalles' => $e->getMessage()]);
}