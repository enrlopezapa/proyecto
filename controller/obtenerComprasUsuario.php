<?php
session_start();

header('Content-Type: application/json');

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

require '../model/conexion.php';

$usuario_id = $_SESSION['usuario_id'];

// Obtener compras
$sql = "SELECT 
            id,
            fecha_compra,
            nombre_pagador,
            direccion_entrega,
            destinatario
        FROM compras
        WHERE usuario_comprador_id = :id
        ORDER BY fecha_compra DESC";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $usuario_id, PDO::PARAM_STR);
$stmt->execute();

$compras = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Agregar productos a cada compra
foreach ($compras as &$compra) {
    $sqlDetalle = "
        SELECT 
            dc.cantidad,
            dc.precio_unitario,
            dc.subtotal,
            p.nombre AS nombre_producto,
            p.imagen_url
        FROM detalle_compra dc
        LEFT JOIN productos p ON dc.producto_id = p.id
        WHERE dc.compra_id = :compra_id
    ";

    $stmtDetalle = $conn->prepare($sqlDetalle);
    $stmtDetalle->bindParam(':compra_id', $compra['id'], PDO::PARAM_STR);
    $stmtDetalle->execute();
    $productos = $stmtDetalle->fetchAll(PDO::FETCH_ASSOC);

    $compra['productos'] = $productos;
}

echo json_encode($compras);