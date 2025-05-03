<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['carrito']) || empty($_SESSION['carrito'])) {
    echo json_encode([]);
    exit;
}

require_once 'conexion.php';

$ids = $_SESSION['carrito'];  // Array de IDs
$placeholders = implode(',', array_fill(0, count($ids), '?'));

$sql = "SELECT id, nombre, precio FROM productos WHERE id IN ($placeholders)";
$stmt = $conn->prepare($sql);
$stmt->execute($ids);
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($productos);

