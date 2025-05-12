<?php
require '../model/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $id = $_POST['id'];

    try {
        // Elimina la categoría usando PDO
        $stmt = $conn->prepare("DELETE FROM categorias WHERE id = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            echo json_encode(["status" => "error", "mensaje" => "No se pudo eliminar la categoría"]);
        }

    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "mensaje" => "Error en la base de datos: " . $e->getMessage()]);
    }

} else {
    echo json_encode(["status" => "error", "mensaje" => "Solicitud inválida"]);
}

// Cerrar la conexión
$conn = null;