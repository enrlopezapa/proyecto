<?php
session_start();
header('Content-Type: application/json');

// Verifica si hay favoritos
if (!isset($_SESSION['favoritos']) || empty($_SESSION['favoritos'])) {
    echo json_encode([]);
    exit;
}

// Conexión a la base de datos
require_once 'conexion.php'; // Asegúrate de que este define $pdo

$favoritos = $_SESSION['favoritos'];
$placeholders = implode(',', array_fill(0, count($favoritos), '?'));

// SQL para obtener el precio actual y el último precio del historial
$sql = "
    SELECT 
        p.id, 
        p.nombre AS alt, 
        p.imagen_url AS imgSrc, 
        p.precio_actual AS currentPrice,
        (SELECT pp.precio FROM precios_producto pp WHERE pp.producto_id = p.id ORDER BY pp.fecha_inicio DESC LIMIT 1) AS oldPrice,
        p.valoracion_media AS estrellas
    FROM productos p
    WHERE p.id IN ($placeholders)
";

try {
    $stmt = $conn->prepare($sql);
    $stmt->execute($favoritos);
    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($productos);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}