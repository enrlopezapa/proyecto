<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

require_once 'conexion.php';

$usuario_id = $_SESSION['usuario_id'];

$sql = "SELECT 
            id,
            fecha_compra,
            usuario_pagador_id,
            direccion_entrega,
            destinatario
        FROM compras
        WHERE usuario_comprador_id = :id
        ORDER BY fecha_compra DESC";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $usuario_id, PDO::PARAM_STR);
$stmt->execute();

$compras = $stmt->fetchAll();

echo json_encode($compras);