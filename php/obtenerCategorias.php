<?php
header('Content-Type: application/json');

require_once 'conexion.php';

try {
    $sql = "SELECT nombre FROM categorias ORDER BY nombre ASC";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    
    $categoriasRaw = $stmt->fetchAll(PDO::FETCH_COLUMN);

    // Capitalizar nombres
    $categorias = array_map(function ($nombre) {
        return ucfirst(mb_strtolower($nombre, 'UTF-8'));
    }, $categoriasRaw);

    echo json_encode($categorias);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al obtener categorías', 'detalles' => $e->getMessage()]);
}