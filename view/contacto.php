<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>WallaFood</title>

  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/index.css" />
  <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="js/jquery-3.7.1.min.js"></script>
  <script src="js/contacto.js"></script>
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
    <section class="py-5 bg-light mb-4" id="contacto">
        <div class="container">
          <h2 class="text-center text-success mb-4">¡Contáctanos!</h2>
          <p class="text-center mb-5">Si tienes alguna pregunta o consulta, por favor completa el siguiente formulario y nos pondremos en contacto contigo a la mayor brevedad.</p>
    
          <form id="form-contacto">
  <div class="row">
    <div class="col-md-6 mb-4">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="nombre" name="nombre" required>
    </div>
    <div class="col-md-6 mb-4">
      <label for="email" class="form-label">Correo electrónico</label>
      <input type="email" class="form-control" id="email" name="email" required>
    </div>
  </div>
  <div class="mb-4">
    <label for="mensaje" class="form-label">Mensaje</label>
    <textarea class="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
  </div>
  <button type="submit" class="btn btn-success w-100">Enviar mensaje</button>
  <div id="mensaje-estado" class="mt-3"></div>
</form>
        </div>
      </section>
    
      <!-- Sección: Redes Sociales -->
      <section class="py-5 bg-success text-white text-center mb-4">
        <div class="container">
          <h2 class="mb-4">Síguenos en nuestras redes sociales</h2>
          <div class="row justify-content-center">
  <div class="col-3 col-sm-2 col-md-1 mb-3 text-center">
    <a href="https://es-es.facebook.com/">
      <img src="img/fb.png" alt="facebook" class="img-fluid" style="max-width: 50px;">
    </a>
  </div>
  <div class="col-3 col-sm-2 col-md-1 mb-3 text-center">
    <a href="https://x.com/">
      <img src="img/x.png" alt="X" class="img-fluid" style="max-width: 50px;">
    </a>
  </div>
  <div class="col-3 col-sm-2 col-md-1 mb-3 text-center">
    <a href="https://www.instagram.com/">
      <img src="img/instagram.png" alt="instagram" class="img-fluid" style="max-width: 50px;">
    </a>
  </div>
  <div class="col-3 col-sm-2 col-md-1 mb-3 text-center">
    <a href="https://www.youtube.com/">
      <img src="img/youtube.png" alt="youtube" class="img-fluid" style="max-width: 50px;">
    </a>
  </div>
</div>
        </div>
      </section>
    
      <!-- Sección: Datos de Contacto y Mapa -->
      <section class="py-5 mb-4">
        <div class="container">
          <h2 class="text-center text-success mb-4">Datos de Contacto</h2>
          <div class="row">
            <div class="col-md-6">
              <h4>Dirección</h4>
              <p>Calle Ávila, 1</p>
              <p>Segovia, 40004</p>
    
              <h4>Teléfono</h4>
              <p>(+34) 921 456 789</p>
    
              <h4>Correo Electrónico</h4>
              <p>administracion@wallafood.es</p>
            </div>
            <div class="col-md-6">
              <h4>Ubicación en el Mapa</h4>
              <div class="ratio ratio-16x9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.6776589509514!2d-4.1084988232893584!3d40.94473127135959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd413f1f30373af1%3A0x7591302428ee44ad!2sIES%20Mar%C3%ADa%20Moliner!5e0!3m2!1ses!2ses!4v1747034521396!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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