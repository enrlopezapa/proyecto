<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Marketplace - Frutas y Verduras</title>

  <!-- Bootstrap CSS local -->
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
  <!-- CSS personalizado -->
  <link rel="stylesheet" href="css/index.css" />
  <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="js/jquery-3.7.1.min.js"></script>
  <script src="js/index.js"></script>
  <?php session_start(); ?>
  <script>
    window.usuarioLogueado = <?= isset($_SESSION['usuario_id']) ? 'true' : 'false' ?>;
  </script>
  <script type="module" src="components/index.js"></script>
</head>

<body>

  <!-- Header -->
  <custom-header 
  bootstrap-css="bootstrap/css/bootstrap.min.css" 
  custom-css="css/index.css" 
  ruta-html="components/header/header-template.html"
  bootstrap-js="bootstrap/js/bootstrap.bundle.min.js"
  jquery-js="js/jquery-3.7.1.min.js"
  index-link="index.php"
  logo-link="img/house-heart-fill.svg"
  search-link="../proyecto/html/productos.php"
  cart-link="html/carrito.php"
  login-link="html/login.php"
  productFruta-link="html/productos.php?category=fruta"
  productVerdura-link="html/productos.php?category=verdura"
  productOferta-link="html/productos.php?category=oferta"
  productLocal-link="html/productos.php?category=local"
  producto-link="html/productos.php"
  nosotros-link="html/nosotros.php"
  contacto-link="html/contacto.php"
  ruta-categoriasphp="php/obtenerCategorias.php"
  perfil-link="html/cuenta.php"
  logout-link="php/logout.php"
  cart-link="html/carrito.php"
  ></custom-header>






  <!-- Banner full-screen -->
  <section class="hero-banner d-flex align-items-center">
    <div class="container d-flex flex-wrap align-items-center justify-content-between">
      <div class="text-white col-md-6">
        <h1>Compra y vende sano</h1>
        <p>Compra a productores locales o vende tus productos.</p>
        <a href="html/nosotros.php" class="btn btn-light">Saber más</a>
      </div>
      <div class="col-md-5 d-none d-md-block">
        <img src="https://via.placeholder.com/400x300.png?text=Promo" alt="Banner promo" class="img-fluid">
      </div>
    </div>
  </section>

  <main class="container my-5">
    <section class="container text-center my-4">
      <div class="row">
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/house-heart-fill.svg">
            <span>Fruta</span>
          </button>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/house-heart-fill.svg">
            <span>Verdura</span>
          </button>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/house-heart-fill.svg">
            <span>Hortaliza</span>
          </button>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/house-heart-fill.svg">
            <span>Otros</span>
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
  <custom-footer bootstrap-css="bootstrap/css/bootstrap.min.css" custom-css="css/index.css" ruta-html="components/footer/footer-template.html"></custom-footer>

</body>

</html>