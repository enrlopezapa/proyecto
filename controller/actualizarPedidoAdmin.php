<?php
require '../model/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['pedidoId'];
    $estado = $_POST['estado'];
    $notas = $_POST['notas'];

    try {
        $sql = "UPDATE estado_pedido
                SET estado = :estado, notas = :notas, fecha_estado = NOW()
                WHERE id = :id";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':estado', $estado);
        $stmt->bindParam(':notas', $notas);
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "No se pudo actualizar el pedido"]);
        }

        $stmt = null;
        $conn = null;

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => $e->getMessage()]);
    }
}