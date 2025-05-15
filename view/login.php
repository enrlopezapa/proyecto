<?php session_start(); ?>
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
        <h2 class="text-center mb-4">Iniciar Sesión</h2>
      
        <!-- Contenedor para el formulario de inicio de sesión y registro -->
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4">
            <!-- Formulario de inicio de sesión -->
            <div class="card shadow-sm">
              <div class="card-header bg-success text-white text-center">
                <strong>Iniciar Sesión</strong>
              </div>
              <div class="card-body">
                <form id="loginForm">
                  <!-- Correo electrónico -->
                  <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="Introduce tu correo" required>
                  </div>
      
                  <!-- Contraseña -->
                  <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" placeholder="Introduce tu contraseña" required>
                  </div>
                  
                  <div id="error-message" class="alert alert-danger d-none text-center"></div>
                  <!-- Botón de inicio de sesión -->
                  <button type="submit" class="btn btn-success w-100">Iniciar Sesión</button>
                </form>
      
                <!-- Opción para registrar una cuenta -->
                <p class="text-center mt-3">
                  ¿No tienes cuenta? <a href="registro.php" class="text-success">Regístrate aquí</a>
                </p>
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