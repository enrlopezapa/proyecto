<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WallaFood</title>

  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/index.css" />
  <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="js/jquery-3.7.1.min.js"></script>
  <script src="js/index.js"></script>
  <?php session_start(); ?>
  <script>
    window.usuarioLogueado = <?= isset($_SESSION['usuario_id']) ? 'true' : 'false' ?>;
  </script>
  <script type="module" src="../model/components/index.js"></script>
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






  <!-- Banner full-screen -->
  <section class="hero-banner d-flex align-items-center">
    <div class="container d-flex flex-wrap align-items-center justify-content-between">
      <div class="text-white col-md-6">
        <h1>Compra y vende sano</h1>
        <p>Compra a productores locales o vende tus productos.</p>
        <a href="nosotros.php" class="btn btn-light">Saber más</a>
      </div>
      <div class="col-md-5 d-none d-md-block">
        <img src="img/carrito.png" alt="Banner promo" class="img-fluid">
      </div>
    </div>
  </section>

  <main class="container my-5">
    <section class="container text-center my-4">
      <div class="row">
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/fruta.png">
          </button>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/verdura.png">
          </button>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/hortaliza.png">
          </button>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/otros.png">
          </button>
        </div>
      </div>
    </section>

    <section aria-label="Carrusel de productos destacados" class="mb-5">
      <h3 class="mb-4 fw-bold"><a href="#">Productos mejor valorados</a></h3>
      <div id="carouselProductos1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <!-- Controles del carrusel -->

        </div>
        <div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselProductos1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselProductos1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>

      </div>

    </section>


    <section aria-label="Carrusel de productos destacados" class="mb-5">
      <h3 class="mb-4 fw-bold"><a href="#">Frutas</a></h3>
      <div id="carouselProductos2" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner"></div>

        <!-- Controles del carrusel -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselProductos2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselProductos2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>

    <section aria-label="Carrusel de productos destacados" class="mb-5">
      <h3 class="mb-4 fw-bold"><a href="#">Verduras</a></h3>
      <div id="carouselProductos3" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner"></div>

        <!-- Controles del carrusel -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselProductos3" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselProductos3" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <custom-footer bootstrap-css="bootstrap/css/bootstrap.min.css" custom-css="css/index.css" ruta-html="../model/components/footer/footer-template.html"></custom-footer>

</body>

</html>