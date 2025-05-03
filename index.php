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
    window.usuarioLogueado = <?= isset($_SESSION['usuario']) ? 'true' : 'false' ?>;
  </script>
  <script type="module" src="components/index.js"></script>
</head>

<body>

    <!-- TODO: CUANDO SEA MEDIA QUERY QUITAR EL MENU DESPLEGABLE DENTRO DEL MENU DESPLEGABLE!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
  <!-- Header -->
  <custom-header 
  bootstrap-css="bootstrap/css/bootstrap.min.css" 
  custom-css="css/index.css" 
  ruta-html="components/header/header-template.html"
  bootstrap-js="bootstrap/js/bootstrap.bundle.min.js"
  jquery-js="js/jquery-3.7.1.min.js"
  index-link="index.html"
  logo-link="img/house-heart-fill.svg"
  search-link="../proyecto/html/productos.html"
  cart-link="html/carrito.html"
  login-link="html/login.html"
  productFruta-link="html/productos.html?category=fruta"
  productVerdura-link="html/productos.html?category=verdura"
  productOferta-link="html/productos.html?category=oferta"
  productLocal-link="html/productos.html?category=local"
  producto-link="html/productos.html"
  nosotros-link="html/nosotros.html"
  contacto-link="html/contacto.html"
  ></custom-header>






  <!-- Banner full-screen -->
  <section class="hero-banner d-flex align-items-center">
    <div class="container d-flex flex-wrap align-items-center justify-content-between">
      <div class="text-white col-md-6">
        <h1>Compra y vende sano</h1>
        <p>Compra a productores locales o vende tus productos.</p>
        <a href="#" class="btn btn-light">Saber más</a>
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
            <span>Frutas</span>
          </button>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/house-heart-fill.svg">
            <span>Verduras</span>
          </button>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/house-heart-fill.svg">
            <span>Ofertas</span>
          </button>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <button class="btn-category d-flex flex-column align-items-center justify-content-center">
            <img src="img/house-heart-fill.svg">
            <span>Locales</span>
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
        <div class="carousel-inner">

          <!-- Slide 1 -->
          <section class="carousel-item active">
            <div class="row">
              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="img/manzana.svg" class="card-img-top" alt="Manzanas">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">3,00 €</p>
                    <p class="text-muted mb-0">Manzanas rojas</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Zanahorias" class="card-img-top"
                    alt="Zanahorias">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,50 €</p>
                    <p class="text-muted mb-0">Zanahorias frescas</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Tomates" class="card-img-top" alt="Tomates">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,20 €</p>
                    <p class="text-muted mb-0">Tomates cherry</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Limones" class="card-img-top" alt="Limones">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,80 €</p>
                    <p class="text-muted mb-0">Limones orgánicos</p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </section>

          <!-- Slide 2 -->
          <section class="carousel-item">
            <div class="row">
              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Fresas" class="card-img-top" alt="Fresas">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,90 €</p>
                    <p class="text-muted mb-0">Fresas dulces</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Aguacates" class="card-img-top"
                    alt="Aguacates">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">3,50 €</p>
                    <p class="text-muted mb-0">Aguacates maduros</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Plátanos" class="card-img-top" alt="Plátanos">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,10 €</p>
                    <p class="text-muted mb-0">Plátanos de Canarias</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Pepinos" class="card-img-top" alt="Pepinos">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,30 €</p>
                    <p class="text-muted mb-0">Pepinos verdes</p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </section>

          <!-- Slide 3 -->
          <section class="carousel-item">
            <div class="row">
              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Lechuga" class="card-img-top" alt="Lechuga">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,00 €</p>
                    <p class="text-muted mb-0">Lechuga romana</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Uvas" class="card-img-top" alt="Uvas">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,70 €</p>
                    <p class="text-muted mb-0">Uvas sin semillas</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Peras" class="card-img-top" alt="Peras">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,30 €</p>
                    <p class="text-muted mb-0">Peras conferencia</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Cebollas" class="card-img-top" alt="Cebollas">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,10 €</p>
                    <p class="text-muted mb-0">Cebollas dulces</p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </section>

        </div>

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
        <div class="carousel-inner">

          <!-- Slide 1 -->
          <section class="carousel-item active">
            <div class="row">
              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="img/manzana.svg" class="card-img-top" alt="Manzanas">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">3,00 €</p>
                    <p class="text-muted mb-0">Manzanas rojas</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Zanahorias" class="card-img-top"
                    alt="Zanahorias">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,50 €</p>
                    <p class="text-muted mb-0">Zanahorias frescas</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Tomates" class="card-img-top" alt="Tomates">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,20 €</p>
                    <p class="text-muted mb-0">Tomates cherry</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Limones" class="card-img-top" alt="Limones">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,80 €</p>
                    <p class="text-muted mb-0">Limones orgánicos</p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </section>

          <!-- Slide 2 -->
          <section class="carousel-item">
            <div class="row">
              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Fresas" class="card-img-top" alt="Fresas">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,90 €</p>
                    <p class="text-muted mb-0">Fresas dulces</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Aguacates" class="card-img-top"
                    alt="Aguacates">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">3,50 €</p>
                    <p class="text-muted mb-0">Aguacates maduros</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Plátanos" class="card-img-top" alt="Plátanos">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,10 €</p>
                    <p class="text-muted mb-0">Plátanos de Canarias</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Pepinos" class="card-img-top" alt="Pepinos">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,30 €</p>
                    <p class="text-muted mb-0">Pepinos verdes</p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </section>

          <!-- Slide 3 -->
          <section class="carousel-item">
            <div class="row">
              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Lechuga" class="card-img-top" alt="Lechuga">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,00 €</p>
                    <p class="text-muted mb-0">Lechuga romana</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Uvas" class="card-img-top" alt="Uvas">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,70 €</p>
                    <p class="text-muted mb-0">Uvas sin semillas</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Peras" class="card-img-top" alt="Peras">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">2,30 €</p>
                    <p class="text-muted mb-0">Peras conferencia</p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-md-3 d-none d-md-block">
                <figure class="card h-100">
                  <img src="https://via.placeholder.com/200x180.png?text=Cebollas" class="card-img-top" alt="Cebollas">
                  <figcaption class="card-body">
                    <p class="fw-bold mb-1">1,10 €</p>
                    <p class="text-muted mb-0">Cebollas dulces</p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </section>

        </div>

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