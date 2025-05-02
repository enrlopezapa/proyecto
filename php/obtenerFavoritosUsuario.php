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
            p.id,
            p.nombre,
            p.descripcion,
            p.imagen_url,
            p.numero_lote,
            p.fecha_produccion,
            p.fecha_caducidad,
            p.unidad_medida,
            p.cantidad_disponible,
            f.fecha_agregado
        FROM favoritos_producto f
        JOIN productos p ON f.producto_id = p.id
        WHERE f.usuario_id = :id";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $usuario_id, PDO::PARAM_STR);
$stmt->execute();

$favoritos = $stmt->fetchAll();

echo json_encode($favoritos);