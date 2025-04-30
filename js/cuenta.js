$(document).ready(function () {
  $('[data-section]').on('click', function (e) {
    e.preventDefault();
    $('[data-section]').removeClass('active');
    $(this).addClass('active');

    const section = $(this).data('section');

    // Función para renderizar contenido en ambos modos
    function renderizarSeccion() {
      switch (section) {
        case 'productos': return cargarProductos;
        case 'perfil': return cargarPerfil;
        case 'favoritos': return cargarFavoritos;
        case 'compras': return cargarCompras;
        case 'pedidos': return cargarPedidos;
        case 'alertas': return cargarAlertas;
        case 'seguridad': return cargarSeguridad;
        default: return () => $panel.html('<p>Sección no encontrada</p>');
      }
    }

    if (window.innerWidth < 768) {
      renderizarSeccion = renderizarSeccion();
      renderizarSeccion(); // ejecuta la función

      // Copiar el HTML generado al #offcanvas-body
      $('#offcanvas-body').html($('#panel-content').html());

      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    } else {
      renderizarSeccion = renderizarSeccion();
      renderizarSeccion(); // solo ejecuta
    }
  });


  const $panel = $('#panel-content');
  const toast = new bootstrap.Toast($('#toastConfirmacion'));

  function showToast(mensaje) {
    $('#toastConfirmacion .toast-body').text(mensaje);
    toast.show();
  }

  function cargarProductos() {
    $('.modal').modal('hide');
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
                  <button class="btn btn-outline-primary btn-sm btn-editar editar-producto">Editar</button>
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
      <button class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#modalCrearAlerta">+ Añadir alerta</button>
      <div class="row g-4" id="lista-alertas">
        <div class="col-md-4 alerta" data-id="1">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Alerta de Seguridad</h5>
              <p class="card-text">Una alerta que te notificará sobre problemas de seguridad.</p>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="alertaSwitch1">
                <label class="form-check-label" for="alertaSwitch1">Activar Alerta</label>
              </div>
              <div class="d-flex justify-content-between mt-3">
                <button class="btn btn-outline-primary btn-sm btn-editar editar-alerta">Editar</button>
                <button class="btn btn-outline-danger btn-sm btn-eliminar">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>`).fadeIn();
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



















//AÑADIR PRODUCTO
$(document).on('click', '[data-bs-target="#modalProducto"]', function () {
  if (window.innerWidth < 768) {
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasContent'));
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  }
});
  // Previsualizar imagen al seleccionar archivo
$('#nuevoImagen').on('change', function () {
  const file = this.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      $('#previewNueva').attr('src', e.target.result).removeClass('d-none');
    };
    reader.readAsDataURL(file);
  } else {
    $('#previewNueva').attr('src', '').addClass('d-none');
  }
});

// Manejo del formulario para añadir nuevo producto
$('#formNuevoProducto').on('submit', function (e) {
  e.preventDefault();

  const nombre = $('#nuevoNombre').val();
  const precio = $('#nuevoPrecio').val();
  const fileInput = $('#nuevoImagen')[0];
  const file = fileInput.files[0];

  // Validaciones
  if (!file) {
    alert('Por favor selecciona una imagen.');
    return;
  }

  if (!file.type.startsWith('image/')) {
    alert('El archivo seleccionado no es una imagen válida.');
    $('#nuevoImagen').val('');
    return;
  }

  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    alert('La imagen no debe superar los 5 MB.');
    return;
  }

  // Leer la imagen como Base64 y crear el producto
  const reader = new FileReader();
  reader.onload = function (event) {
    const imageBase64 = event.target.result;

    const producto = $(`
      <div class="col-md-4 producto">
        <div class="card">
          <img src="${imageBase64}" class="card-img-top" alt="${nombre}">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">Precio: ${precio}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-outline-primary btn-sm btn-editar">Editar</button>
              <button class="btn btn-outline-danger btn-sm btn-eliminar">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    `).hide();

    const contenedor = window.innerWidth < 768
      ? $('#offcanvas-body #lista-productos')
      : $('#panel-content #lista-productos');

    contenedor.prepend(producto);
    producto.fadeIn();

    $('#modalProducto').modal('hide');
    showToast('Producto añadido');
    $('#formNuevoProducto')[0].reset();
    $('#previewNueva').attr('src', '').addClass('d-none');
  };

  reader.readAsDataURL(file);
});




















let productoEditando = null;
// Abrir modal de edición
$(document).on('click', '.editar-producto', function () {
  if (window.innerWidth < 768) {
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasContent'));
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  }
  productoEditando = $(this).closest('.producto');

  const nombre = productoEditando.find('.card-title').text();
  const precio = productoEditando.find('.card-text').text().replace('Precio: ', '');
  const imagen = productoEditando.find('img').attr('src');

  $('#editarNombre').val(nombre);
  $('#editarPrecio').val(precio);

  // Mostramos la imagen actual en una etiqueta img aparte
  $('#previewEditar').attr('src', imagen).removeClass('d-none');

  // Limpiamos el input file
  $('#editarImagen').val('');

  $('#modalEditarProducto').modal('show');
});

// Previsualizar nueva imagen al editar
$('#editarImagen').on('change', function () {
  const file = this.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      $('#previewEditar').attr('src', e.target.result).removeClass('d-none');
    };
    reader.readAsDataURL(file);
  } else {
    $('#previewEditar').attr('src', '').addClass('d-none');
  }
});

// Guardar cambios de edición
$('#formEditarProducto').on('submit', function (e) {
  e.preventDefault();

  const nuevoNombre = $('#editarNombre').val();
  const nuevoPrecio = $('#editarPrecio').val();
  const fileInput = $('#editarImagen')[0];
  const file = fileInput.files[0];

  if (file) {
    if (!file.type.startsWith('image/')) {
      alert('El archivo seleccionado no es una imagen válida.');
      $('#editarImagen').val('');
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('La imagen no debe superar los 5 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const nuevaImagen = event.target.result;

      productoEditando.find('.card-title').text(nuevoNombre);
      productoEditando.find('.card-text').text('Precio: ' + nuevoPrecio);
      productoEditando.find('img').attr('src', nuevaImagen);

      $('#modalEditarProducto').modal('hide');
      showToast('Producto actualizado');
    };
    reader.readAsDataURL(file);
  } else {
    // Solo actualiza nombre y precio si no hay nueva imagen
    productoEditando.find('.card-title').text(nuevoNombre);
    productoEditando.find('.card-text').text('Precio: ' + nuevoPrecio);
    $('#modalEditarProducto').modal('hide');
    showToast('Producto actualizado');
  }
});














// crear alerta

$(document).on('click', '[data-bs-target="#modalCrearAlerta"]', function () {
  if (window.innerWidth < 768) {
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasContent'));
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  }
});


















// Evento para editar alerta
$(document).on('click', '.editar-alerta', function() {
  if (window.innerWidth < 768) {
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasContent'));
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  }
  var alertaCard = $(this).closest('.alerta');
  
  // Obtener los datos actuales de la alerta
  var alertaId = alertaCard.data('id');
  var alertaNombre = alertaCard.find('.card-title').text();
  var alertaDescripcion = alertaCard.find('.card-text').text();
  var alertaActivada = alertaCard.find('.form-check-input').prop('checked');
  
  // Mostrar el modal
  $('#modalModificarAlerta').modal('show');

  // Cambiar el título del modal a "Editar Alerta"
  $('#modalModificarAlertaLabel').text('Editar alerta por correo');

  // Llenar el formulario con los datos de la alerta
  $('#alertaPalabraClave').val(alertaNombre);
  $('#alertaCategoria').val(''); // O lo que corresponda a la categoría
  $('#alertaFrecuencia').val('inmediata'); // Puedes adaptar esto también
  $('#alertaEmail').val(''); // Aquí iría el email si fuera necesario
  $('#alertaActiva').prop('checked', alertaActivada);

  // Cuando se haga clic en "Crear alerta", actualizar los datos
  $('#formCrearAlerta').off('submit').on('submit', function(event) {
      event.preventDefault();

      var nombre = $('#alertaPalabraClave').val();
      var descripcion = $('#alertaDescripcion').val(); // O ajusta si necesitas otro campo
      var categoria = $('#alertaCategoria').val();
      var frecuencia = $('#alertaFrecuencia').val();
      var email = $('#alertaEmail').val();
      var activa = $('#alertaActiva').prop('checked');

      // Aquí puedes hacer lo que necesites, como actualizar el DOM o enviar los datos al servidor
      alertaCard.find('.card-title').text(nombre);
      alertaCard.find('.card-text').text(descripcion);  // Modifica lo que necesitas en la alerta
      alertaCard.find('.form-check-input').prop('checked', activa);

      // Cerrar el modal
      $('#modalModificarAlerta').modal('hide');
  });
});






















  // Eliminar producto
  $(document).on('click', '.btn-eliminar', function () {
    const card = $(this).closest('.producto');
    card.fadeOut(() => card.remove());
    showToast('Producto eliminado');
  });









  
  // Cargar sección inicial
  cargarProductos();
  $('#modalProducto').on('hidden.bs.modal', function () {
    // Siempre eliminar cualquier backdrop colgado
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open').css('padding-right', '');
  
    // Si estamos en móvil, volver a mostrar el offcanvas
    if (window.innerWidth < 768) {
      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }
  });
  $('#modalEditarProducto').on('hidden.bs.modal', function () {
    // Siempre eliminar cualquier backdrop colgado
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open').css('padding-right', '');
  
    // Si estamos en móvil, volver a mostrar el offcanvas
    if (window.innerWidth < 768) {
      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }
  });
  $('#modalCrearAlerta').on('hidden.bs.modal', function () {
    // Siempre eliminar cualquier backdrop colgado
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open').css('padding-right', '');
  
    // Si estamos en móvil, volver a mostrar el offcanvas
    if (window.innerWidth < 768) {
      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }
  });
  $('#modalModificarAlerta').on('hidden.bs.modal', function () {
    // Siempre eliminar cualquier backdrop colgado
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open').css('padding-right', '');
  
    // Si estamos en móvil, volver a mostrar el offcanvas
    if (window.innerWidth < 768) {
      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }
  });
});
