<?php
require 'conexion.php'; // Este archivo debe crear un objeto PDO llamado $conn

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['usuarioId'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'] ?? null;
    $direccion = $_POST['direccion'] ?? null;
    $administrador = $_POST['administrador'];

    try {
        $sql = "UPDATE usuarios 
                SET nombre = :nombre, email = :email, telefono = :telefono, direccion = :direccion, administrador = :administrador
                WHERE id = :id";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':telefono', $telefono);
        $stmt->bindParam(':direccion', $direccion);
        $stmt->bindParam(':administrador', $administrador, PDO::PARAM_INT);
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "Error al actualizar el usuario"]);
        }

        $stmt = null;
        $conn = null;

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => $e->getMessage()]);
    }
}