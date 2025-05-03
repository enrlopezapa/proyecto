<?php
header('Content-Type: application/json');
require_once 'conexion.php'; // Asegúrate de tener tu conexión PDO aquí

try {
    $sql = "
        SELECT 
            p.id AS producto_id,
            p.imagen_url,
            p.precio_actual,
            (SELECT pp.precio
             FROM precios_producto pp
             WHERE pp.producto_id = p.id
               AND pp.precio < p.precio_actual
             ORDER BY pp.fecha_inicio DESC
             LIMIT 1) AS precio_anterior,
            u.valoracion_media,
            c.nombre AS categoria
        FROM productos p
        JOIN usuarios u ON p.usuario_id = u.id
        LEFT JOIN categorias c ON p.categoria_id = c.id
    ";

    $stmt = $conn->prepare($sql);
    $stmt->execute();

    // Obtener todos los productos
    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($productos) {
        echo json_encode($productos);
    } else {
        echo json_encode(['mensaje' => 'No se encontraron productos']);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en el servidor: ' . $e->getMessage()]);
}