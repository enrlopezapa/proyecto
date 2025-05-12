<?php
session_start();
$usuario_id_session = $_SESSION['usuario_id'];
session_write_close();
session_name($usuario_id_session);
session_start();
session_write_close();
header('Location: ../view/login.php');
exit();