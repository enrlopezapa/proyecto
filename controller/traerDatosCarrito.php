<?php
session_start();

// Verificar si el carrito está vacío
if (!isset($_SESSION['carrito']) || empty($_SESSION['carrito'])) {
    echo json_encode([]);
    exit;
}

require '../model/conexion.php';

// Limpiar valores vacíos y repetidos
$ids = array_unique(array_filter($_SESSION['carrito']));
foreach($ids as $id){
    $idsComprobados[] = $id; 
}

if (empty($ids)) {
    echo json_encode([]);
    exit;
}

// Crear placeholders para la consulta
$placeholders = implode(',', array_fill(0, count($ids), '?'));
$sql = "SELECT id, nombre, precio_actual FROM productos WHERE id IN ($placeholders)";

// Preparar la consulta
$stmt = $conn->prepare($sql);

// Ejecutar la consulta pasando el array de IDs
try {
   $stmt->execute($idsComprobados);
} catch (PDOException $e) {
    // Capturar y mostrar el error
    echo json_encode(['error' => $e->getMessage()]);
    exit;
}

// Obtener los resultados
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Devolver los resultados en formato JSON
echo json_encode($productos);
