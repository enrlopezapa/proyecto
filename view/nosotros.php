<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>WallaFood</title>

  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/index.css" />
  <link rel="stylesheet" href="css/nosotros.css" />
  <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="js/jquery-3.7.1.min.js"></script>
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
    <!-- Sección: Historia -->
  <section id="historia" class="py-5 bg-light mb-4">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <img src="img/historia.jpg" alt="Nuestra historia" class="img-fluid rounded-3 shadow-lg"/>
        </div>
        <div class="col-md-6">
          <h2 class="text-success mb-4">Nuestra Historia</h2>
          <p>EcoMarket nació con el propósito de ofrecer productos frescos y de calidad, provenientes de agricultores locales que practican la agricultura sostenible. Desde su fundación, hemos mantenido el compromiso de ofrecer lo mejor a nuestros clientes y contribuir al bienestar de la comunidad.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección: Misión, Visión, Valores -->
  <section class="py-5 mb-4">
    <div class="container text-center">
      <h2 class="text-success mb-5">Nuestros Pilares</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <article class="card border-light shadow-lg">
            <div class="card-body">
              <h3 class="h5 text-success">Misión</h3>
              <p>Brindamos acceso a alimentos frescos, orgánicos y de calidad superior, promoviendo el bienestar y la salud de nuestros clientes a través de una alimentación natural y sostenible.</p>
            </div>
          </article>
        </div>
        <div class="col-md-4 mb-4">
          <article class="card border-light shadow-lg">
            <div class="card-body">
              <h3 class="h5 text-success">Visión</h3>
              <p>Convertirnos en la tienda online de productos orgánicos más confiable y sostenible del país, llevando la frescura de los alimentos directamente a tu hogar.</p>
            </div>
          </article>
        </div>
        <div class="col-md-4 mb-4">
          <article class="card border-light shadow-lg">
            <div class="card-body">
              <h3 class="h5 text-success">Valores</h3>
              <ul class="list-unstyled">
                <li><i class="bi bi-check-circle-fill text-success"></i> Transparencia</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> Calidad</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> Sostenibilidad</li>
                <li><i class="bi bi-check-circle-fill text-success"></i> Apoyo al comercio local</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección: Nuestro Equipo -->
  <section class="py-5 bg-light mb-4">
    <div class="container">
      <h2 class="text-success text-center mb-5">Nuestro Equipo</h2>
      <div class="row text-center">
        <div class="col-md-3 mb-4">
          <article class="card shadow-lg">
            <img src="img/equipo1.jpg" class="card-img-top rounded-circle" alt="Ana López" />
            <div class="card-body">
              <h5 class="card-title">Ana López</h5>
              <p class="card-text">Fundadora y CEO</p>
            </div>
          </article>
        </div>
        <div class="col-md-3 mb-4">
          <article class="card shadow-lg">
            <img src="img/equipo2.jpg" class="card-img-top rounded-circle" alt="Carlos Martínez" />
            <div class="card-body">
              <h5 class="card-title">Carlos Martínez</h5>
              <p class="card-text">Logística y Operaciones</p>
            </div>
          </article>
        </div>
        <div class="col-md-3 mb-4">
          <article class="card shadow-lg">
            <img src="img/equipo3.jpg" class="card-img-top rounded-circle" alt="Lucía Torres" />
            <div class="card-body">
              <h5 class="card-title">Lucía Torres</h5>
              <p class="card-text">Atención al cliente</p>
            </div>
          </article>
        </div>
        <div class="col-md-3 mb-4">
          <article class="card shadow-lg">
            <img src="img/equipo4.jpg" class="card-img-top rounded-circle" alt="Jorge Ramírez" />
            <div class="card-body">
              <h5 class="card-title">Jorge Ramírez</h5>
              <p class="card-text">Marketing y Diseño</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección: Compromiso Social -->
  <section class="py-5 bg-white mb-4">
    <div class="container text-center">
      <h2 class="text-success mb-4">Nuestro Compromiso Social</h2>
      <p>En EcoMarket estamos comprometidos con el bienestar de nuestra comunidad. Colaboramos con asociaciones locales, promovemos el comercio justo y realizamos donaciones regulares de productos a quienes más lo necesitan.</p>
      <a href="contacto.php" class="btn btn-lg btn-success">Únete a nuestro compromiso</a>
    </div>
  </section>
  </main>

  <!-- Footer -->
  <custom-footer bootstrap-css="bootstrap/css/bootstrap.min.css" custom-css="css/index.css" ruta-html="../model/components/footer/footer-template.html"></custom-footer>
</body>
</html>