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
        case 'admin-productos': return cargarAdminProductos;
        case 'admin-usuarios': return cargarAdminUsuarios; //CORREGIR DATOOOOOOOOOOOOOOOOOOOOOOOOOOS
        case 'admin-compras': return cargarAdminCompras; //CORREGIR DATOOOOOOOOOOOOOOOOOOOOOOOOOOS
        case 'admin-alertas': return cargarAdminAlertas; //CORREGIR DATOOOOOOOOOOOOOOOOOOOOOOOOOOS
        case 'admin-pedidos': return cargarAdminPedidos; //CORREGIR DATOOOOOOOOOOOOOOOOOOOOOOOOOOS
        case 'admin-categorias': return cargarAdminCategorias; //CORREGIR DATOOOOOOOOOOOOOOOOOOOOOOOOOOS
        default: return () => $panel.html('<p>Sección no encontrada</p>');
      }
    }

      
    if (window.innerWidth < 768) {
      renderizarSeccion = renderizarSeccion();
      renderizarSeccion();

      // Copiar el HTML generado al #offcanvas-body
      $('#offcanvas-body').html($('#panel-content').html());

      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    } else{
      renderizarSeccion = renderizarSeccion();
      renderizarSeccion();

    }
  });


  const $panel =  $('#panel-content');
  const toast = new bootstrap.Toast($('#toastConfirmacion'));

  function showToast(mensaje) {
    $('#toastConfirmacion .toast-body').text(mensaje);
    toast.show();
  }

  function cargarAdminProductos() {
    $.ajax({
      url: '../php/obtenerProductosAdmin.php',
      method: 'GET',
      dataType: 'json',
      success: function(productos) {
        console.log(productos);

      },
      error: function(xhr) {
        console.log("error al cargar productos como admin");
      }
    });
  
    $panel.hide().html(`<h2>Administración de productos</h2><div class="container mt-4">
  <input type="text" class="form-control mb-3" placeholder="Buscar producto...">

  <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Categoría</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <!-- Aquí irían los productos, esto es solo un ejemplo estático -->
      <tr>
        <td>1</td>
        <td>Producto A</td>
        <td>$10</td>
        <td>Electrónica</td>
        <td>
          <button class="btn btn-primary btn-sm editar-producto-admin">Editar</button>
          <button class="btn btn-danger btn-sm eliminar-producto-admin">Eliminar</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Producto B</td>
        <td>$20</td>
        <td>Hogar</td>
        <td>
          <button class="btn btn-primary btn-sm editar-producto-admin">Editar</button>
          <button class="btn btn-danger btn-sm eliminar-producto-admin">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`).fadeIn();
  }

  function cargarAdminUsuarios() {
    $.ajax({
      url: '../php/obtenerUsuariosAdmin.php',
      method: 'GET',
      dataType: 'json',
      success: function(usuarios) {
        let filas = usuarios.map(usuario => `
          <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.administrador ? 'Sí' : 'No'}</td>
            <td>
              <button class="btn btn-primary btn-sm editar-usuario-admin">Editar</button>
              <button class="btn btn-danger btn-sm eliminar-usuario-admin">Eliminar</button>
            </td>
          </tr>
        `).join('');
  
        const html = `
          <h2>Administración de usuarios</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Admin</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>${filas}</tbody>
          </table>
        `;
        $panel.hide().html(html).fadeIn();
      },
      error: function() {
        console.error("Error al cargar usuarios");
      }
    });
  }


  function cargarAdminCompras() {
    $.ajax({
      url: '../php/obtenerComprasAdmin.php',
      method: 'GET',
      dataType: 'json',
      success: function(compras) {
        let filas = compras.map(c => `
          <tr>
            <td>${c.id}</td>
            <td>${c.usuario_nombre}</td>
            <td>${c.fecha_compra}</td>
            <td>$${c.total}</td>
            <td>
              <button class="btn btn-primary btn-sm editar-compra-admin">Editar</button>
              <button class="btn btn-danger btn-sm eliminar-compra-admin">Eliminar</button>
            </td>
          </tr>
        `).join('');
  
        const html = `
          <h2>Administración de compras</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>${filas}</tbody>
          </table>
        `;
        $panel.hide().html(html).fadeIn();
      },
      error: function() {
        console.error("Error al cargar compras");
      }
    });
  }

  function cargarAdminPedidos() {
    $.ajax({
      url: '../php/obtenerPedidosAdmin.php',
      method: 'GET',
      dataType: 'json',
      success: function(pedidos) {
        let filas = pedidos.map(p => `
          <tr>
            <td>${p.id}</td>
            <td>${p.usuario_nombre}</td>
            <td>${p.estado}</td>
            <td>${p.fecha_pedido}</td>
            <td>
              <button class="btn btn-primary btn-sm editar-pedido-admin">Editar</button>
              <button class="btn btn-danger btn-sm eliminar-pedido-admin">Eliminar</button>
            </td>
          </tr>
        `).join('');
  
        const html = `
          <h2>Administración de pedidos</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>${filas}</tbody>
          </table>
        `;
        $panel.hide().html(html).fadeIn();
      },
      error: function() {
        console.error("Error al cargar pedidos");
      }
    });
  }

  function cargarAdminCategorias() {
    $.ajax({
      url: '../php/obtenerCategoriasAdmin.php',
      method: 'GET',
      dataType: 'json',
      success: function(categorias) {
        let filas = categorias.map(cat => `
          <tr>
            <td>${cat.id}</td>
            <td>${cat.nombre}</td>
            <td>${cat.descripcion}</td>
            <td>
              <button class="btn btn-primary btn-sm editar-categoria-admin">Editar</button>
              <button class="btn btn-danger btn-sm eliminar-categoria-admin">Eliminar</button>
            </td>
          </tr>
        `).join('');
  
        const html = `
          <h2>Administración de categorías</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>${filas}</tbody>
          </table>
        `;
        $panel.hide().html(html).fadeIn();
      },
      error: function() {
        console.error("Error al cargar categorías");
      }
    });
  }
  
  function cargarAdminAlertas() {
    $.ajax({
      url: '../php/obtenerAlertasAdmin.php',
      method: 'GET',
      dataType: 'json',
      success: function(alertas) {
        let filas = alertas.map(alerta => `
          <tr>
            <td>${alerta.id}</td>
            <td>${alerta.nombre_clave}</td>
            <td>${alerta.usuario_nombre}</td>
            <td>${alerta.fecha_creacion}</td>
            <td>
              <button class="btn btn-primary btn-sm editar-alerta-admin">Editar</button>
              <button class="btn btn-danger btn-sm eliminar-alerta-admin">Eliminar</button>
            </td>
          </tr>
        `).join('');
  
        const html = `
          <h2>Administración de alertas</h2>
          <div class="container mt-4">
            <input type="text" class="form-control mb-3" placeholder="Buscar alerta...">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre clave</th>
                  <th>Usuario</th>
                  <th>Fecha de creación</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>${filas}</tbody>
            </table>
          </div>
        `;
        $panel.hide().html(html).fadeIn();
      },
      error: function() {
        console.error("Error al cargar alertas");
      }
    });
  }
    
  
  function cargarProductos() {
    $.ajax({
        url: '../php/obtenerProductosUsuario.php',
        method: 'GET',
        dataType: 'json',
        success: function(productos) {
          console.log(productos)
        },
          error: function(xhr) {
            console.log("error al cargar los productos")
          }
        })
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
    $.ajax({
      url: '../php/obtenerAlertasUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(alertas) {
        console.log(alertas)
      },
        error: function(xhr) {
          console.log("error al cargar las alertas")
        }
      })
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
    $.ajax({
      url: '../php/obtenerPerfilUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(perfil) {
        console.log(perfil)
      },
        error: function(xhr) {
          console.log("error al cargar el perfil")
        }
      })
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
    $.ajax({
      url: '../php/obtenerFavoritosUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(favoritos) {
        console.log(favoritos)
      },
        error: function(xhr) {
          console.log("error al cargar los favoritos")
        }
      })
    $panel.hide().html(`<h2>Mis favoritos</h2><p>Aquí aparecerán tus articulos favoritos.</p>`).fadeIn();
  }

  function cargarCompras() {
    $.ajax({
      url: '../php/obtenerComprasUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(compras) {
        console.log(compras)
      },
        error: function(xhr) {
          console.log("error al cargar las compras")
        }
      })
    $panel.hide().html(`<h2>Mis compras</h2><p>Aquí aparecerán tus compras realizadas.</p>`).fadeIn();
  }

  function cargarPedidos() {
    $.ajax({
      url: '../php/obtenerPedidosUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(pedidos) {
        console.log(pedidos)
      },
        error: function(xhr) {
          console.log("error al cargar los pedidos")
        }
      })
    $panel.hide().html(`<h2>Mis pedidos</h2><p>Consulta el estado de tus pedidos como vendedor.</p>`).fadeIn();
  }

  function cargarSeguridad() {
    $.ajax({
      url: '../php/obtenerSeguridadUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(perfilSeguridad) {
        console.log(perfilSeguridad)
      },
        error: function(xhr) {
          console.log("error al cargar el perfil seguridad")
        }
      })
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













  async function subirImagenAImgur(base64Data) {
    const clientId = 'ee44c21a97e88d1';
    const response = await fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        Authorization: 'Client-ID ' + clientId,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: base64Data.split(',')[1], // quitamos el encabezado "data:image/jpeg;base64,"
        type: 'base64'
      })
    });
  
    const data = await response.json();
    if (data.success) {
      return data.data.link;
    } else {
      throw new Error('Error al subir la imagen a Imgur');
    }
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
$('#formNuevoProducto').on('submit', async function (e) {
  e.preventDefault();

  const nombre = $('#nuevoNombre').val();
  const precio = $('#nuevoPrecio').val();
  const fileInput = $('#nuevoImagen')[0];
  const file = fileInput.files[0];
  const fecha_prod = new Date().toISOString().slice(0, 19).replace('T', ' ');

  // Validaciones
  if (!file || !file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
    alert('Imagen inválida.');
    return;
  }

  const reader = new FileReader();
  reader.onload = async function (event) {
    try {
      const imageUrl = await subirImagenAImgur(event.target.result);

      const datosProducto = {
        nombre,
        descripcion: "",
        imagen_url: imageUrl,
        fecha_produccion: fecha_prod,
        unidad_medida: "kg",
        cantidad_disponible: 1,
        categoria_id: "",
        precio_actual: precio
      };

      $.ajax({
        url: '../php/crearProducto.php',
        type: 'POST',
        data: JSON.stringify(datosProducto),
        contentType: 'application/json',
        success: function(response) {
          showToast('Producto añadido');
          console.log(response);
          cargarProductos();
          $('#modalProducto').modal('hide');
          $('#formNuevoProducto')[0].reset();
          $('#previewNueva').attr('src', '').addClass('d-none');
        },
        error: function(xhr) {
          showToast('Error al crear el producto');
          console.error(xhr.responseText);
        }
      });
    } catch (err) {
      alert('Error al subir imagen: ' + err.message);
    }
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
reader.onload = async function (event) {
  try {
    const nuevaImagenUrl = await subirImagenAImgur(event.target.result);

    const datosProducto = {
      id: productoEditando.data('id'),
      nombre: nuevoNombre,
      descripcion: "",
      imagen_url: nuevaImagenUrl,
      fecha_produccion: fecha_prod,
      unidad_medida: "kg",
      precio_actual: nuevoPrecio,
      categoria_id: ""
    };

    $.ajax({
      url: '../php/actualizarProducto.php',
      type: 'POST',
      data: JSON.stringify(datosProducto),
      contentType: 'application/json',
      success: function(response) {
        showToast('Producto actualizado');
        console.log(response);
        cargarProductos();
        $('#modalEditarProducto').modal('hide');
      },
      error: function(xhr) {
        showToast('Error al actualizar producto');
        console.error(xhr.responseText);
      }
    });

  } catch (err) {
    alert('Error al subir imagen a Imgur');
  }
};
reader.readAsDataURL(file);
  } else {
    const datosProducto = {
      nombre: nuevoNombre,
      descripcion: "",
      imagen_url: "",
      fecha_produccion: fecha_prod,
      unidad_medida: "kg",
      categoria_id: ""
  };
    // Solo actualiza nombre y precio si no hay nueva imagen
    $.ajax({
      url: '../php/modificarProducto.php',
      type: 'POST',
      data: JSON.stringify(datosProducto),
      contentType: 'application/json',
      success: function(response) {
        showToast('Producto añadido');
        console.log(response);
      },
      error: function(xhr, status, error) {
        showToast('Error al crear el producto');
        console.error(xhr.responseText);
      }
  });

    cargarProductos()
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

  const datosAlerta = {
    categoria_id:1,
    nombre_clave: "",
};
  $.ajax({
    url: '../php/crearAlerta.php',
    type: 'POST',
    data: JSON.stringify(datosAlerta),
    contentType: 'application/json',
    success: function(response) {
      showToast('Alerta añadida');
      console.log(response);
    },
    error: function(xhr, status, error) {
      showToast('Error al crear la alerta');
      console.error(xhr.responseText);
    }
});
cargarAlertas();
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
      const datosAlerta = {
        categoria_id:categoria,
        nombre_clave:nombre,
    };
      $.ajax({
        url: '../php/crearAlerta.php',
        type: 'POST',
        data: JSON.stringify(datosAlerta),
        contentType: 'application/json',
        success: function(response) {
          showToast('Alerta añadida');
          console.log(response);
        },
        error: function(xhr, status, error) {
          showToast('Error al crear la alerta');
          console.error(xhr.responseText);
        }
    });

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
