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

  <!-- Sidebar + Panel -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 bg-light sidebar pt-4">
        <ul class="nav flex-column">
          <?php 
          $isAdmin = isset($_SESSION['usuario_admin']) && $_SESSION['usuario_admin'] == true;
          if (!$isAdmin){ ?>
            <li class="nav-item"><a class="nav-link <?php if(!$isAdmin){echo "active";}?>" href="#" data-section="productos">Mis productos</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="perfil">Editar perfil</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="favoritos">Mis favoritos</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="compras">Mis compras</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="pedidos">Mis pedidos</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="alertas">Mis alertas</a></li>
            <li class="nav-item"><a class="nav-link" href="#" data-section="seguridad">Seguridad</a></li>
          <?php }else{ ?>
            <li class="nav-item"><a class="nav-link <?php if($isAdmin){echo "active";}?>" href="#" data-section="admin-productos">Gestionar productos</a></li>
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
        <!-- Nombre -->
        <div class="mb-3">
          <label class="form-label" for="nuevoNombre">Nombre</label>
          <input type="text" class="form-control" id="nuevoNombre" name="nombre" required>
        </div>

        <!-- Descripción -->
        <div class="mb-3">
          <label class="form-label" for="nuevoDescripcion">Descripción</label>
          <textarea class="form-control" id="nuevoDescripcion" name="descripcion" rows="3"></textarea>
        </div>

        <!-- Imagen -->
        <div class="mb-3">
          <label class="form-label">Imagen</label>
          <input type="file" class="form-control" id="nuevoImagen" name="imagen" accept="image/*" required>
          <!-- Imagen de previsualización -->
          <img id="previewNueva" class="img-fluid mt-2 d-none" alt="Previsualización imagen" />
        </div>

        <!-- Fecha de Producción -->
        <div class="mb-3">
          <label class="form-label" for="nuevoFechaProduccion">Fecha de Producción</label>
          <input type="date" class="form-control" id="nuevoFechaProduccion" name="fecha_produccion">
        </div>

        <!-- Unidad de Medida -->
        <div class="mb-3">
          <label class="form-label" for="nuevoUnidadMedida">Unidad de Medida</label>
          <input type="text" class="form-control" id="nuevoUnidadMedida" name="unidad_medida" placeholder="Ej: kg, litro, unidad">
        </div>

        <!-- Precio Actual -->
        <div class="mb-3">
          <label class="form-label" for="nuevoPrecio">Precio</label>
          <input type="number" class="form-control" id="nuevoPrecio" name="precio_actual" step="0.01" required>
        </div>

        <!-- Categoría -->
        <div class="mb-3">
          <label class="form-label" for="nuevoCategoria">Categoría</label>
          <select class="form-select" id="nuevoCategoria" name="categoria_id">
            <option value="">-- Selecciona una categoría --</option>
            <option value="cat-bbb-002">fruta</option>
          </select>
        </div>

      <div class="modal-footer">
        <button type="submit" class="btn btn-success">Guardar</button>
      </div>
    </form>
  </div>
</div>
</div>

  <!-- Modal Editar Producto -->
<div class="modal fade" id="modalEditarProducto" tabindex="-1" aria-labelledby="modalEditarProductoLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content" id="formEditarProducto" enctype="multipart/form-data">
      
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarProductoLabel">Editar Producto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <input type="hidden" id="editarProductoId" name="id">
          <div class="form-group">
            <label for="editarNombre">Nombre</label>
            <input type="text" class="form-control" id="editarNombre" name="nombre" required>
          </div>
          <div class="form-group">
            <label for="editarDescripcion">Descripción</label>
            <textarea class="form-control" id="editarDescripcion" name="descripcion" required></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Imagen</label>
            <input type="file" class="form-control" id="editarImagen" name="imagen" accept="image/*">
            <!-- Imagen de previsualización -->
          <img id="previewEditar" class="img-fluid mt-2 d-none" alt="Previsualización imagen" />
          </div>
          <div class="form-group">
            <label for="editarFechaProduccionProducto">Fecha de Producción</label>
            <input type="date" class="form-control" id="editarFechaProduccionProducto" name="fecha_produccion">
          </div>
          <div class="form-group">
            <label for="editarUnidadProducto">Unidad de Medida</label>
            <input type="text" class="form-control" id="editarUnidadProducto" name="unidad_medida">
          </div>
          <div class="form-group">
            <label for="editarPrecioProducto">Precio</label>
            <input type="number" step="0.01" class="form-control" id="editarPrecioProducto" name="precio_actual">
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success">Guardar Cambios</button>
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

<!-- Modal Editar Producto -->
<div class="modal fade" id="modalEditarProductoAdmin" tabindex="-1" role="dialog" aria-labelledby="modalEditarProductoAdminLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <form id="formEditarProductoAdmin">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarProductoAdminLabel">Editar Producto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <input type="hidden" id="editarProductoIdAdmin" name="id">
          <div class="form-group">
            <label for="editarNombreAdmin">Nombre</label>
            <input type="text" class="form-control" id="editarNombreAdmin" name="nombre" required>
          </div>
          <div class="form-group">
            <label for="editarDescripcionAdmin">Descripción</label>
            <textarea class="form-control" id="editarDescripcionAdmin" name="descripcion" required></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Imagen</label>
            <input type="file" class="form-control" id="editarImagenAdmin" name="imagen" accept="image/*">
            <!-- Imagen de previsualización -->
          <img id="previewEditarAdmin" class="img-fluid mt-2 d-none" alt="Previsualización imagen" />
          </div>
          <input type="hidden" id="editarImagenUrl" name="imagen_url">
          <div class="form-group">
            <label for="editarFechaProduccionAdmin">Fecha de Producción</label>
            <input type="date" class="form-control" id="editarFechaProduccionAdmin" name="fecha_produccion">
          </div>
          <div class="form-group">
            <label for="editarUnidadMedidaAdmin">Unidad de Medida</label>
            <input type="text" class="form-control" id="editarUnidadMedidaAdmin" name="unidad_medida">
          </div>
          <div class="form-group">
            <label for="editarPrecioAdmin">Precio</label>
            <input type="number" step="0.01" class="form-control" id="editarPrecioAdmin" name="precio_actual">
          </div>
          <div class="form-group">
            <label for="editarVendidoAdmin">Vendido</label>
            <select class="form-control" id="editarVendidoAdmin" name="vendido">
              <option value="1">Sí</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success">Guardar Cambios</button>
        </div>
      </div>
    </form>
  </div>
</div>

<!-- Modal Editar Usuario -->
<div class="modal fade" id="modalEditarUsuario" tabindex="-1" role="dialog" aria-labelledby="modalEditarUsuarioLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <form id="formEditarUsuario">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarUsuarioLabel">Editar Usuario</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <input type="hidden" id="editarUsuarioId" name="id">
          <div class="form-group">
            <label for="editarNombreUsuario">Nombre</label>
            <input type="text" class="form-control" id="editarNombreUsuario" name="nombre" required>
          </div>
          <div class="form-group">
            <label for="editarEmailUsuario">Email</label>
            <input type="email" class="form-control" id="editarEmailUsuario" name="email" required>
          </div>
          <div class="form-group">
            <label for="editarTelefonoUsuario">Teléfono</label>
            <input type="text" class="form-control" id="editarTelefonoUsuario" name="telefono">
          </div>
          <div class="form-group">
            <label for="editarDireccionUsuario">Dirección</label>
            <input type="text" class="form-control" id="editarDireccionUsuario" name="direccion">
          </div>
          <div class="form-group">
            <label for="editarAdministradorUsuario">Administrador</label>
            <select class="form-control" id="editarAdministradorUsuario" name="administrador">
              <option value="1">Sí</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success">Guardar Cambios</button>
        </div>
      </div>
    </form>
  </div>
</div>

<!-- Modal Editar Compra -->
<div class="modal fade" id="modalEditarCompra" tabindex="-1" role="dialog" aria-labelledby="modalEditarCompraLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <form id="formEditarCompra">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarCompraLabel">Editar Compra</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <input type="hidden" id="editarCompraId" name="id">
          <div class="form-group">
            <label for="editarNombrePagador">Nombre del Pagador</label>
            <input type="text" class="form-control" id="editarNombrePagador" name="nombre_pagador" required>
          </div>
          <div class="form-group">
            <label for="editarDestinatario">Destinatario</label>
            <input type="text" class="form-control" id="editarDestinatario" name="destinatario" required>
          </div>
          <div class="form-group">
            <label for="editarDireccionEntrega">Dirección de Entrega</label>
            <textarea class="form-control" id="editarDireccionEntrega" name="direccion_entrega" required></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success">Guardar Cambios</button>
        </div>
      </div>
    </form>
  </div>
</div>

<!-- Modal Modificar Alerta -->
<div class="modal fade" id="modalModificarAlertaAdmin" tabindex="-1" aria-labelledby="modalModificarAlertaAdminLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content" id="formCrearAlertaAdmin">
      <div class="modal-header">
        <h5 class="modal-title" id="modalModificarAlertaAdminLabel">Modificar alerta</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <input type="hidden" id="editarAlertaIdAdmin" name="id">
        <div class="mb-3">
          <label for="alertaPalabraClaveAdmin" class="form-label">Palabra clave</label>
          <input type="text" class="form-control" id="alertaPalabraClaveAdmin" name="palabra_clave" placeholder="Ej: Python, Marketing, Zapatos" required>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="alertaActivaAdmin" name="activa" checked>
          <label class="form-check-label" for="alertaActivaAdmin">
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

<!-- Modal Editar Pedido -->
<div class="modal fade" id="modalEditarPedido" tabindex="-1" role="dialog" aria-labelledby="modalEditarPedidoLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <form id="formEditarPedido">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarPedidoLabel">Editar Pedido</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <input type="hidden" id="editarPedidoId" name="id">
          <div class="form-group">
            <label for="editarEstadoPedido">Estado</label>
            <select class="form-control" id="editarEstadoPedido" name="estado" required>
              <option value="Pendiente">Pendiente</option>
              <option value="Procesando">Procesando</option>
              <option value="Enviado">Enviado</option>
              <option value="Entregado">Entregado</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
          <div class="form-group">
            <label for="editarNotasPedido">Notas</label>
            <textarea class="form-control" id="editarNotasPedido" name="notas"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success">Guardar Cambios</button>
        </div>
      </div>
    </form>
  </div>
</div>

<!-- Modal Editar Categoría -->
<div class="modal fade" id="modalEditarCategoria" tabindex="-1" role="dialog" aria-labelledby="modalEditarCategoriaLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <form id="formEditarCategoria">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditarCategoriaLabel">Editar Categoría</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <input type="hidden" id="editarCategoriaId" name="id">
          <div class="form-group">
            <label for="editarNombreCategoria">Nombre</label>
            <input type="text" class="form-control" id="editarNombreCategoria" name="nombre" required>
          </div>
          <div class="form-group">
            <label for="editarDescripcionCategoria">Descripción</label>
            <textarea class="form-control" id="editarDescripcionCategoria" name="descripcion"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success">Guardar Cambios</button>
        </div>
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
<div class="offcanvas offcanvas-start custom-offcanvas d-md-none" tabindex="-1" id="offcanvasContent" aria-labelledby="offcanvasContentLabel">
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