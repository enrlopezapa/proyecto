<?php
header('Content-Type: application/json');

require_once 'conexion.php';

try {
    // Obtener filtros desde POST
    $categoria = isset($_POST['categoria']) && $_POST['categoria'] !== '' ? strtolower(trim($_POST['categoria'])) : null;
    $precioMax = isset($_POST['precio']) && is_numeric($_POST['precio']) ? floatval($_POST['precio']) : null;
    $calificacionMin = isset($_POST['calificacion']) && is_numeric($_POST['calificacion']) ? floatval($_POST['calificacion']) : 0;
    $ordenar = isset($_POST['ordenar']) ? trim($_POST['ordenar']) : 'fecha';

    // Base del SQL
    $sql = "SELECT 
                p.id,
                p.nombre,
                p.descripcion,
                p.imagen_url,
                p.precio_actual,
                p.valoracion_media,
                pp.precio AS old_price
            FROM productos p
            LEFT JOIN precios_producto pp ON p.id = pp.producto_id AND pp.fecha_inicio = (
                SELECT MAX(fecha_inicio)
                FROM precios_producto
                WHERE producto_id = p.id
                AND precio <> p.precio_actual
            )
            INNER JOIN categorias c ON p.categoria_id = c.id
            WHERE p.vendido = 0";

    $params = [];

    // Filtro por categoría
    if ($categoria) {
        $sql .= " AND LOWER(c.nombre) = :categoria";
        $params[':categoria'] = $categoria;
    }

    // Filtro por precio máximo
    if ($precioMax !== null) {
        $sql .= " AND p.precio_actual <= :precio";
        $params[':precio'] = $precioMax;
    }

    // Filtro por calificación mínima
    if ($calificacionMin > 0) {
        $sql .= " AND p.valoracion_media >= :calificacion";
        $params[':calificacion'] = $calificacionMin;
    }

    // Ordenamiento
    switch ($ordenar) {
        case 'precio_asc':
            $sql .= " ORDER BY p.precio_actual ASC";
            break;
        case 'precio_desc':
            $sql .= " ORDER BY p.precio_actual DESC";
            break;
        case 'valoracion':
            $sql .= " ORDER BY p.valoracion_media DESC";
            break;
        default:
            $sql .= " ORDER BY p.fecha_produccion DESC";
            break;
    }

    // Limitar resultados
    $sql .= " LIMIT 16";

    $stmt = $conn->prepare($sql);

    foreach ($params as $key => $val) {
        $stmt->bindValue($key, $val);
    }

    $stmt->execute();
    $productosRaw = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Formatear productos para el frontend
    $productos = array_map(function ($producto) {
        $oldPrice = isset($producto['old_price']) && $producto['old_price'] != $producto['precio_actual']
            ? "$" . number_format($producto['old_price'], 2)
            : null;

        return [
            'id' => $producto['id'],
            'imgSrc' => $producto['imagen_url'],
            'alt' => $producto['nombre'],
            'oldPrice' => $oldPrice,
            'currentPrice' => "$" . number_format($producto['precio_actual'], 2),
            'description' => ucfirst(mb_strtolower($producto['descripcion'], 'UTF-8')),
            'rating' => round($producto['valoracion_media'])
        ];
    }, $productosRaw);

    echo json_encode($productos);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error al filtrar productos',
        'detalles' => $e->getMessage()
    ]);
}