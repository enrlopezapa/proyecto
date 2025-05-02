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

// Validar que se haya enviado el ID del producto
if (!isset($datos['id'])) {
    http_response_code(400);
    echo json_encode(['error' => 'ID del producto requerido.']);
    exit;
}

// Solo permitir actualizar productos que pertenecen al usuario autenticado
$sql = "UPDATE productos SET
            nombre = :nombre,
            descripcion = :descripcion,
            imagen_url = :imagen_url,
            numero_lote = :numero_lote,
            fecha_produccion = :fecha_produccion,
            fecha_caducidad = :fecha_caducidad,
            unidad_medida = :unidad_medida,
            cantidad_disponible = :cantidad_disponible,
            precio_actual = :precio_actual,
            categoria_id = :categoria_id
        WHERE id = :id AND usuario_id = :usuario_id";

$stmt = $conn->prepare($sql);

$stmt->bindParam(':nombre', $datos['nombre']);
$stmt->bindParam(':descripcion', $datos['descripcion']);
$stmt->bindParam(':imagen_url', $datos['imagen_url']);
$stmt->bindParam(':numero_lote', $datos['numero_lote']);
$stmt->bindParam(':fecha_produccion', $datos['fecha_produccion']);
$stmt->bindParam(':fecha_caducidad', $datos['fecha_caducidad']);
$stmt->bindParam(':unidad_medida', $datos['unidad_medida']);
$stmt->bindParam(':cantidad_disponible', $datos['cantidad_disponible']);
$stmt->bindParam(':precio_actual', $datos['precio_actual']);
$stmt->bindParam(':categoria_id', $datos['categoria_id']);
$stmt->bindParam(':id', $datos['id']);
$stmt->bindParam(':usuario_id', $usuario_id);

try {
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        echo json_encode(['mensaje' => 'Producto actualizado correctamente.']);
    } else {
        echo json_encode(['mensaje' => 'No se actualizó ningún producto. Verifica el ID o permisos.']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al actualizar: ' . $e->getMessage()]);
}