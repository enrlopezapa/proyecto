<?php
session_start();
session_write_close();
header('Location: ../view/login.php');
exit();