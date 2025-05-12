<?php
header('Content-Type: application/json');

require '../model/conexion.php';

$categoria = isset($_GET['categoria']) ? strtolower(trim($_GET['categoria'])) : '';

try {
    if ($categoria === 'fruta' || $categoria === 'verdura') {
        // Productos por categoría (fruta o verdura)
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
                WHERE LOWER(c.nombre) = :categoria
                  AND p.vendido = 0
                ORDER BY p.fecha_produccion DESC
                LIMIT 16";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':categoria', $categoria);

    } else {
        // Los primeros 16 productos para el carrusel principal
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
                WHERE p.vendido = 0
                ORDER BY p.fecha_produccion DESC
                LIMIT 16";
        $stmt = $conn->prepare($sql);
    }

    $stmt->execute();
    $productosRaw = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Formateo de productos
    $productos = array_map(function ($producto) {
        // Si existe un precio anterior, lo formateamos como oldPrice, sino lo dejamos vacío
        $oldPrice = isset($producto['old_price']) && $producto['old_price'] != $producto['precio_actual'] ? $producto['old_price'] : null;

        return [
            'id' => $producto['id'],
            'imgSrc' => $producto['imagen_url'],
            'alt' => $producto['nombre'],
            'oldPrice' => $oldPrice ? "$" . number_format($oldPrice, 2) : null,
            'currentPrice' => "$" . number_format($producto['precio_actual'], 2),
            'description' => ucfirst(mb_strtolower($producto['descripcion'], 'UTF-8')),
            'rating' => round($producto['valoracion_media'])
        ];
    }, $productosRaw);

    echo json_encode($productos);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error al obtener productos',
        'detalles' => $e->getMessage()
    ]);
}