<?php
session_start();
header('Content-Type: application/json');

// Verificar autenticación
if (!isset($_COOKIE['producto_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

require_once 'conexion.php'; // Asegúrate de tener la conexión PDO como $conn

// Validar que se envíe el ID del producto
if ($_COOKIE['producto_id']=="") {
    http_response_code(400);
    echo json_encode(['error' => 'ID del producto requerido.']);
    exit;
}

$producto_id = $_COOKIE['producto_id'];

try {
    // Consulta del producto y su usuario
    $sql = "
        SELECT 
            p.id AS producto_id,
            p.nombre AS producto_nombre,
            p.descripcion,
            p.imagen_url,
            p.numero_lote,
            p.fecha_produccion,
            p.fecha_caducidad,
            p.unidad_medida,
            p.cantidad_disponible,
            p.precio_actual,
            u.id AS usuario_id,
            u.nombre AS usuario_nombre,
            u.email,
            u.telefono,
            u.direccion,
            u.valoracion_media
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

    // Consulta del historial de precios
    $sql_historial = "
        SELECT precio, fecha_inicio
        FROM precios_producto
        WHERE producto_id = :producto_id
        ORDER BY fecha_inicio DESC
    ";

    $stmt_historial = $conn->prepare($sql_historial);
    $stmt_historial->bindParam(':producto_id', $producto_id);
    $stmt_historial->execute();

    $historial_precios = $stmt_historial->fetchAll(PDO::FETCH_ASSOC);

    // Construir respuesta
    $respuesta = [
        'producto' => $producto,
        'historial_precios' => $historial_precios
    ];

    echo json_encode($respuesta, JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en la base de datos: ' . $e->getMessage()]);
}