<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mi Cuenta - Marketplace</title>

  <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="../css/index.css" />
  <link rel="stylesheet" href="../css/cuenta.css" />
  <script src="../bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../js/jquery-3.7.1.min.js"></script>
  <script src="../js/cuenta.js"></script>
  <script type="module" src="../components/index.js"></script>
</head>
<body>

 <!-- Header -->
 <custom-header 
 bootstrap-css="../bootstrap/css/bootstrap.min.css" 
 custom-css="../css/index.css" 
 ruta-html="../components/header/header-template.html"
 bootstrap-js="../bootstrap/js/bootstrap.bundle.min.js"
 jquery-js="../js/jquery-3.7.1.min.js"
 index-link="../index.html"
 logo-link="../img/house-heart-fill.svg"
 search-link="productos.html"
 cart-link="carrito.html"
 login-link="login.html"
 productFruta-link="productos.html?category=fruta"
 productVerdura-link="productos.html?category=verdura"
 productOferta-link="productos.html?category=oferta"
 productLocal-link="productos.html?category=local"
 producto-link="productos.html"
 nosotros-link="nosotros.html"
 contacto-link="contacto.html"
 ></custom-header>

  <!-- Sidebar + Panel -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 bg-light sidebar pt-4">
        <ul class="nav flex-column">
          <?php 
          session_start();
          $_SESSION['admin']=false;
          $isAdmin = isset($_SESSION['admin']) && $_SESSION['admin'] === true;
          if (!$isAdmin){ ?>
            <li class="nav-item"><a class="nav-link active" href="#" data-section="productos">Mis productos</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="perfil">Editar perfil</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="favoritos">Mis favoritos</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="compras">Mis compras</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="pedidos">Mis pedidos</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="alertas">Mis alertas</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="seguridad">Seguridad</a></li>
          <?php }else{ ?>
            <li class="nav-item"><a class="nav-link" href="#" data-section="admin-productos">Gestionar productos</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="admin-usuarios">Gestionar usuarios</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="admin-compras">Gestionar compras</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="admin-alertas">Gestionar alertas</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="admin-pedidos">Gestionar pedidos</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="admin-categorias">Gestionar categorías</a></li>
          <?php }
          session_write_close(); ?>
        </ul>
      </div>
      <div class="col-md-9 p-4 d-none d-md-block" id="panel-content">
        <!-- Aquí se cargará el contenido dinámico -->
      </div>
    </div>
  </div>

  <!-- Modal Añadir Producto -->
<div class="modal fade" id="modalProducto" tabindex="-1" aria-labelledby="modalProductoLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content" id="formNuevoProducto" enctype="multipart/form-data">
      <div class="modal-header">
        <h5 class="modal-title" id="modalProductoLabel">Añadir producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nuevoNombre" name="nombre" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Precio</label>
          <input type="text" class="form-control" id="nuevoPrecio" name="precio" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Imagen</label>
          <input type="file" class="form-control" id="nuevoImagen" name="imagen" accept="image/*" required>
          <!-- Imagen de previsualización -->
          <img id="previewNueva" class="img-fluid mt-2 d-none" alt="Previsualización imagen" />
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-success">Guardar</button>
      </div>
    </form>
  </div>
</div>

  <!-- Modal Editar Producto -->
<div class="modal fade" id="modalEditarProducto" tabindex="-1" aria-labelledby="modalEditarProductoLabel" aria-hidden="true">
    <div class="modal-dialog">
      <form class="modal-content" id="formEditarProducto" enctype="multipart/form-data">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarProductoLabel">Editar producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" id="editarNombre" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Precio</label>
            <input type="text" class="form-control" id="editarPrecio" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Imagen</label>
            <input type="file" class="form-control" id="editarImagen" name="imagen" accept="image/*">
            <!-- Imagen de previsualización -->
          <img id="previewEditar" class="img-fluid mt-2 d-none" alt="Previsualización imagen" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">Guardar cambios</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Modal Crear Alerta -->
<div class="modal fade" id="modalCrearAlerta" tabindex="-1" aria-labelledby="modalCrearAlertaLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content" id="formCrearAlerta">
      <div class="modal-header">
        <h5 class="modal-title" id="modalCrearAlertaLabel">Crear alerta por correo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="alertaPalabraClave" class="form-label">Palabra clave</label>
          <input type="text" class="form-control" id="alertaPalabraClave" name="palabra_clave" placeholder="Ej: Python, Marketing, Zapatos" required>
        </div>
        <div class="mb-3">
          <label for="alertaCategoria" class="form-label">Categoría (opcional)</label>
          <select class="form-select" id="alertaCategoria" name="categoria">
            <option value="">-- Selecciona una categoría --</option>
            <option value="tecnologia">Tecnología</option>
            <option value="moda">Moda</option>
            <option value="negocios">Negocios</option>
            <option value="hogar">Hogar</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="alertaFrecuencia" class="form-label">Frecuencia</label>
          <select class="form-select" id="alertaFrecuencia" name="frecuencia" required>
            <option value="inmediata">Inmediatamente</option>
            <option value="diaria">Una vez al día</option>
            <option value="semanal">Una vez a la semana</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="alertaEmail" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="alertaEmail" name="email" required>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="alertaActiva" name="activa" checked>
          <label class="form-check-label" for="alertaActiva">
            Activar alerta inmediatamente
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-success">Crear alerta</button>
      </div>
    </form>
  </div>
</div>
<!-- Modal Modificar Alerta -->
<div class="modal fade" id="modalModificarAlerta" tabindex="-1" aria-labelledby="modalModificarAlertaLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content" id="formCrearAlerta">
      <div class="modal-header">
        <h5 class="modal-title" id="modalModificarAlertaLabel">Modificar alerta</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="alertaPalabraClave" class="form-label">Palabra clave</label>
          <input type="text" class="form-control" id="alertaPalabraClave" name="palabra_clave" placeholder="Ej: Python, Marketing, Zapatos" required>
        </div>
        <div class="mb-3">
          <label for="alertaCategoria" class="form-label">Categoría (opcional)</label>
          <select class="form-select" id="alertaCategoria" name="categoria">
            <option value="">-- Selecciona una categoría --</option>
            <option value="tecnologia">Tecnología</option>
            <option value="moda">Moda</option>
            <option value="negocios">Negocios</option>
            <option value="hogar">Hogar</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="alertaFrecuencia" class="form-label">Frecuencia</label>
          <select class="form-select" id="alertaFrecuencia" name="frecuencia" required>
            <option value="inmediata">Inmediatamente</option>
            <option value="diaria">Una vez al día</option>
            <option value="semanal">Una vez a la semana</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="alertaEmail" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="alertaEmail" name="email" required>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="alertaActiva" name="activa" checked>
          <label class="form-check-label" for="alertaActiva">
            Activar alerta inmediatamente
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-success">Guardar cambios</button>
      </div>
    </form>
  </div>
</div>

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
  <!-- Offcanvas solo en móviles -->
<div class="offcanvas offcanvas-start d-md-none" tabindex="-1" id="offcanvasContent" aria-labelledby="offcanvasContentLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasContentLabel">Mi Cuenta</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
    </div>
    <div class="offcanvas-body d-md-none" id="offcanvas-body">
      <!-- Aquí se carga el contenido dinámico en móviles -->
    </div>
  </div>
</body>
</html>