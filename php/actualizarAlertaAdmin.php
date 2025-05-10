<?php
require 'conexion.php'; // Este archivo debe crear un objeto PDO llamado $conn

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $palabra_clave = $_POST['palabra_clave'];
    $activo = isset($_POST['activa']) ? (bool)$_POST['activa'] : false;

    try {
        $sql = "UPDATE alertas_usuario 
                SET nombre_clave = :nombre_clave, 
                    activo = :activo 
                WHERE id = :id";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':nombre_clave', $palabra_clave);
        $stmt->bindParam(':activo', $activo, PDO::PARAM_BOOL);
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "No se pudo actualizar la alerta"]);
        }

        $stmt = null;
        $conn = null;

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => $e->getMessage()]);
    }
}