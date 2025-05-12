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
  <script src="js/registro.js"></script>
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
    <section class="container mt-5">
      <h2 class="text-center mb-4">Crear una Cuenta</h2>
  
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card shadow-sm">
            <div class="card-header bg-success text-white text-center">
              <strong>Regístrate</strong>
            </div>
            <div class="card-body">
              <form id="registerForm">
                <div class="mb-3">
                  <label for="fullName" class="form-label">Nombre Completo</label>
                  <input type="text" class="form-control" id="fullName" required>
                </div>
                <div class="mb-3">
                  <label for="emailReg" class="form-label">Correo Electrónico</label>
                  <input type="email" class="form-control" id="emailReg" required>
                </div>
                <div class="mb-3">
                  <label for="passwordReg" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="passwordReg" required>
                </div>
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
                  <input type="password" class="form-control" id="confirmPassword" required>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="termsAndConditions" required>
                  <label class="form-check-label" for="termsAndConditions">Acepto los <a href="termsConditions.php">términos y condiciones</a></label>
                </div>
                <div id="register-error" class="alert alert-danger d-none mt-3"></div>
                <div id="register-success" class="alert alert-success d-none mt-3"></div>
                <button type="submit" class="btn btn-success w-100">Registrarse</button>
              </form>
  
              <p class="text-center mt-3">
                ¿Ya tienes cuenta? <a href="login.php" class="text-success">Inicia sesión aquí</a>
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