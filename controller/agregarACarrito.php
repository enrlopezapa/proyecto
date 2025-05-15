<?php
session_start();


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['productoId'])) {
    $productoId = $_POST['productoId'];
  
    // Asegurar que el carrito esté inicializado
    if (!isset($_SESSION['carrito'])) {
        $_SESSION['carrito'] = [];
    }

    // Evitar duplicados (opcional)
    if (!in_array($productoId, $_SESSION['carrito'])) {
        $_SESSION['carrito'][] = $productoId;
    }

    echo json_encode(['mensaje' => "Producto $productoId añadido al carrito."]);
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Solicitud no válida.']);
}