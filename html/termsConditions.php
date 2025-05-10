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
  <script src="../js/login.js"></script>
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
  producto-link="productos.php"
  nosotros-link="nosotros.php"
  contacto-link="contacto.php"
  ruta-categoriasphp="../php/obtenerCategorias.php"
  perfil-link="cuenta.php"
  logout-link="../php/logout.php"
  cart-link="carrito.php"
  ></custom-header>

  

  <main class="container my-5">
    <section>
  <h2 class="mb-4">Términos y Condiciones de Uso</h2>
  <p>
    Bienvenido/a a nuestra plataforma de venta de frutas y verduras en línea. Al acceder o utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices el sitio.
  </p>

  <h3>1. Registro de Usuario</h3>
  <p>
    Para acceder a ciertas funcionalidades del sitio, como realizar compras o guardar productos favoritos, es necesario registrarse. Al darte de alta, te comprometes a proporcionar información veraz, completa y actualizada. Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que se realicen desde tu cuenta.
  </p>
  <p>
    Nos reservamos el derecho de suspender o eliminar cuentas que contengan información falsa, presenten comportamientos inadecuados o violen cualquier parte de estos términos.
  </p>

  <h3>2. Uso Adecuado del Sitio</h3>
  <p>
    Este sitio debe utilizarse exclusivamente con fines lícitos y personales. Está prohibido utilizarlo para:
  </p>
  <ul>
    <li>Distribuir contenido ilegal, ofensivo o que infrinja derechos de terceros.</li>
    <li>Intentar acceder sin autorización a partes restringidas del sistema.</li>
    <li>Realizar cualquier tipo de ataque o interferencia técnica (como envío de virus o saturación de servicios).</li>
  </ul>

  <h3>3. Compras y Pagos</h3>
  <p>
    Al realizar una compra, aceptas los precios y descripciones de productos ofrecidos. Nos reservamos el derecho de modificar precios, descripciones o disponibilidad en cualquier momento sin previo aviso. Todos los pagos deben realizarse por medios seguros y autorizados.
  </p>

  <h3>4. Propiedad Intelectual</h3>
  <p>
    Todos los contenidos presentes en este sitio, incluyendo textos, imágenes, logotipos y código, están protegidos por derechos de propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa por escrito.
  </p>

  <h3>5. Cancelación y Suspensión de Servicios</h3>
  <p>
    Podemos cancelar o suspender el acceso al sitio o a tu cuenta en cualquier momento, con o sin causa, y sin necesidad de aviso previo, especialmente en caso de violación de estos términos.
  </p>

  <h3>6. Modificaciones</h3>
  <p>
    Nos reservamos el derecho de modificar en cualquier momento los términos y condiciones de uso. Las nuevas versiones se publicarán en esta misma página y su uso posterior del sitio constituirá aceptación de dichos cambios.
  </p>

  <h2 class="mt-5 mb-4">Política de Cookies</h2>
  <p>
    Este sitio web utiliza cookies para mejorar la experiencia del usuario, analizar patrones de navegación y ofrecer contenido personalizado.
  </p>

  <h3>¿Qué son las cookies?</h3>
  <p>
    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas ciertos sitios web. Sirven para recordar tus preferencias, facilitar el inicio de sesión y recopilar información estadística anónima.
  </p>

  <h3>¿Qué tipos de cookies utilizamos?</h3>
  <ul>
    <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio, como mantener la sesión iniciada o recordar el contenido del carrito.</li>
    <li><strong>Cookies de análisis:</strong> nos permiten recopilar datos estadísticos de navegación para mejorar nuestro servicio.</li>
    <li><strong>Cookies de personalización:</strong> adaptan el contenido del sitio en función de tus preferencias y comportamiento previo.</li>
    <li><strong>Cookies de terceros:</strong> como las de Google Analytics o redes sociales, que pueden rastrear tu actividad fuera de nuestro sitio.</li>
  </ul>

  <h3>¿Cómo puedes controlar las cookies?</h3>
  <p>
    Puedes configurar tu navegador para aceptar o rechazar cookies automáticamente, o para que te avise cada vez que un sitio quiera guardar una. Ten en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio.
  </p>

  <h3>Consentimiento</h3>
  <p>
    Al continuar utilizando nuestro sitio web, entendemos que aceptas nuestra política de cookies. Si no estás de acuerdo, te recomendamos ajustar tus preferencias de navegador o abandonar el sitio.
  </p>

  <p class="mt-4">
    Para cualquier consulta relacionada con nuestros términos de uso o políticas de privacidad, puedes contactarnos a través del formulario de <a href="contacto.php">contacto</a>.
  </p>
</section>
  </main>

  <!-- Footer -->
  <custom-footer bootstrap-css="../bootstrap/css/bootstrap.min.css" custom-css="../css/index.css" ruta-html="../components/footer/footer-template.html"></custom-footer>

</body>
</html>