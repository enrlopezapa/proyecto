<?php
$host = 'localhost';         // Cambia si tu host es diferente
$db   = 'proyecto'; // Nombre de tu base de datos
$user = 'root';        // Tu usuario de base de datos
$pass = '';     // Contraseña de tu base de datos
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Lanzar excepciones en errores
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Devolver resultados como arrays asociativos
    PDO::ATTR_EMULATE_PREPARES   => false,                  // Usar consultas preparadas reales
];

try {
    $conn = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexión: ' . $e->getMessage()]);
    exit;
}
?>