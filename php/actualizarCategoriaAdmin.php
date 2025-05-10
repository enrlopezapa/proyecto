<?php
require 'conexion.php'; // Este archivo debe crear un objeto PDO llamado $conn

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['categoriaId'];
    $nombre = trim($_POST['nombre']);
    $descripcion = trim($_POST['descripcion']);

    try {
        $sql = "UPDATE categorias
                SET nombre = :nombre, descripcion = :descripcion
                WHERE id = :id";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "No se pudo actualizar la categoría"]);
        }

        $stmt = null;
        $conn = null;

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => $e->getMessage()]);
    }
}