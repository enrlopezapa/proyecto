<?php
require 'conexion.php'; // Ajusta según tu estructura de proyecto

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $nombre_pagador = $_POST['nombre_pagador'];
    $destinatario = $_POST['destinatario'];
    $direccion_entrega = $_POST['direccion_entrega'];

    $sql = "UPDATE compras 
            SET nombre_pagador = ?, destinatario = ?, direccion_entrega = ?
            WHERE id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nombre_pagador, $destinatario, $direccion_entrega, $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "mensaje" => "No se pudo actualizar la compra"]);
    }

    $stmt->close();
    $conn->close();
}