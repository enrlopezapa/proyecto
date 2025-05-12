<?php
session_start();
$usuario_id_session = $_SESSION['usuario_id'];
session_write_close();
session_name($usuario_id_session);
session_start();

if (!isset($_SESSION['favoritos'])) {
  $_SESSION['favoritos'] = [];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $productoId = $_POST['productoId'] ?? null;
  $accion = $_POST['accion'] ?? null;

  if ($productoId) {
    if ($accion === 'agregar') {
      if (!in_array($productoId, $_SESSION['favoritos'])) {
        $_SESSION['favoritos'][] = $productoId;
      }
    } elseif ($accion === 'quitar') {
      $_SESSION['favoritos'] = array_filter(
        $_SESSION['favoritos'],
        fn($id) => $id != $productoId
      );
    }
  }
}