<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title></title>

  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/index.css" />
  <link rel="stylesheet" href="css/productos.css" />
  <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="js/jquery-3.7.1.min.js"></script>
  <script src="js/validar.js"></script>
    <script>
    window.usuarioLogueado = <?= isset($_SESSION['usuario_id']) ? 'true' : 'false' ?>;
  </script>
  <script type="module" src="../model/components/index.js"></script>
  <link rel="icon" href="img/favicon.ico" type="image/x-icon">
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
  <custom-footer bootstrap-css="bootstrap/css/bootstrap.min.css" custom-css="css/index.css" ruta-html="../model/components/footer/footer-template.html"></custom-footer>
</body>
</html>