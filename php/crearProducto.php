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
$datos = json_decode(file_get_contents('php://input'), true);

// Validar campos obligatorios
$campos_obligatorios = ['nombre', 'descripcion', 'imagen_url', 'fecha_produccion', 'unidad_medida', 'precio_actual', 'categoria_id'];
foreach ($campos_obligatorios as $campo) {
    if (!isset($datos[$campo])) {
        http_response_code(400);
        echo json_encode(['error' => "Falta el campo requerido: $campo"]);
        exit;
    }
}

$sql = "INSERT INTO productos (
            id,
            nombre,
            descripcion,
            imagen_url,
            fecha_produccion,
            unidad_medida,
            precio_actual,
            usuario_id,
            categoria_id
        ) VALUES (
            UUID(),
            :nombre,
            :descripcion,
            :imagen_url,
            :fecha_produccion,
            :unidad_medida,
            :precio_actual,
            :usuario_id,
            :categoria_id
        )";

try {
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nombre', $datos['nombre']);
    $stmt->bindParam(':descripcion', $datos['descripcion']);
    $stmt->bindParam(':imagen_url', $datos['imagen_url']);
    $stmt->bindParam(':fecha_produccion', $datos['fecha_produccion']);
    $stmt->bindParam(':unidad_medida', $datos['unidad_medida']);
    $stmt->bindParam(':precio_actual', $datos['precio_actual']);
    $stmt->bindParam(':usuario_id', $usuario_id);
    $stmt->bindParam(':categoria_id', $datos['categoria_id']);
    
    $stmt->execute();

    echo json_encode(['mensaje' => 'Producto creado correctamente.']);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al crear el producto: ' . $e->getMessage()]);
}