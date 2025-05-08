<?php
header('Content-Type: application/json');

require_once 'conexion.php';


$sql = "SELECT 
            p.id,
            p.nombre,
            p.descripcion,
            p.imagen_url,
            p.fecha_produccion,
            p.unidad_medida,
            p.precio_actual,
            u.nombre AS nombre_usuario,
            c.nombre AS nombre_categoria,
            p.valoracion_media,
            p.vendido
        FROM productos p
        LEFT JOIN usuarios u ON p.usuario_id = u.id
        LEFT JOIN categorias c ON p.categoria_id = c.id;";

$stmt = $conn->prepare($sql);
$stmt->execute();

$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($productos);