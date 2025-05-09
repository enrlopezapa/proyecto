<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Marketplace - Frutas y Verduras</title>

  <!-- Bootstrap CSS local -->
  <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css" />
  <!-- CSS personalizado -->
  <link rel="stylesheet" href="../css/index.css" />
  <link rel="stylesheet" href="../css/productos.css" />
  <script src="../bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../js/jquery-3.7.1.min.js"></script>
  <script src="../js/productos.js"></script>
  <script type="module" src="../components/index.js"></script>
  <?php
  session_start();

  if (isset($_GET['busqueda'])) {
      setcookie('busqueda', $_GET['busqueda'], time() + 3600, '/'); // Expira en 1 hora
  }

  if (isset($_GET['categoria'])) {
      setcookie('categoria', $_GET['categoria'], time() + 3600, '/'); // Expira en 1 hora
  }
?>
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
  ></custom-header>



  <main class="container my-5">
    <div class="row">
      <!-- Filtros (Sidebar) -->
      <aside class="col-12 col-md-3 mb-4" aria-label="Filtros de productos">
        <!-- Botón solo visible en mobile -->
        <button id="toggleFiltrosBtn" class="btn btn-success w-100 d-lg-none mb-3" type="button">
    Abrir filtros
  </button>

  <!-- Contenedor de filtros -->
  <div id="filtrosContainer" class="d-none d-lg-block">
    <div class="position-sticky-sidebar">
      <form method="GET">
        <section class="card shadow-sm h-100">
          <header class="card-header bg-success text-white">
            <strong>Filtros</strong>
          </header>
          <div class="card-body">
            <!-- Categoría -->
            <div class="mb-3">
              <label for="categoria" class="form-label">Categoría</label>
              <select id="categoria" name="categoria" class="form-select">
                <option value="">Todas</option>
              </select>
            </div>
            <!-- Precio -->
            <div class="mb-3 position-relative">
              <label for="precio" class="form-label">Precio máximo</label>
              <input type="range" id="precio" name="precio" class="form-range mt-4" min="0" max="100" step="1">
              <!-- Tooltip visible -->
              <div id="precioTooltip" class="position-absolute bg-success text-white px-2 py-1 rounded shadow"
                style="top:24px; left: 0; transform: translateX(-50%); white-space: nowrap;">
                100 €
              </div>
            </div>
            <!-- Calificación -->
            <div class="mb-3">
              <label class="form-label d-block">Calificación mínima</label>
              <div id="star-calification" class="text-warning fs-4" data-rating="0">
                <img src="../img/star.svg" data-value="1" title="1 estrella" class="img-fluid star"
                  alt="estrella" />
                <img src="../img/star.svg" data-value="2" title="2 estrellas" class="img-fluid star"
                  alt="estrella" />
                <img src="../img/star.svg" data-value="3" title="3 estrellas" class="img-fluid star"
                  alt="estrella" />
                <img src="../img/star.svg" data-value="4" title="4 estrellas" class="img-fluid star"
                  alt="estrella" />
                <img src="../img/star.svg" data-value="5" title="5 estrellas" class="img-fluid star"
                  alt="estrella" />
              </div>
              <input type="hidden" name="calificacion" id="calificacion" value="">
            </div>
            <!-- Ordenar por -->
            <div class="mb-3">
              <label for="ordenar" class="form-label">Ordenar por</label>
              <select id="ordenar" name="ordenar" class="form-select">
                <option value="">Seleccionar opcion</option>
                <option value="relevancia">Relevancia</option>
                <option value="precio_asc">Precio: más bajo</option>
                <option value="precio_desc">Precio: más alto</option>
                <option value="calificacion">Mejor calificación</option>
              </select>
            </div>
            <button type="button" class="btn btn-success w-100">Aplicar filtros</button>
          </div>
        </section>
      </form>
    </div>
  </div>
      </aside>

      <!-- Grid de productos -->
<section class="col-12 col-md-9" aria-label="Listado de productos">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-1" id="productos-container">
    <!-- Aquí aparecerán los productos generados por JS -->
  </div>
</section>
    </div>
  </main>

  <!-- Toast -->
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1055">
    <div id="toastConfirmacion" class="toast align-items-center text-bg-success border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body">Acción realizada con éxito.</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <custom-footer bootstrap-css="../bootstrap/css/bootstrap.min.css" custom-css="../css/index.css" ruta-html="../components/footer/footer-template.html"></custom-footer>
</body>

</html>