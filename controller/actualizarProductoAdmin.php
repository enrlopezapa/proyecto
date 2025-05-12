<?php
require '../model/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibir datos del formulario
    $productoId = $_POST['id'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $fecha_produccion = $_POST['fecha_produccion'];
    $unidad_medida = $_POST['unidad_medida'];
    $precio = $_POST['precio_actual'];
    $vendido = $_POST['vendido'];
    $imagenActual = $_POST['imagen_url'] ?? '';

    $rutaImagen = $imagenActual;

    // Si hay un archivo de imagen subido
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
        $archivoTmp = $_FILES['imagen']['tmp_name'];
        $nombreArchivo = uniqid('img_') . '_' . basename($_FILES['imagen']['name']);
        $rutaDestino = '../view/img/' . $nombreArchivo;

        $tipoArchivo = mime_content_type($archivoTmp);
        if (strpos($tipoArchivo, 'image/') !== 0) {
            http_response_code(400);
            echo json_encode(["status" => "error", "mensaje" => "El archivo no es una imagen válida."]);
            exit;
        }

        if (!move_uploaded_file($archivoTmp, $rutaDestino)) {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "Error al guardar la imagen."]);
            exit;
        }

        // Eliminar la imagen anterior si existe
        if (!empty($imagenActual) && file_exists('..view/img/' . $imagenActual)) {
            unlink('../view/img/' . $imagenActual);
        }

        // Guardamos solo la ruta relativa
        $rutaImagen = 'img/' . $nombreArchivo;
    }

    try {
        $sql = "UPDATE productos 
                SET nombre = :nombre, 
                    descripcion = :descripcion, 
                    fecha_produccion = :fecha_produccion, 
                    unidad_medida = :unidad_medida, 
                    precio_actual = :precio, 
                    vendido = :vendido,
                    imagen_url = :imagen_url
                WHERE id = :id";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':fecha_produccion', $fecha_produccion);
        $stmt->bindParam(':unidad_medida', $unidad_medida);
        $stmt->bindParam(':precio', $precio);
        $stmt->bindParam(':vendido', $vendido);
        $stmt->bindParam(':imagen_url', $rutaImagen);
        $stmt->bindParam(':id', $productoId);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok", "imagen_url" => $rutaImagen]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "Error al ejecutar la consulta."]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => $e->getMessage()]);
    }
}