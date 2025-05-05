<?php
header('Content-Type: application/json');
require_once 'conexion.php';

// Inicializamos variables
$categoria = '';
$busqueda = '';

// Leer y eliminar cookie de categoría si existe
if (isset($_COOKIE['categoria']) && !empty($_COOKIE['categoria'])) {
    $categoria = strtolower(trim($_COOKIE['categoria']));
    setcookie('categoria', '', time() - 3600, "/"); // Eliminar cookie
}

// Leer y eliminar cookie de búsqueda si existe
if (isset($_COOKIE['busqueda']) && !empty($_COOKIE['busqueda'])) {
    $busqueda = trim($_COOKIE['busqueda']);
    setcookie('busqueda', '', time() - 3600, "/"); // Eliminar cookie
}

try {
    if (!empty($busqueda)) {
        // Buscar productos por nombre que coincidan con la búsqueda
        $sql = "SELECT 
                    p.id,
                    p.nombre,
                    p.descripcion,
                    p.imagen_url,
                    p.precio_actual,
                    p.valoracion_media,
                    pp.precio AS old_price
                FROM productos p
                LEFT JOIN precios_producto pp ON p.id = pp.producto_id 
                    AND pp.fecha_inicio = (
                        SELECT MAX(fecha_inicio)
                        FROM precios_producto
                        WHERE producto_id = p.id
                        AND precio <> p.precio_actual
                    )
                WHERE p.vendido = 0
                  AND p.nombre LIKE :busqueda
                ORDER BY p.fecha_produccion DESC";
        $stmt = $conn->prepare($sql);
        $likeBusqueda = '%' . $busqueda . '%';
        $stmt->bindParam(':busqueda', $likeBusqueda);

    } elseif (in_array($categoria, ['fruta', 'verdura', 'hortaliza', 'otros'])) {
        // Productos por categoría
        $sql = "SELECT 
                    p.id,
                    p.nombre,
                    p.descripcion,
                    p.imagen_url,
                    p.precio_actual,
                    p.valoracion_media,
                    pp.precio AS old_price
                FROM productos p
                LEFT JOIN precios_producto pp ON p.id = pp.producto_id 
                    AND pp.fecha_inicio = (
                        SELECT MAX(fecha_inicio)
                        FROM precios_producto
                        WHERE producto_id = p.id
                        AND precio <> p.precio_actual
                    )
                INNER JOIN categorias c ON p.categoria_id = c.id
                WHERE LOWER(c.nombre) = :categoria
                  AND p.vendido = 0
                ORDER BY p.fecha_produccion DESC";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':categoria', $categoria);

    } else {
        // Productos por defecto (sin filtros)
        $sql = "SELECT 
                    p.id,
                    p.nombre,
                    p.descripcion,
                    p.imagen_url,
                    p.precio_actual,
                    p.valoracion_media,
                    pp.precio AS old_price
                FROM productos p
                LEFT JOIN precios_producto pp ON p.id = pp.producto_id 
                    AND pp.fecha_inicio = (
                        SELECT MAX(fecha_inicio)
                        FROM precios_producto
                        WHERE producto_id = p.id
                        AND precio <> p.precio_actual
                    )
                WHERE p.vendido = 0
                ORDER BY p.fecha_produccion DESC";
        $stmt = $conn->prepare($sql);
    }

    $stmt->execute();
    $productosRaw = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Formateo de productos
    $productos = array_map(function ($producto) {
        $oldPrice = isset($producto['old_price']) && $producto['old_price'] != $producto['precio_actual']
            ? $producto['old_price'] : null;

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