<?php
header('Content-Type: application/json');

require '../model/conexion.php';

$sql = "SELECT 
            c.id,
            c.fecha_compra,
            c.nombre_pagador,
            c.direccion_entrega,
            c.destinatario,
            u.nombre AS usuario_nombre
        FROM compras c
        LEFT JOIN usuarios u ON c.usuario_comprador_id = u.id";

$stmt = $conn->prepare($sql);
$stmt->execute();

$compras = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($compras);