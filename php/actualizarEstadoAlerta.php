<?php
require 'conexion.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? null;
    $activo = $_POST['activo'] ?? null;

    if ($id && ($activo === '0' || $activo === '1')) {
        try {
            // Convertir a entero para seguridad adicional
            $activoInt = (int)$activo;

            $stmt = $conn->prepare("UPDATE alertas_usuario SET activo = :activo WHERE id = :id");
            $stmt->bindParam(':activo', $activoInt, PDO::PARAM_INT);
            $stmt->bindParam(':id', $id, PDO::PARAM_STR);

            if ($stmt->execute()) {
                echo json_encode(['success' => true]);
            } else {
                http_response_code(500);
                echo json_encode(['error' => 'Error al ejecutar la consulta.']);
            }
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Error de base de datos: ' . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Datos inválidos.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Solo se permite el método POST.']);
}