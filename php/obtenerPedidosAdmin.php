<?php
header('Content-Type: application/json');

require_once 'conexion.php';

$sql = "SELECT 
            ep.id,
            ep.estado,
            ep.fecha_estado AS fecha_pedido,
            ep.notas,
            u.nombre AS usuario_nombre
        FROM estado_pedido ep
        LEFT JOIN compras c ON ep.compra_id = c.id
        LEFT JOIN usuarios u ON c.usuario_comprador_id = u.id";

$stmt = $conn->prepare($sql);
$stmt->execute();

$pedidos = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($pedidos);