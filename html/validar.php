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
  <link rel="stylesheet" href="../css/productos.css" />
  <script src="../bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../js/jquery-3.7.1.min.js"></script>
  <script src="../js/validar.js"></script>
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
  ></custom-header>

  

  <main class="container my-5">
    <section class="container mt-5">
        <h2 class="text-center mb-4">Validar Cuenta</h2>
    
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header bg-success text-white text-center">
                <strong>Ingresa tu código</strong>
              </div>
              <div class="card-body">
                <form id="verifyForm">
                  <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" required>
                  </div>
                  <div class="mb-3">
                    <label for="codigo" class="form-label">Código de Verificación</label>
                    <input type="text" class="form-control" id="codigo" required>
                  </div>
                  <div id="verify-success" class="alert alert-success d-none mt-3"></div>
                <div id="verify-error" class="alert alert-danger d-none mt-3"></div>
                  <button type="submit" class="btn btn-success w-100">Validar Cuenta</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  </main>

  <!-- Footer -->
  <custom-footer bootstrap-css="../bootstrap/css/bootstrap.min.css" custom-css="../css/index.css" ruta-html="../components/footer/footer-template.html"></custom-footer>
</body>
</html>