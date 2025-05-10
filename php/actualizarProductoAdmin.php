<?php
require 'conexion.php'; // Asegúrate de que este devuelve un objeto PDO en $conn

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibir datos desde el JS
    $productoId = $_POST['productoId'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $fecha_produccion = $_POST['fechaProduccion'];
    $unidad_medida = $_POST['unidadMedida'];
    $precio = $_POST['precio'];
    $vendido = $_POST['vendido'];

    try {
        $sql = "UPDATE productos 
                SET nombre = :nombre, 
                    descripcion = :descripcion, 
                    fecha_produccion = :fecha_produccion, 
                    unidad_medida = :unidad_medida, 
                    precio_actual = :precio, 
                    vendido = :vendido 
                WHERE id = :id";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':fecha_produccion', $fecha_produccion);
        $stmt->bindParam(':unidad_medida', $unidad_medida);
        $stmt->bindParam(':precio', $precio);
        $stmt->bindParam(':vendido', $vendido);
        $stmt->bindParam(':id', $productoId);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "Error al ejecutar la consulta"]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => $e->getMessage()]);
    }
}