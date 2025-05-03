<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['productoId'])) {
    $productoId = $_POST['productoId'];

    // Asegurar que el array exista
    if (!isset($_SESSION['carrito'])) {
        $_SESSION['carrito'] = [];
    }

    // Añadir el producto
    $_SESSION['carrito'][] = $productoId;

    echo "Producto $productoId añadido al carrito.";
} else {
    echo "Producto no válido.";
}