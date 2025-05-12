<?php
require '../model/conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['compraId'];
    $nombre_pagador = $_POST['nombrePagador'];
    $destinatario = $_POST['destinatario'];
    $direccion_entrega = $_POST['direccionEntrega'];

    try {
        $sql = "UPDATE compras 
                SET nombre_pagador = :nombre_pagador, destinatario = :destinatario, direccion_entrega = :direccion_entrega
                WHERE id = :id";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':nombre_pagador', $nombre_pagador);
        $stmt->bindParam(':destinatario', $destinatario);
        $stmt->bindParam(':direccion_entrega', $direccion_entrega);
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "mensaje" => "No se pudo actualizar la compra"]);
        }

        $stmt = null;
        $conn = null;

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => $e->getMessage()]);
    }
}