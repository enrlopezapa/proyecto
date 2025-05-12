<?php
session_start();
$usuario_id_session = $_SESSION['usuario_id'];
session_write_close();
session_name($usuario_id_session);
session_start();
header('Content-Type: application/json');

require '../model/conexion.php';

// Obtener el ID desde la URL (GET)
$producto_id = $_GET['id'] ?? '';

// Validar que se proporcione un ID
if (empty($producto_id)) {
    http_response_code(400);
    echo json_encode(['error' => 'ID del producto requerido.']);
    exit;
}

try {
    // Obtener datos del producto
    $sql = "
        SELECT 
            p.id AS producto_id,
            p.nombre,
            p.descripcion,
            p.imagen_url,
            p.precio_actual,
            p.valoracion_media,
            u.nombre AS vendedor,
            (
                SELECT precio
                FROM precios_producto
                WHERE producto_id = p.id
                  AND precio <> p.precio_actual
                ORDER BY fecha_inicio DESC
                LIMIT 1
            ) AS precio_original
        FROM productos p
        INNER JOIN usuarios u ON p.usuario_id = u.id
        WHERE p.id = :producto_id
    ";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':producto_id', $producto_id);
    $stmt->execute();

    $producto = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$producto) {
        http_response_code(404);
        echo json_encode(['error' => 'Producto no encontrado.']);
        exit;
    }

    // Historial de precios
    $sql_historial = "
        SELECT precio, fecha_inicio
        FROM precios_producto
        WHERE producto_id = :producto_id
        ORDER BY fecha_inicio DESC
    ";

    $stmt_historial = $conn->prepare($sql_historial);
    $stmt_historial->bindParam(':producto_id', $producto_id);
    $stmt_historial->execute();

    $historial = $stmt_historial->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'producto' => $producto,
        'historial' => $historial
    ], JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en la base de datos: ' . $e->getMessage()]);
}