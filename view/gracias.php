<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>WallaFood</title>

  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/index.css" />
  <link rel="stylesheet" href="css/productos.css" />

  <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="js/jquery-3.7.1.min.js"></script>
  <script src="js/login.js"></script>
  <script type="module" src="../model/components/index.js"></script>
  <?php session_start(); ?>
  <script>
    window.usuarioLogueado = <?= isset($_SESSION['usuario_id']) ? 'true' : 'false' ?>;
  </script>
</head>
<body>

  <!-- Header -->
   <custom-header 
  bootstrap-css="bootstrap/css/bootstrap.min.css" 
  custom-css="css/index.css" 
  ruta-html="../model/components/header/header-template.html"
  bootstrap-js="bootstrap/js/bootstrap.bundle.min.js"
  jquery-js="js/jquery-3.7.1.min.js"
  index-link="home.php"
  logo-link="img/house-heart-fill.svg"
  search-link="productos.php"
  cart-link="carrito.php"
  login-link="login.php"
  producto-link="productos.php"
  nosotros-link="nosotros.php"
  contacto-link="contacto.php"
  ruta-categoriasphp="../controller/obtenerCategorias.php"
  perfil-link="cuenta.php"
  logout-link="../controller/logout.php"
  cart-link="carrito.php"
  ></custom-header>

  

  <main class="container my-5">
  <div class="text-center">
    <h1 class="display-4 text-success mb-4">¡Gracias por tu compra!</h1>
    <p class="lead">Agradecemos tu confianza en nuestro marketplace de frutas y verduras frescas.</p>
    <hr class="my-4">
    <h2 class="h4 mt-4">¿Por qué comprar con nosotros?</h2>
    <ul class="list-unstyled mt-3 text-start mx-auto" style="max-width: 600px;">
      <li>🍎 Productos frescos directamente del productor.</li>
      <li>🚚 Entrega rápida y segura hasta la puerta de tu casa.</li>
      <li>💳 Múltiples métodos de pago seguros.</li>
      <li>🌱 Apoyas la agricultura local y sostenible.</li>
      <li>📦 Garantía de calidad en todos nuestros productos.</li>
    </ul>
    <p class="mt-4">¡Esperamos verte pronto de nuevo!</p>
    <a href="productos.php" class="btn btn-success mt-3">Seguir comprando</a>
  </div>
</main>

  <!-- Footer -->
  <custom-footer bootstrap-css="bootstrap/css/bootstrap.min.css" custom-css="css/index.css" ruta-html="../model/components/footer/footer-template.html"></custom-footer>

</body>
</html>