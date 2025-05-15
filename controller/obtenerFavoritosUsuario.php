<?php
session_start();
header('Content-Type: application/json');

// Validar sesión
if (!isset($_SESSION["usuario_id"])) {
    http_response_code(401);
    echo json_encode(["error" => "Usuario no autenticado"]);
    exit;
}

require '../model/conexion.php';

$usuario_id = $_SESSION["usuario_id"];

// Consulta para obtener los productos favoritos del usuario
$sql = "
    SELECT 
        p.id, 
        p.nombre AS alt, 
        p.imagen_url AS imgSrc, 
        p.precio_actual AS currentPrice,
        (
            SELECT pp.precio 
            FROM precios_producto pp 
            WHERE pp.producto_id = p.id 
            ORDER BY pp.fecha_inicio DESC 
            LIMIT 1
        ) AS oldPrice,
        p.valoracion_media AS estrellas
    FROM productos p
    INNER JOIN favoritos_producto f ON f.producto_id = p.id
    WHERE f.usuario_id = ?
    ORDER BY f.fecha_agregado DESC
";

try {
    $stmt = $conn->prepare($sql);
    $stmt->execute([$usuario_id]);
    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($productos);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en la base de datos: ' . $e->getMessage()]);
}