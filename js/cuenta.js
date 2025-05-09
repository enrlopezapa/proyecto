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
        case 'admin-usuarios': return cargarAdminUsuarios;
        case 'admin-compras': return cargarAdminCompras;
        case 'admin-alertas': return cargarAdminAlertas;
        case 'admin-pedidos': return cargarAdminPedidos;
        case 'admin-categorias': return cargarAdminCategorias;
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

            let filas = '';
            productos.forEach(function(producto, index) {
                filas += `
                    <tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.descripcion}</td>
                        <td><img src="${producto.imagen_url}" alt="${producto.nombre}" style="width: 50px; height: auto;"></td>
                        <td>${producto.fecha_produccion}</td>
                        <td>${producto.unidad_medida}</td>
                        <td>$${producto.precio_actual}</td>
                        <td>${producto.nombre_usuario}</td>
                        <td>${producto.nombre_categoria}</td>
                        <td>${producto.valoracion_media}</td>
                        <td>${producto.vendido ? 'Sí' : 'No'}</td>
                        <td>
                            <button class="btn btn-primary btn-sm editar-producto-admin" data-id="${producto.id}">Editar</button>
                            <button class="btn btn-danger btn-sm eliminar-producto-admin" data-id="${producto.id}">Eliminar</button>
                        </td>
                    </tr>
                `;
            });

            $panel.hide().html(`
                <h2>Administración de productos</h2>
                <div class="container mt-4">
                    <input type="text" class="form-control mb-3" placeholder="Buscar producto...">

                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Imagen</th>
                                <th>Fecha Producción</th>
                                <th>Unidad Medida</th>
                                <th>Precio</th>
                                <th>Usuario</th>
                                <th>Categoría</th>
                                <th>Valoración</th>
                                <th>Vendido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filas}
                        </tbody>
                    </table>
                </div>
            `).fadeIn();
        },
        error: function(xhr) {
            console.log("Error al cargar productos como admin");
        }
    });
}

function cargarAdminUsuarios() {
  $.ajax({
      url: '../php/obtenerUsuariosAdmin.php',
      method: 'GET',
      dataType: 'json',
      success: function(usuarios) {
          let filas = '';
          usuarios.forEach(function(usuario, index) {
              filas += `
                  <tr>
                      <td>${index + 1}</td>
                      <td>${usuario.nombre}</td>
                      <td>${usuario.email}</td>
                      <td>${usuario.telefono || '—'}</td>
                      <td>${usuario.direccion || '—'}</td>
                      <td>${usuario.administrador ? 'Sí' : 'No'}</td>
                      <td>${usuario.valoracion_media}</td>
                      <td>
                          <button class="btn btn-primary btn-sm editar-usuario-admin" data-id="${usuario.id}">Editar</button>
                          <button class="btn btn-danger btn-sm eliminar-usuario-admin" data-id="${usuario.id}">Eliminar</button>
                      </td>
                  </tr>
              `;
          });

          const html = `
              <h2>Administración de usuarios</h2>
              <div class="container mt-4">
                  <input type="text" class="form-control mb-3" placeholder="Buscar usuario...">
                  <table class="table table-striped">
                      <thead class="thead-dark">
                          <tr>
                              <th>#</th>
                              <th>Nombre</th>
                              <th>Email</th>
                              <th>Teléfono</th>
                              <th>Dirección</th>
                              <th>Administrador</th>
                              <th>Valoración</th>
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
          <td>${c.nombre_pagador}</td>
          <td>${c.destinatario}</td>
          <td>${c.direccion_entrega}</td>
          <td>
            <button class="btn btn-primary btn-sm editar-compra-admin" data-id="${c.id}">Editar</button>
            <button class="btn btn-danger btn-sm eliminar-compra-admin" data-id="${c.id}">Eliminar</button>
          </td>
        </tr>
      `).join('');

      const html = `
        <h2>Administración de compras</h2>
        <div class="container mt-4">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Pagador</th>
                <th>Destinatario</th>
                <th>Dirección de entrega</th>
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
          <td>${p.notas || ''}</td>
          <td>
            <button class="btn btn-primary btn-sm editar-pedido-admin" data-id="${p.id}">Editar</button>
            <button class="btn btn-danger btn-sm eliminar-pedido-admin" data-id="${p.id}">Eliminar</button>
          </td>
        </tr>
      `).join('');

      const html = `
        <h2>Administración de pedidos</h2>
        <div class="container mt-4">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Notas</th>
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
          <td>${cat.descripcion || ''}</td>
          <td>
            <button class="btn btn-primary btn-sm editar-categoria-admin" data-id="${cat.id}">Editar</button>
            <button class="btn btn-danger btn-sm eliminar-categoria-admin" data-id="${cat.id}">Eliminar</button>
          </td>
        </tr>
      `).join('');

      const html = `
        <h2>Administración de categorías</h2>
        <div class="container mt-4">
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
        </div>
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
          <td>${alerta.usuario_nombre || alerta.usuario_id}</td>
          <td>${alerta.categoria_nombre || alerta.categoria_id}</td>
          <td>${alerta.nombre_clave}</td>
          <td>${alerta.fecha_creacion}</td>
          <td>${alerta.activa ? 'Sí' : 'No'}</td>
          <td>
            <button class="btn btn-primary btn-sm editar-alerta-admin" data-id="${alerta.id}">Editar</button>
            <button class="btn btn-danger btn-sm eliminar-alerta-admin" data-id="${alerta.id}">Eliminar</button>
          </td>
        </tr>
      `).join('');

      const html = `
        <h2>Administración de alertas</h2>
        <div class="container mt-4">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Categoría</th>
                <th>Nombre clave</th>
                <th>Fecha</th>
                <th>Activa</th>
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
          console.log(productos);

          // Cerrar cualquier modal abierto
          $('.modal').modal('hide');

          // Construir contenido principal
          let contenido = `
              <h2>Mis productos</h2>
              <button class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#modalProducto">+ Añadir producto</button>
              <div class="row g-4" id="lista-productos">
          `;

          // Iterar sobre los productos y generar las tarjetas
          productos.forEach(producto => {
              contenido += `
                  <div class="col-md-4 producto">
                      <div class="card">
                          <img src="${producto.imagen_url || '../img/default.svg'}" class="card-img-top" alt="${producto.nombre}">
                          <div class="card-body">
                              <h5 class="card-title">${producto.nombre}</h5>
                              <p class="card-text">Cantidad: ${producto.cantidad_disponible} ${producto.unidad_medida}</p>
                              <p class="card-text">Lote: ${producto.numero_lote}</p>
                              <p class="card-text">Producción: ${producto.fecha_produccion}</p>
                              <p class="card-text">Caducidad: ${producto.fecha_caducidad}</p>
                              <div class="d-flex justify-content-between">
                                  <button class="btn btn-outline-primary btn-sm btn-editar editar-producto" data-id="${producto.id}">Editar</button>
                                  <button class="btn btn-outline-danger btn-sm btn-eliminar" data-id="${producto.id}">Eliminar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
          });

          contenido += `</div>`; // cerrar #lista-productos

          // Mostrar el contenido en el panel
          $panel.hide().html(contenido).fadeIn();
      },
      error: function(xhr) {
          console.log("Error al cargar los productos");
      }
  });
}

function cargarAlertas() {
  $.ajax({
      url: '../php/obtenerAlertasUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(alertas) {
          console.log(alertas);

          // Construir encabezado y botón
          let contenido = `
              <h2>Mis alertas</h2>
              <button class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#modalCrearAlerta">+ Añadir alerta</button>
              <div class="row g-4" id="lista-alertas">
          `;

          // Generar tarjetas de alerta dinámicamente
          alertas.forEach(alerta => {
              const alertaId = alerta.id;
              const nombreClave = alerta.nombre_clave || 'Alerta sin nombre';
              const fechaCreacion = alerta.fecha_creacion || 'Sin fecha';

              contenido += `
                  <div class="col-md-4 alerta" data-id="${alertaId}">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">${nombreClave}</h5>
                              <p class="card-text">Creada el: ${fechaCreacion}</p>
                              <div class="form-check form-switch">
                                  <input class="form-check-input" type="checkbox" id="alertaSwitch${alertaId}">
                                  <label class="form-check-label" for="alertaSwitch${alertaId}">Activar Alerta</label>
                              </div>
                              <div class="d-flex justify-content-between mt-3">
                                  <button class="btn btn-outline-primary btn-sm btn-editar editar-alerta" data-id="${alertaId}">Editar</button>
                                  <button class="btn btn-outline-danger btn-sm btn-eliminar" data-id="${alertaId}">Eliminar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
          });

          contenido += `</div>`; // Cerrar contenedor de alertas

          // Mostrar en el panel
          $panel.hide().html(contenido).fadeIn();
      },
      error: function(xhr) {
          console.log("Error al cargar las alertas");
      }
  });
}

function cargarPerfil() {
  $.ajax({
      url: '../php/obtenerPerfilUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(perfil) {
          console.log(perfil);

          // Asegurarse de que el panel tenga el contenido dinámico
          const contenido = `
              <h2>Editar perfil</h2>
              <form class="mt-3">
                <div class="mb-3">
                  <label class="form-label">Nombre completo</label>
                  <input type="text" class="form-control" value="${perfil.nombre || ''}">
                </div>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" value="${perfil.email || ''}">
                </div>
                <div class="mb-3">
                  <label class="form-label">Teléfono</label>
                  <input type="tel" class="form-control" value="${perfil.telefono || ''}">
                </div>
                <div class="mb-3">
                  <label class="form-label">Dirección</label>
                  <input type="text" class="form-control" value="${perfil.direccion || ''}">
                </div>
                <button class="btn btn-primary" type="button" onclick="showToast('Perfil actualizado')">Guardar cambios</button>
              </form>
          `;

          $panel.hide().html(contenido).fadeIn();
      },
      error: function(xhr) {
          console.log("Error al cargar el perfil");
      }
  });
}

function cargarFavoritos() {
  $.ajax({
      url: '../php/obtenerFavoritosUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(favoritos) {
          console.log(favoritos);

          let contenido = `
              <h2>Mis favoritos</h2>
              <p>Aquí aparecerán tus artículos favoritos.</p>
              <div class="row g-4" id="lista-favoritos">
          `;

          favoritos.forEach(producto => {
              contenido += `
                  <div class="col-md-4 producto">
                      <div class="card">
                          <img src="${producto.imagen_url || '../img/default.svg'}" class="card-img-top" alt="${producto.nombre}">
                          <div class="card-body">
                              <h5 class="card-title">${producto.nombre}</h5>
                              <p class="card-text">Cantidad: ${producto.cantidad_disponible} ${producto.unidad_medida}</p>
                              <p class="card-text">Lote: ${producto.numero_lote}</p>
                              <p class="card-text">Producción: ${producto.fecha_produccion}</p>
                              <p class="card-text">Caducidad: ${producto.fecha_caducidad}</p>
                              <div class="d-flex justify-content-between align-items-center mt-3">
                                  ${
                                      producto.vendido == true
                                      ? `<span class="badge bg-danger w-100 text-center">Vendido</span>`
                                      : `<button class="btn btn-outline-primary btn-sm btn-editar editar-producto" data-id="${producto.id}">Ver detalles</button>`
                                  }
                                      <button class="btn btn-outline-danger btn-sm btn-eliminar" data-id="${producto.id}">Eliminar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
          });

          contenido += `</div>`; // cerrar row

          $panel.hide().html(contenido).fadeIn();
      },
      error: function(xhr) {
          console.log("Error al cargar los favoritos");
      }
  });
}

function cargarCompras() {
  $.ajax({
    url: '../php/obtenerComprasUsuario.php',
    method: 'GET',
    dataType: 'json',
    success: function(compras) {
      console.log(compras);

      let contenido = `
        <h2>Mis compras</h2>
        <p>Aquí aparecerán tus compras realizadas.</p>
        <div class="accordion" id="comprasAccordion">
      `;

      compras.forEach((compra, index) => {
        const compraId = `compra${index}`;
        contenido += `
          <div class="accordion-item mb-2">
            <h2 class="accordion-header" id="heading${compraId}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${compraId}" aria-expanded="false" aria-controls="collapse${compraId}">
                Compra del ${new Date(compra.fecha_compra).toLocaleDateString()} - ${compra.nombre_pagador}
              </button>
            </h2>
            <div id="collapse${compraId}" class="accordion-collapse collapse" aria-labelledby="heading${compraId}" data-bs-parent="#comprasAccordion">
              <div class="accordion-body">
                <p><strong>Pagador:</strong> ${compra.nombre_pagador}</p>
                <p><strong>Destinatario:</strong> ${compra.destinatario}</p>
                <p><strong>Dirección de entrega:</strong> ${compra.direccion_entrega}</p>
                <div class="table-responsive mt-3">
                  <table class="table table-bordered align-middle">
                    <thead class="table-light">
                      <tr>
                        <th>Producto</th>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
        `;

        compra.productos.forEach(prod => {
          contenido += `
            <tr>
              <td>${prod.nombre_producto || 'Producto eliminado'}</td>
              <td><img src="${prod.imagen_url || '../img/default.svg'}" alt="${prod.nombre_producto}" style="width: 50px; height: 50px; object-fit: cover;"></td>
              <td>${prod.cantidad}</td>
              <td>$${prod.precio_unitario.toFixed(2)}</td>
              <td>$${prod.subtotal.toFixed(2)}</td>
            </tr>
          `;
        });

        contenido += `
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        `;
      });

      contenido += `</div>`; // Cierra el accordion general

      $panel.hide().html(contenido).fadeIn();
    },
    error: function(xhr) {
      console.log("Error al cargar las compras");
    }
  });
}

function cargarPedidos() {
  $.ajax({
      url: '../php/obtenerPedidosUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(pedidos) {
          console.log(pedidos);

          let contenido = `
              <h2>Mis pedidos</h2>
              <p>Consulta el estado de tus pedidos como vendedor.</p>
              <div class="row g-4">
          `;

          if (pedidos.length === 0) {
              contenido += `<div class="col-12"><div class="alert alert-info">No hay pedidos disponibles.</div></div>`;
          }

          pedidos.forEach(pedido => {
              let fecha = new Date(pedido.fecha_estado).toLocaleString();
              let badgeColor = 'secondary';

              switch (pedido.estado.toLowerCase()) {
                  case 'pendiente':
                      badgeColor = 'warning';
                      break;
                  case 'en camino':
                      badgeColor = 'primary';
                      break;
                  case 'entregado':
                      badgeColor = 'success';
                      break;
                  case 'cancelado':
                      badgeColor = 'danger';
                      break;
              }

              contenido += `
                  <div class="col-md-6 col-lg-4">
                      <div class="card shadow-sm h-100">
                          <div class="card-body">
                              <h5 class="card-title">Pedido #${pedido.compra_id}</h5>
                              <p><span class="badge bg-${badgeColor} text-uppercase">${pedido.estado}</span></p>
                              <p><strong>Fecha del estado:</strong> ${fecha}</p>
                              ${pedido.notas ? `<p><strong>Notas:</strong> ${pedido.notas}</p>` : ''}
                          </div>
                      </div>
                  </div>
              `;
          });

          contenido += `</div>`;
          $panel.hide().html(contenido).fadeIn();
      },
      error: function(xhr) {
          console.log("error al cargar los pedidos");
      }
  });
}

function cargarSeguridad() {
  $.ajax({
      url: '../php/obtenerSeguridadUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(datos) {
          const perfilSeguridad = datos[0]; // Asumiendo que se retorna un único objeto

          let verificadoBadge = perfilSeguridad.verificado
              ? '<span class="badge bg-success">Verificado</span>'
              : '<span class="badge bg-danger">No verificado</span>';

          let contenido = `
              <h2>Seguridad</h2>
              <p>Estado de verificación: ${verificadoBadge}</p>
              ${!perfilSeguridad.verificado ? `
                  <div class="alert alert-warning">
                      Código de verificación pendiente: <strong>${perfilSeguridad.codigo_verificacion}</strong><br>
                      Enviado el: ${new Date(perfilSeguridad.fecha_envio_codigo).toLocaleString()}
                  </div>
              ` : ''}
              <form class="mt-4">
                  <div class="mb-3">
                      <label class="form-label">Contraseña actual</label>
                      <input type="password" class="form-control" id="current-password">
                  </div>
                  <div class="mb-3">
                      <label class="form-label">Nueva contraseña</label>
                      <input type="password" class="form-control" id="new-password">
                  </div>
                  <button class="btn btn-danger" type="button" onclick="actualizarContrasena()">Actualizar contraseña</button>
              </form>
              <p class="mt-3 text-muted small">Último cambio de contraseña: ${new Date(perfilSeguridad.fecha_ultimo_cambio_contrasena).toLocaleString()}</p>
          `;

          $panel.hide().html(contenido).fadeIn();
      },
      error: function(xhr) {
          console.log("error al cargar el perfil seguridad");
      }
  });
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







  // EDITAR PRODUCTO ADMIN
$(document).on('click', '.editar-producto-admin', function () {
  const isMobile = window.innerWidth < 768;
  const offcanvasInstance = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasContent'));
  const $btn = $(this);

  if (isMobile && offcanvasInstance) {
    offcanvasInstance.hide();
    $('.modal-backdrop').remove();
      mostrarModalEditar($btn);
  } else {
    mostrarModalEditar($btn);
  }
});

function mostrarModalEditar($triggerBtn) {
  const fila = $triggerBtn.closest('tr');

  const producto = {
    id: fila.data('id-real'),
    nombre: fila.find('td:eq(1)').text(),
    descripcion: fila.find('td:eq(2)').text(),
    imagen_url: fila.find('img').attr('src'),
    fecha_produccion: fila.find('td:eq(4)').text(),
    unidad_medida: fila.find('td:eq(5)').text(),
    precio_actual: fila.find('td:eq(6)').text().replace('$', ''),
    vendido: fila.find('td:eq(10)').text() === 'Sí' ? 1 : 0
  };

  $('#editarProductoId').val(producto.id);
  $('#editarNombre').val(producto.nombre);
  $('#editarDescripcion').val(producto.descripcion);
  $('#editarImagenUrl').val(producto.imagen_url);
  $('#editarFechaProduccion').val(producto.fecha_produccion);
  $('#editarUnidadMedida').val(producto.unidad_medida);
  $('#editarPrecio').val(producto.precio_actual);
  $('#editarVendido').val(producto.vendido);

  $('#modalEditarProducto').modal('show');
}

// Envío del formulario
$('#formEditarProducto').submit(function(e) {
  e.preventDefault();
  const datos = $(this).serialize();

  $.ajax({
      url: '../php/actualizarProductoAdmin.php',
      method: 'POST',
      data: datos,
      success: function(respuesta) {
          showToast('Producto actualizado correctamente');
          $('#modalEditarProducto').modal('hide');
          cargarAdminProductos(); // Recargar la tabla
      },
      error: function() {
          showToast('Error al actualizar el producto');
      }
  });
});












// EDITAR USUARIOS ADMIN
$(document).on('click', '.editar-usuario-admin', function () {
  const isMobile = window.innerWidth < 768;
  const $offcanvasEl = $('#offcanvasContent');
  const offcanvasInstance = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasContent'));
  const $btn = $(this);

  if (isMobile && offcanvasInstance) {
    offcanvasInstance.hide();
    $('.modal-backdrop').remove();
      mostrarModalEditarUsuario($btn);
  } else {
    mostrarModalEditarUsuario($btn);
  }
});

function mostrarModalEditarUsuario($btn) {
  const fila = $btn.closest('tr');

  const usuario = {
    id: $btn.data('id'),
    nombre: fila.find('td:eq(1)').text(),
    email: fila.find('td:eq(2)').text(),
    telefono: fila.find('td:eq(3)').text() !== '—' ? fila.find('td:eq(3)').text() : '',
    direccion: fila.find('td:eq(4)').text() !== '—' ? fila.find('td:eq(4)').text() : '',
    administrador: fila.find('td:eq(5)').text() === 'Sí' ? 1 : 0
  };

  $('#editarUsuarioId').val(usuario.id);
  $('#editarNombreUsuario').val(usuario.nombre);
  $('#editarEmailUsuario').val(usuario.email);
  $('#editarTelefonoUsuario').val(usuario.telefono);
  $('#editarDireccionUsuario').val(usuario.direccion);
  $('#editarAdministradorUsuario').val(usuario.administrador);

  $('#modalEditarUsuario').modal('show');
}


// Enviar cambios al servidor
$('#formEditarUsuario').submit(function (e) {
  e.preventDefault();

  const datos = $(this).serialize();

  $.ajax({
      url: '../php/actualizarUsuarioAdmin.php',
      method: 'POST',
      data: datos,
      success: function (respuesta) {
          showToast('Usuario actualizado correctamente');
          $('#modalEditarUsuario').modal('hide');
          cargarAdminUsuarios();
      },
      error: function () {
          showToast('Error al actualizar el usuario');
      }
  });
});













// EDITAR COMPRA ADMIN
$(document).on('click', '.editar-compra-admin', function () {
  const isMobile = window.innerWidth < 768;
  const $offcanvasEl = $('#offcanvasContent');
  const offcanvasInstance = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasContent'));
  const $btn = $(this);

  if (isMobile && offcanvasInstance) {
    offcanvasInstance.hide();
    $('.modal-backdrop').remove();

      mostrarModalEditarCompra($btn);
  } else {
    mostrarModalEditarCompra($btn);
  }
});

function mostrarModalEditarCompra($btn) {
  const fila = $btn.closest('tr');

  const compra = {
    id: $btn.data('id'),
    nombre_pagador: fila.find('td:eq(3)').text(),
    destinatario: fila.find('td:eq(4)').text(),
    direccion_entrega: fila.find('td:eq(5)').text()
  };

  $('#editarCompraId').val(compra.id);
  $('#editarNombrePagador').val(compra.nombre_pagador);
  $('#editarDestinatario').val(compra.destinatario);
  $('#editarDireccionEntrega').val(compra.direccion_entrega);

  $('#modalEditarCompra').modal('show');
}

// Enviar actualización
$('#formEditarCompra').submit(function (e) {
  e.preventDefault();

  const datos = $(this).serialize();

  $.ajax({
    url: '../php/actualizarCompraAdmin.php',
    method: 'POST',
    data: datos,
    success: function () {
      showToast('Compra actualizada correctamente');
      $('#modalEditarCompra').modal('hide');
      cargarAdminCompras();
    },
    error: function () {
      showToast('Error al actualizar la compra');
    }
  });
});
















// EDITAR PEDIDO ADMIN
$(document).on('click', '.editar-pedido-admin', function () {
  const isMobile = window.innerWidth < 768;
  const $offcanvasEl = $('#offcanvasContent');
  const offcanvasInstance = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasContent'));
  const $btn = $(this);

  if (isMobile && offcanvasInstance) {
    offcanvasInstance.hide();
    $('.modal-backdrop').remove();
      mostrarModalEditarPedido($btn);
  } else {
    mostrarModalEditarPedido($btn);
  }
});

function mostrarModalEditarPedido($btn) {
  const fila = $btn.closest('tr');

  const pedido = {
    id: $btn.data('id'),
    estado: fila.find('td:eq(2)').text(),
    notas: fila.find('td:eq(4)').text()
  };

  $('#editarPedidoId').val(pedido.id);
  $('#editarEstadoPedido').val(pedido.estado);
  $('#editarNotasPedido').val(pedido.notas);

  $('#modalEditarPedido').modal('show');
}

// Enviar actualización
$('#formEditarPedido').submit(function (e) {
  e.preventDefault();

  const datos = $(this).serialize();

  $.ajax({
    url: '../php/actualizarPedidoAdmin.php',
    method: 'POST',
    data: datos,
    success: function () {
      showToast('Pedido actualizado correctamente');
      $('#modalEditarPedido').modal('hide');
      cargarAdminPedidos();
    },
    error: function () {
      showToast('Error al actualizar el pedido');
    }
  });
});

















// EDITAR CATEGORIA ADMIN
$(document).on('click', '.editar-categoria-admin', function () {
  const isMobile = window.innerWidth < 768;
  const $offcanvasEl = $('#offcanvasContent');
  const offcanvasInstance = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasContent'));
  const $btn = $(this);

  if (isMobile && offcanvasInstance) {
    offcanvasInstance.hide();
    $('.modal-backdrop').remove();
      mostrarModalEditarCategoria($btn);
  } else {
    mostrarModalEditarCategoria($btn);
  }
});

function mostrarModalEditarCategoria($btn) {
  const fila = $btn.closest('tr');

  const categoria = {
    id: $btn.data('id'),
    nombre: fila.find('td:eq(1)').text(),
    descripcion: fila.find('td:eq(2)').text()
  };

  $('#editarCategoriaId').val(categoria.id);
  $('#editarNombreCategoria').val(categoria.nombre);
  $('#editarDescripcionCategoria').val(categoria.descripcion);

  $('#modalEditarCategoria').modal('show');
}

// Enviar datos modificados
$('#formEditarCategoria').submit(function (e) {
  e.preventDefault();

  const datos = $(this).serialize();

  $.ajax({
    url: '../php/actualizarCategoriaAdmin.php',
    method: 'POST',
    data: datos,
    success: function () {
      showToast('Categoría actualizada correctamente');
      $('#modalEditarCategoria').modal('hide');
      cargarAdminCategorias(); // Recarga la tabla
    },
    error: function () {
      showToast('Error al actualizar la categoría');
    }
  });
});







// ELIMINAR PRODUCTO ADMIN
$(document).on('click', '.eliminar-producto-admin', function () {
  const id = $(this).data('id');

  if (!confirm('¿Estás seguro de que deseas eliminar este producto?')) return;

  $.ajax({
    url: '../php/eliminarProductoAdmin.php',
    method: 'POST',
    data: { id },
    success: function (respuesta) {
      try {
        const res = JSON.parse(respuesta);
        if (res.status === 'ok') {
          showToast('Producto eliminado correctamente');
          cargarAdminProductos(); // Recarga la tabla
        } else {
          showToast('Error al eliminar el producto');
        }
      } catch (e) {
        console.error('Respuesta no válida:', respuesta);
        showToast('Error inesperado al eliminar el producto');
      }
    },
    error: function () {
      showToast('Error al conectar con el servidor');
    }
  });
});












$(document).on('click', '.eliminar-usuario-admin', function () {
  const id = $(this).data('id');

  if (!confirm('¿Seguro que deseas eliminar este usuario? Esta acción no se puede deshacer.')) return;

  $.ajax({
    url: '../php/eliminarUsuarioAdmin.php',
    method: 'POST',
    data: { id },
    success: function (respuesta) {
      try {
        const res = JSON.parse(respuesta);
        if (res.status === 'ok') {
          showToast('Usuario eliminado correctamente');
          cargarAdminUsuarios(); // Vuelve a cargar la tabla
        } else {
          showToast('Error al eliminar el usuario');
        }
      } catch (e) {
        console.error('Respuesta no válida:', respuesta);
        showToast('Error inesperado');
      }
    },
    error: function () {
      showToast('Error al conectar con el servidor');
    }
  });
});








$(document).on('click', '.eliminar-compra-admin', function () {
  const id = $(this).data('id');

  if (!confirm('¿Seguro que deseas eliminar esta compra?')) return;

  $.ajax({
    url: '../php/eliminarCompraAdmin.php',
    method: 'POST',
    data: { id },
    success: function (respuesta) {
      try {
        const res = JSON.parse(respuesta);
        if (res.status === 'ok') {
          showToast('Compra eliminada correctamente');
          cargarAdminCompras(); // Refresca la tabla
        } else {
          showToast('Error al eliminar la compra');
        }
      } catch (e) {
        console.error('Respuesta inválida:', respuesta);
        showToast('Error inesperado');
      }
    },
    error: function () {
      showToast('Error al conectar con el servidor');
    }
  });
});











$(document).on('click', '.eliminar-pedido-admin', function () {
  const id = $(this).data('id');

  if (!confirm('¿Estás seguro de que deseas eliminar este pedido?')) return;

  $.ajax({
    url: '../php/eliminarPedidoAdmin.php',
    method: 'POST',
    data: { id },
    success: function (respuesta) {
      try {
        const res = JSON.parse(respuesta);
        if (res.status === 'ok') {
          showToast('Pedido eliminado exitosamente');
          cargarAdminPedidos(); // Recargar la tabla
        } else {
          showToast('Error al eliminar el pedido');
        }
      } catch (e) {
        console.error('Error en la respuesta:', respuesta);
        showToast('Error inesperado');
      }
    },
    error: function () {
      showToast('No se pudo conectar con el servidor');
    }
  });
});










$(document).on('click', '.eliminar-categoria-admin', function () {
  const id = $(this).data('id');

  if (!confirm('¿Estás seguro de que deseas eliminar esta categoría?')) return;

  $.ajax({
    url: '../php/eliminarCategoriaAdmin.php',
    method: 'POST',
    data: { id },
    success: function (respuesta) {
      try {
        const res = JSON.parse(respuesta);
        if (res.status === 'ok') {
          showToast('Categoría eliminada correctamente');
          cargarAdminCategorias(); // Recargar la tabla
        } else {
          showToast('Error al eliminar la categoría');
        }
      } catch (e) {
        console.error('Respuesta no válida:', respuesta);
        showToast('Error inesperado');
      }
    },
    error: function () {
      showToast('No se pudo conectar con el servidor');
    }
  });
});









$(document).on('click', '.eliminar-alerta-admin', function () {
  const id = $(this).data('id');

  if (!confirm('¿Estás seguro de que deseas eliminar esta alerta?')) return;

  $.ajax({
    url: '../php/eliminarAlertaAdmin.php',
    method: 'POST',
    data: { id },
    success: function (respuesta) {
      try {
        const res = JSON.parse(respuesta);
        if (res.status === 'ok') {
          showToast('Alerta eliminada correctamente');
          cargarAdminAlertas(); // Recargar la tabla
        } else {
          showToast('Error al eliminar la alerta');
        }
      } catch (e) {
        console.error('Respuesta no válida:', respuesta);
        showToast('Error inesperado');
      }
    },
    error: function () {
      showToast('No se pudo conectar con el servidor');
    }
  });
});






















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
    showToast('Imagen inválida.');
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
      showToast('Error al subir imagen: ' + err.message);
    }
  };

  reader.readAsDataURL(file);
});




















let productoEditando = null;
// Abrir modal de edición
$(document).on('click', '.editar-producto', function () {
  const isMobile = window.innerWidth < 768;
  const $offcanvasEl = $('#offcanvasContent');
  const offcanvasInstance = bootstrap.Offcanvas.getInstance($offcanvasEl[0]);
  const $btn = $(this);

  productoEditando = $btn.closest('.producto');

  const mostrarModal = () => {
    const nombre = productoEditando.find('.card-title').text();
    const precio = productoEditando.find('.card-text').text().replace('Precio: ', '');
    const imagen = productoEditando.find('img').attr('src');

    $('#editarNombre').val(nombre);
    $('#editarPrecio').val(precio);
    $('#previewEditar').attr('src', imagen).removeClass('d-none');
    $('#editarImagen').val('');
    $('#modalEditarProducto').modal('show');
  };

  if (isMobile && offcanvasInstance) {
    $offcanvasEl.one('hidden.bs.offcanvas', mostrarModal);
    offcanvasInstance.hide();
  } else {
    mostrarModal();
  }
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
      showToast('El archivo seleccionado no es una imagen válida.');
      $('#editarImagen').val('');
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      showToast('La imagen no debe superar los 5 MB.');
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
    showToast('Error al subir imagen a Imgur');
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
$(document).on('click', '.editar-alerta', function () {
  const isMobile = window.innerWidth < 768;
  const $offcanvasEl = $('#offcanvasContent');
  const offcanvasInstance = bootstrap.Offcanvas.getInstance($offcanvasEl[0]);
  const $btn = $(this);
  const alertaCard = $btn.closest('.alerta');

  const mostrarModal = () => {
    // Obtener los datos actuales de la alerta
    var alertaId = alertaCard.data('id');
    var alertaNombre = alertaCard.find('.card-title').text();
    var alertaDescripcion = alertaCard.find('.card-text').text();
    var alertaActivada = alertaCard.find('.form-check-input').prop('checked');

    // Mostrar el modal
    $('#modalModificarAlerta').modal('show');

    // Cambiar el título del modal
    $('#modalModificarAlertaLabel').text('Editar alerta por correo');

    // Llenar el formulario con los datos actuales
    $('#alertaPalabraClave').val(alertaNombre);
    $('#alertaCategoria').val(''); // Adaptar según lógica
    $('#alertaFrecuencia').val('inmediata'); // Adaptar si es necesario
    $('#alertaEmail').val(''); // Adaptar si manejas emails
    $('#alertaActiva').prop('checked', alertaActivada);

    // Preparar el envío del formulario
    $('#formCrearAlerta').off('submit').on('submit', function (event) {
      event.preventDefault();

      var nombre = $('#alertaPalabraClave').val();
      var descripcion = $('#alertaDescripcion').val();
      var categoria = $('#alertaCategoria').val();
      var frecuencia = $('#alertaFrecuencia').val();
      var email = $('#alertaEmail').val();
      var activa = $('#alertaActiva').prop('checked');

      const datosAlerta = {
        categoria_id: categoria,
        nombre_clave: nombre,
        // Agrega los demás campos si los usas en tu backend
      };

      $.ajax({
        url: '../php/crearAlerta.php',
        type: 'POST',
        data: JSON.stringify(datosAlerta),
        contentType: 'application/json',
        success: function (response) {
          showToast('Alerta añadida');
          console.log(response);
        },
        error: function (xhr) {
          showToast('Error al crear la alerta');
          console.error(xhr.responseText);
        }
      });

      $('#modalModificarAlerta').modal('hide');
    });
  };

  if (isMobile && offcanvasInstance) {
    $offcanvasEl.one('hidden.bs.offcanvas', mostrarModal);
    offcanvasInstance.hide();
  } else {
    mostrarModal();
  }
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