<?php
header('Content-Type: application/json');

require '../model/conexion.php';

$sql = "SELECT 
            a.id,
            u.nombre AS usuario_nombre,
            c.nombre AS categoria_nombre,
            a.nombre_clave,
            a.fecha_creacion,
            a.activo
        FROM alertas_usuario a
        LEFT JOIN usuarios u ON a.usuario_id = u.id
        LEFT JOIN categorias c ON a.categoria_id = c.id";

$stmt = $conn->prepare($sql);
$stmt->execute();

$alertas = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($alertas);