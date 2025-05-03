<?php
session_start();
header('Content-Type: application/json');

if (!isset($_POST['id'])) {
    http_response_code(400);
    echo json_encode(['error' => 'ID no proporcionado']);
    exit;
}

$id = $_POST['id'];

if (isset($_SESSION['carrito'])) {
    $_SESSION['carrito'] = array_filter($_SESSION['carrito'], function($productoId) use ($id) {
        return $productoId != $id;
    });
}

echo json_encode(['success' => true]);