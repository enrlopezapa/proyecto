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

// Obtener estados de pedidos relacionados con compras del usuario
$sql = "SELECT 
            ep.id,
            ep.compra_id,
            ep.estado,
            ep.fecha_estado,
            ep.notas
        FROM estado_pedido ep
        JOIN compras c ON ep.compra_id = c.id
        WHERE c.usuario_comprador_id = :id
        ORDER BY ep.fecha_estado DESC";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $usuario_id, PDO::PARAM_STR);
$stmt->execute();

$estados = $stmt->fetchAll();

echo json_encode($estados);