$(document).ready(function () {
    const $panel = $('#panel-content');
    const toast = new bootstrap.Toast($('#toastConfirmacion'));

    function showToast(mensaje) {
        $('#toastConfirmacion .toast-body').text(mensaje);
        toast.show();
    }

    function cargarProductos() {
        $panel.hide().html(`
        <h2>Mis productos</h2>
        <button class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#modalProducto">+ Añadir producto</button>
        <div class="row g-4" id="lista-productos">
          <div class="col-md-4 producto">
            <div class="card">
              <img src="../img/manzana.svg" class="card-img-top" alt="Manzanas">
              <div class="card-body">
                <h5 class="card-title">Manzanas</h5>
                <p class="card-text">Precio: $2.50/kg</p>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-primary btn-sm btn-editar">Editar</button>
                  <button class="btn btn-outline-danger btn-sm btn-eliminar">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </div>`).fadeIn();
    }

    function cargarAlertas() {
        $panel.hide().html(`
        <h2>Mis alertas</h2>
        <button class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#modalProducto">+ Añadir alerta</button>
        `).fadeIn();
    }

    function cargarPerfil() {
        $panel.hide().html(`
        <h2>Editar perfil</h2>
        <form class="mt-3">
          <div class="mb-3">
            <label class="form-label">Nombre completo</label>
            <input type="text" class="form-control" value="Juan Pérez">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" value="juan@example.com">
          </div>
          <div class="mb-3">
            <label class="form-label">Teléfono</label>
            <input type="tel" class="form-control" value="123456789">
          </div>
          <button class="btn btn-primary" type="button" onclick="showToast('Perfil actualizado')">Guardar cambios</button>
        </form>`).fadeIn();
    }

    function cargarFavoritos() {
        $panel.hide().html(`<h2>Mis favoritos</h2><p>Aquí aparecerán tus articulos favoritos.</p>`).fadeIn();
    }

    function cargarCompras() {
        $panel.hide().html(`<h2>Mis compras</h2><p>Aquí aparecerán tus compras realizadas.</p>`).fadeIn();
    }

    function cargarPedidos() {
        $panel.hide().html(`<h2>Mis pedidos</h2><p>Consulta el estado de tus pedidos como vendedor.</p>`).fadeIn();
    }

    function cargarSeguridad() {
        $panel.hide().html(`
        <h2>Seguridad</h2>
        <form class="mt-3">
          <div class="mb-3">
            <label class="form-label">Contraseña actual</label>
            <input type="password" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label">Nueva contraseña</label>
            <input type="password" class="form-control">
          </div>
          <button class="btn btn-danger" type="button" onclick="showToast('Contraseña actualizada')">Actualizar contraseña</button>
        </form>`).fadeIn();
    }

    // Navegación lateral
    $('[data-section]').on('click', function (e) {
        e.preventDefault();
        $('[data-section]').removeClass('active');
        $(this).addClass('active');

        const section = $(this).data('section');
        switch (section) {
            case 'productos': cargarProductos(); break;
            case 'perfil': cargarPerfil(); break;
            case 'favoritos': cargarFavoritos(); break;
            case 'compras': cargarCompras(); break;
            case 'pedidos': cargarPedidos(); break;
            case 'alertas': cargarAlertas(); break;
            case 'seguridad': cargarSeguridad(); break;
        }
    });

    // Añadir producto
    $('#formNuevoProducto').on('submit', function (e) {
        e.preventDefault();
        const nombre = $('#nuevoNombre').val();
        const precio = $('#nuevoPrecio').val();
        const imagen = $('#nuevoImagen').val();

        const producto = $(`
        <div class="col-md-4 producto">
          <div class="card">
            <img src="${imagen}" class="card-img-top" alt="${nombre}">
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">Precio: ${precio}</p>
              <div class="d-flex justify-content-between">
                <button class="btn btn-outline-primary btn-sm btn-editar">Editar</button>
                <button class="btn btn-outline-danger btn-sm btn-eliminar">Eliminar</button>
              </div>
            </div>
          </div>
        </div>`).hide();

        $('#lista-productos').prepend(producto);
        producto.fadeIn();
        $('#modalProducto').modal('hide');
        showToast('Producto añadido');
        this.reset();
    });

    // Editar producto - abrir modal
    let productoEditando = null;

    $(document).on('click', '.btn-editar', function () {
        productoEditando = $(this).closest('.producto');

        const nombre = productoEditando.find('.card-title').text();
        const precio = productoEditando.find('.card-text').text().replace('Precio: ', '');
        const imagen = productoEditando.find('img').attr('src');

        $('#editarNombre').val(nombre);
        $('#editarPrecio').val(precio);
        $('#editarImagen').val(imagen);

        $('#modalEditarProducto').modal('show');
    });

    // Guardar cambios de edición
    $('#formEditarProducto').on('submit', function (e) {
        e.preventDefault();

        const nuevoNombre = $('#editarNombre').val();
        const nuevoPrecio = $('#editarPrecio').val();
        const nuevaImagen = $('#editarImagen').val();

        productoEditando.find('.card-title').text(nuevoNombre);
        productoEditando.find('.card-text').text('Precio: ' + nuevoPrecio);
        productoEditando.find('img').attr('src', nuevaImagen);

        $('#modalEditarProducto').modal('hide');
        showToast('Producto actualizado');
    });


    // Eliminar producto
    $(document).on('click', '.btn-eliminar', function () {
        const card = $(this).closest('.producto');
        card.fadeOut(() => card.remove());
        showToast('Producto eliminado');
    });

    // Cargar sección inicial
    cargarProductos();
});
