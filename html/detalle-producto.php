<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Marketplace - Frutas y Verduras</title>

  <!-- Bootstrap CSS local -->
  <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css" />
  <!-- CSS personalizado -->
  <link rel="stylesheet" href="../css/index.css" />
  <link rel="stylesheet" href="../css/detalle-producto.css" />

  <script src="../js/jquery-3.7.1.min.js"></script>
  <script src="../bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="../js/detalle-producto.js"></script>
  <script type="module" src="../components/index.js"></script>
  <?php session_start(); ?>
  <script>
    window.usuarioLogueado = <?= isset($_SESSION['usuario_id']) ? 'true' : 'false' ?>;
  </script>
</head>
<body>

  <!-- Header -->
    <custom-header 
  bootstrap-css="../bootstrap/css/bootstrap.min.css" 
  custom-css="../css/index.css" 
  ruta-html="../components/header/header-template.html"
  bootstrap-js="../bootstrap/js/bootstrap.bundle.min.js"
  jquery-js="../js/jquery-3.7.1.min.js"
  index-link="../index.php"
  logo-link="../img/house-heart-fill.svg"
  search-link="productos.php"
  cart-link="carrito.php"
  login-link="login.php"
  productFruta-link="productos.php?category=fruta"
  productVerdura-link="productos.php?category=verdura"
  productOferta-link="productos.php?category=oferta"
  productLocal-link="productos.php?category=local"
  producto-link="productos.php"
  nosotros-link="nosotros.php"
  contacto-link="contacto.php"
  ruta-categoriasphp="../php/obtenerCategorias.php"
  perfil-link="cuenta.php"
  logout-link="../php/logout.php"
  cart-link="carrito.php"
  ></custom-header>s

  <!-- Contenido -->
  <main class="container py-5">
    <div class="row">
      <!-- Imagen -->
      <div class="col-md-5">
        <img src="" class="img-fluid rounded border" alt="">
      </div>

      <!-- Detalles -->
      <div class="col-md-7">
        <h1></h1>
        <p class="text-muted"></p>
        
        <div class="mb-3">
          <span class="text-muted text-decoration-line-through"></span>
          <span class="fs-4 text-success"></span>
        </div>

        <div class="mb-4">
          <p><strong>Vendedor:</strong></p>
          <p><strong>Valoración media del vendedor:</strong></p>
        </div>

        <button class="btn btn-primary btn-buy">Añadir al carrito</button>
      </div>
    </div>

    <hr class="my-5">

    <!-- Historial de precios -->
    <div class="row">
      <div class="col-12">
        <h4>Historial de precios</h4>
        <canvas id="graficoPrecios" height="100"></canvas>
      </div>
    </div>
  </main>

   <!-- Toast -->
   <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1055">
    <div id="toastConfirmacion" class="toast align-items-center text-bg-success border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">Acción realizada con éxito.</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast">hola</button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <custom-footer bootstrap-css="../bootstrap/css/bootstrap.min.css" custom-css="../css/index.css" ruta-html="../components/footer/footer-template.html"></custom-footer>

</body>
</html>