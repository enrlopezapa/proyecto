<?php
require 'conexion.php'; // archivo que debe crear $conn (PDO)

session_start();

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(["error" => "Usuario no autenticado"]);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];

try {
    $sql = "SELECT 
                p.id,
                p.nombre,
                p.descripcion,
                p.imagen_url,
                p.fecha_produccion,
                p.unidad_medida,
                p.precio_actual,
                p.valoracion_media,
                p.vendido,
                c.nombre AS categoria_nombre
            FROM productos p
            LEFT JOIN categorias c ON p.categoria_id = c.id
            WHERE p.usuario_id = :usuario_id";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':usuario_id', $usuario_id);
    $stmt->execute();

    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($productos);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error en la base de datos", "mensaje" => $e->getMessage()]);
}