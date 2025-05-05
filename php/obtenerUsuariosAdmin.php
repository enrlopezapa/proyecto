<?php
header('Content-Type: application/json');

require_once 'conexion.php';

$sql = "SELECT 
            id,
            nombre,
            email,
            telefono,
            direccion,
            administrador,
            valoracion_media
        FROM usuarios";

$stmt = $conn->prepare($sql);
$stmt->execute();

$usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($usuarios);