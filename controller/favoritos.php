<?php
session_start();

require_once '../model/conexion.php'; // Asegúrate de que el archivo se llame así o cambia el nombre según corresponda

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $productoId = $_POST['productoId'] ?? null;
    $accion = $_POST['accion'] ?? null;
    $usuarioId = $_SESSION["usuario_id"];

    if ($productoId && $accion && $usuarioId) {
        if ($accion === 'agregar') {
            $stmt = $conn->prepare("
                INSERT IGNORE INTO favoritos_producto (usuario_id, producto_id)
                VALUES (:usuario_id, :producto_id)
            ");
            $stmt->execute([
                ':usuario_id' => $usuarioId,
                ':producto_id' => $productoId
            ]);
        } elseif ($accion === 'quitar') {
            $stmt = $conn->prepare("
                DELETE FROM favoritos_producto
                WHERE usuario_id = :usuario_id AND producto_id = :producto_id
            ");
            $stmt->execute([
                ':usuario_id' => $usuarioId,
                ':producto_id' => $productoId
            ]);
        }
    }
}