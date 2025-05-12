<?php
header('Content-Type: application/json');

require '../model/conexion.php';

$sql = "SELECT id, nombre, descripcion FROM categorias";
$stmt = $conn->prepare($sql);
$stmt->execute();

$categorias = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($categorias);