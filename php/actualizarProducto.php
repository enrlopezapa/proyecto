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

// Validar campos requeridos
$campos = ['id', 'nombre', 'descripcion', 'fecha_produccion', 'unidad_medida', 'precio_actual'];
foreach ($campos as $campo) {
    if (!isset($_POST[$campo])) {
        http_response_code(400);
        echo json_encode(['error' => "Falta el campo requerido: $campo"]);
        exit;
    }
}

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$fecha_produccion = $_POST['fecha_produccion'];
$unidad_medida = $_POST['unidad_medida'];
$precio_actual = $_POST['precio_actual'];
$imagen_url = null;

// Si hay imagen nueva, procesarla
if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
    $fileTmpPath = $_FILES['imagen']['tmp_name'];
    $fileName = basename($_FILES['imagen']['name']);
    $fileSize = $_FILES['imagen']['size'];
    $fileType = mime_content_type($fileTmpPath);

    // Validación básica
    if (strpos($fileType, 'image/') !== 0 || $fileSize > 5 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode(['error' => 'Archivo no válido (debe ser una imagen menor de 5MB).']);
        exit;
    }

    $extension = pathinfo($fileName, PATHINFO_EXTENSION);
    $nuevoNombre = uniqid('img_', true) . '.' . $extension;
    $destino = __DIR__ . '/../img/' . $nuevoNombre;

    if (!move_uploaded_file($fileTmpPath, $destino)) {
        http_response_code(500);
        echo json_encode(['error' => 'Error al guardar la imagen.']);
        exit;
    }

    $imagen_url = '../img/' . $nuevoNombre;
} else {
    // Si no se subió una nueva imagen, mantener la actual
    $stmt = $conn->prepare("SELECT imagen_url FROM productos WHERE id = :id");
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $producto = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$producto) {
        http_response_code(404);
        echo json_encode(['error' => 'Producto no encontrado o no autorizado.']);
        exit;
    }

    $imagen_url = $producto['imagen_url'];
}

// Actualizar en la base de datos
$sql = "UPDATE productos SET
            nombre = :nombre,
            descripcion = :descripcion,
            imagen_url = :imagen_url,
            fecha_produccion = :fecha_produccion,
            unidad_medida = :unidad_medida,
            precio_actual = :precio_actual
        WHERE id = :id";

$stmt = $conn->prepare($sql);

$stmt->bindParam(':nombre', $nombre);
$stmt->bindParam(':descripcion', $descripcion);
$stmt->bindParam(':imagen_url', $imagen_url);
$stmt->bindParam(':fecha_produccion', $fecha_produccion);
$stmt->bindParam(':unidad_medida', $unidad_medida);
$stmt->bindParam(':precio_actual', $precio_actual);
$stmt->bindParam(':id', $id);

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