<?php
require 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? null;
    $nombre_clave = $_POST['nombre_clave'] ?? null;
    $categoria_id = $_POST['categoria_id'] ?? null;
    $activo = $_POST['activo'] ?? null;

    if ($id && $nombre_clave && $categoria_id && ($activo === '0' || $activo === '1')) {
        try {
            $stmt = $conn->prepare("UPDATE alertas_usuario SET nombre_clave = :nombre_clave, categoria_id = :categoria_id, activo = :activo WHERE id = :id");
            $stmt->execute([
                ':nombre_clave' => $nombre_clave,
                ':categoria_id' => $categoria_id,
                ':activo' => (int)$activo,
                ':id' => $id
            ]);

            echo json_encode(['success' => true]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Error al actualizar la alerta: ' . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Datos incompletos o inválidos.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
}