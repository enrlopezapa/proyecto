$(document).ready(function () {
  $('[data-section]').on('click', function (e) {
  e.preventDefault();
  $('[data-section]').removeClass('active');
  $(this).addClass('active');

  const section = $(this).data('section');

  function getRenderFunction() {
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
      default: return () => $('#panel-content').html('<p>Sección no encontrada</p>');
    }
  }

  const renderFunc = getRenderFunction();

  renderFunc(); // Ejecuta la función

  if (window.innerWidth < 768) {
    // Espera un poco antes de copiar el contenido al offcanvas
    setTimeout(() => {
      $('#offcanvas-body').html($('#panel-content').html());

      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }, 50); // pequeño retardo para asegurar que el contenido ya se haya cargado
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
        url: '../controller/obtenerProductosAdmin.php',
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
                        <td>${producto.precio_actual}€</td>
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
                    <input type="text" class="form-control mb-3 prducto-search" placeholder="Buscar producto...">

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
            $('.prducto-search').on('input', function () {
              const searchTerm = $(this).val().toLowerCase();

              $('table tbody tr').each(function () {
                  const nombreProducto = $(this).find('td:nth-child(2)').text().toLowerCase();
                  if (nombreProducto.includes(searchTerm)) {
                      $(this).show();
                  } else {
                      $(this).hide();
                  }
              });
          });
        },
        error: function(xhr) {
            console.log("Error al cargar productos como admin");
        }
    });
}

function cargarAdminUsuarios() {
  $.ajax({
      url: '../controller/obtenerUsuariosAdmin.php',
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
                  <input type="text" class="form-control mb-3 usuario-search" placeholder="Buscar usuario...">
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
          $('.usuario-search').on('input', function () {
              const searchTerm = $(this).val().toLowerCase();

              $('table tbody tr').each(function () {
                  const nombreProducto = $(this).find('td:nth-child(2)').text().toLowerCase();
                  if (nombreProducto.includes(searchTerm)) {
                      $(this).show();
                  } else {
                      $(this).hide();
                  }
              });
          });
      },
      error: function() {
          console.error("Error al cargar usuarios");
      }
  });
}


function cargarAdminCompras() {
  $.ajax({
    url: '../controller/obtenerComprasAdmin.php',
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
        <input type="text" class="form-control mb-3 compra-search" placeholder="Buscar compra...">
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
      $('.compra-search').on('input', function () {
              const searchTerm = $(this).val().toLowerCase();

              $('table tbody tr').each(function () {
                  const nombreProducto = $(this).find('td:nth-child(2)').text().toLowerCase();
                  if (nombreProducto.includes(searchTerm)) {
                      $(this).show();
                  } else {
                      $(this).hide();
                  }
              });
          });
    },
    error: function() {
      console.error("Error al cargar compras");
    }
  });
}

function cargarAdminPedidos() {
  $.ajax({
    url: '../controller/obtenerPedidosAdmin.php',
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
        <input type="text" class="form-control mb-3 pedido-search" placeholder="Buscar pedido...">
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
      $('.pedido-search').on('input', function () {
              const searchTerm = $(this).val().toLowerCase();

              $('table tbody tr').each(function () {
                  const nombreProducto = $(this).find('td:nth-child(2)').text().toLowerCase();
                  if (nombreProducto.includes(searchTerm)) {
                      $(this).show();
                  } else {
                      $(this).hide();
                  }
              });
          });
    },
    error: function() {
      console.error("Error al cargar pedidos");
    }
  });
}

function cargarAdminCategorias() {
  $.ajax({
    url: '../controller/obtenerCategoriasAdmin.php',
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
        <input type="text" class="form-control mb-3 categoria-search" placeholder="Buscar categoria...">
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
      $('.categoria-search').on('input', function () {
              const searchTerm = $(this).val().toLowerCase();

              $('table tbody tr').each(function () {
                  const nombreProducto = $(this).find('td:nth-child(2)').text().toLowerCase();
                  if (nombreProducto.includes(searchTerm)) {
                      $(this).show();
                  } else {
                      $(this).hide();
                  }
              });
          });
    },
    error: function() {
      console.error("Error al cargar categorías");
    }
  });
}

function cargarAdminAlertas() {
  $.ajax({
    url: '../controller/obtenerAlertasAdmin.php',
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
        <input type="text" class="form-control mb-3 alerta-search" placeholder="Buscar alerta...">
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
      $('.alerta-search').on('input', function () {
              const searchTerm = $(this).val().toLowerCase();

              $('table tbody tr').each(function () {
                  const nombreProducto = $(this).find('td:nth-child(2)').text().toLowerCase();
                  if (nombreProducto.includes(searchTerm)) {
                      $(this).show();
                  } else {
                      $(this).hide();
                  }
              });
          });
    },
    error: function() {
      console.error("Error al cargar alertas");
    }
  });
}
    
  
function cargarProductos() {
  $.ajax({
      url: '../controller/obtenerProductosUsuario.php',
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
                  <img src="${producto.imagen_url || 'img/default.svg'}" class="card-img-top" alt="${producto.nombre}">
                  <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion || 'Sin descripción'}</p>
                    <p class="card-text">Fecha de producción: ${producto.fecha_produccion || 'No especificada'}</p>
                    <p class="card-text">Unidad: ${producto.unidad_medida || 'N/A'}</p>
                    <p class="card-text">Precio: ${parseFloat(producto.precio_actual).toFixed(2)}</p>
                    <p class="card-text">Valoración: ${producto.valoracion_media ?? '0.0'}</p>
                    <p class="card-text">Estado: ${producto.vendido ? 'Vendido' : 'Disponible'}</p>
                    <div class="d-flex justify-content-between">
                      <button class="btn btn-outline-primary btn-sm btn-editar editar-producto" data-id="${producto.id}">Editar</button>
                      <button class="btn btn-outline-danger btn-sm btn-eliminar eliminar-producto" data-id="${producto.id}">Eliminar</button>
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
      url: '../controller/obtenerAlertasUsuario.php',
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
            
            // Asegura que el valor sea numérico o booleano verdadero
            const estaActiva = alerta.activo == 1 ? 'checked' : '';

            contenido += `
                <div class="col-md-4 alerta" data-id="${alertaId}">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${nombreClave}</h5>
                            <p class="card-text">Creada el: ${fechaCreacion}</p>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="alertaSwitch${alertaId}" ${estaActiva}>
                                <label class="form-check-label" for="alertaSwitch${alertaId}">Activar Alerta</label>
                            </div>
                            <div class="d-flex justify-content-between mt-3">
                                <button class="btn btn-outline-primary btn-sm btn-editar editar-alerta" data-id="${alertaId}">Editar</button>
                                <button class="btn btn-outline-danger btn-sm btn-eliminar eliminar-alerta" data-id="${alertaId}">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

          contenido += `</div>`; // Cerrar contenedor de alertas

          // Mostrar en el panel
          $panel.hide().html(contenido).fadeIn();
          $('.form-check-input').on('change', function () {
            const checkbox = $(this);
            const alertaId = checkbox.closest('.alerta').data('id');
            const nuevaActivo = checkbox.is(':checked') ? 1 : 0;

            // Enviar actualización por AJAX
            $.ajax({
                url: '../controller/actualizarEstadoAlerta.php',
                method: 'POST',
                data: {
                    id: alertaId,
                    activo: nuevaActivo
                },
                success: function (respuesta) {
                    console.log("Estado actualizado:", respuesta);
                },
                error: function () {
                    alert("Error al actualizar el estado de la alerta.");
                    // Revertimos el cambio si hay error
                    checkbox.prop('checked', !checkbox.is(':checked'));
                }
            });
        });
      },
      error: function(xhr) {
          console.log("Error al cargar las alertas");
      }
  });
}

function cargarPerfil() {
  $.ajax({
      url: '../controller/obtenerPerfilUsuario.php',
      method: 'GET',
      dataType: 'json',
      success: function(perfil) {
          console.log(perfil);

          // Asegurarse de que el panel tenga el contenido dinámico
          const contenido = `
  <h2>Editar perfil</h2>
  <form id="formPerfil" class="mt-3">
    <div class="mb-3">
      <label class="form-label">Nombre completo</label>
      <input type="text" class="form-control" name="nombre" value="${perfil.nombre || ''}">
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" class="form-control" name="email" value="${perfil.email || ''}">
    </div>
    <div class="mb-3">
      <label class="form-label">Teléfono</label>
      <input type="tel" class="form-control" name="telefono" value="${perfil.telefono || ''}">
    </div>
    <div class="mb-3">
      <label class="form-label">Dirección</label>
      <input type="text" class="form-control" name="direccion" value="${perfil.direccion || ''}">
    </div>
    <button class="btn btn-primary" type="submit">Guardar cambios</button>
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
    url: '../controller/obtenerFavoritosUsuario.php',
    method: 'GET',
    dataType: 'json',
    success: function(favoritos) {
      let contenido = `
        <h2>Mis favoritos</h2>
        <p>Aquí aparecerán tus artículos favoritos.</p>
        <div class="row g-4" id="lista-favoritos">
      `;

      favoritos.forEach(p => {
        const estrellas = generarEstrellas(p.estrellas); // Asume que tienes esta función
        const card = `
          <article class="col-6 col-md-3">
            <figure class="card h-100 product-card">
              <img src="${p.imgSrc || 'img/default.svg'}" class="card-img-top" alt="${p.alt}">
              <figcaption class="card-body">
                <div class="price">
                  <span class="old-price">${(p.oldPrice != p.currentPrice) ? (p.oldPrice ?? '') : ''}</span>
                  <span class="current-price">${p.currentPrice}</span>
                </div>
                <p class="text-muted mb-0">${p.alt}</p>
                <div class="card-actions">
                  <div class="rating">${estrellas}</div>
                </div>
                <div class="mt-3 d-flex justify-content-between">
                  <form class="d-flex gap-2">
                    <input type="hidden" name="productoId" value="${p.id}" />
                    <button type="button" class="btn btn-outline-secondary btn-detalle">Ver detalles</button>
                    <button type="button" class="btn btn-buy">Comprar</button>
                  </form>
                </div>
              </figcaption>
            </figure>
          </article>
        `;
        contenido += card;
      });

      contenido += `</div>`;
      $panel.hide().html(contenido).fadeIn();
      asignarEventos();
    },
    error: function() {
      console.log("Error al cargar los favoritos");
    }
  });
}
function generarEstrellas(cantidad) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<img src="img/${i <= cantidad ? 'star-fill' : 'star'}.svg" class="star" alt="${i <= cantidad ? '★' : '☆'}">`;
  }
  return html;
}
function asignarEventos() {

    $('.btn-detalle').off().on('click', function () {
      const productoId = $(this).closest('form').find('input[name="productoId"]').val();
      document.cookie = `producto_id=${productoId}; path=/; max-age=86400`;
      window.location.href = 'detalle-producto.php';
    });

    $('.btn-buy').off().on('click', function () {
      const productoId = $(this).closest('form').find('input[name="productoId"]').val();
      $.post('../controller/agregarACarrito.php', { productoId }, function () {
        const toast = new bootstrap.Toast($('#toastConfirmacion'));
        $('#toastConfirmacion .toast-body').text('Producto agregado al carrito');
        toast.show();
      });
    });
  }

function cargarCompras() {
  $.ajax({
    url: '../controller/obtenerComprasUsuario.php',
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
              <td><img src="${prod.imagen_url || 'img/default.svg'}" alt="${prod.nombre_producto}" style="width: 50px; height: 50px; object-fit: cover;"></td>
              <td>${prod.cantidad}</td>
              <td>${prod.precio_unitario.toFixed(2)}€</td>
              <td>${prod.subtotal.toFixed(2)}€</td>
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
      url: '../controller/obtenerPedidosUsuario.php',
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
      url: '../controller/obtenerSeguridadUsuario.php',
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
                  <button class="btn btn-danger" type="button" id="btn-actualizar-contrasena">Actualizar contraseña</button>
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









 // Mostrar modal para editar producto
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
    id: fila.find('td:eq(0)').text().trim(),
    nombre: fila.find('td:eq(1)').text().trim(),
    descripcion: fila.find('td:eq(2)').text().trim(),
    fecha_produccion: fila.find('td:eq(4)').text().trim(),
    unidad_medida: fila.find('td:eq(5)').text().trim(),
    precio: parseFloat(fila.find('td:eq(6)').text().replace('€', '').trim()),
    vendido: fila.find('td:eq(10)').text().trim() === 'Sí' ? 1 : 0,
    imagen_url: fila.find('td:eq(3)').find('img').attr('src') || '' // Asume que hay una <img> en la columna 3
  };

  console.log(producto);

  $('#editarProductoIdAdmin').val(producto.id);
  $('#editarNombreAdmin').val(producto.nombre);
  $('#editarDescripcionAdmin').val(producto.descripcion);
  $('#editarFechaProduccionAdmin').val(producto.fecha_produccion);
  $('#editarUnidadMedidaAdmin').val(producto.unidad_medida);
  $('#editarPrecioAdmin').val(producto.precio);
  $('#editarVendidoAdmin').val(producto.vendido);
  $('#editarImagenUrl').val(producto.imagen_url);

  if (producto.imagen_url) {
    $('#previewEditarAdmin').attr('src', producto.imagen_url).removeClass('d-none');
  } else {
    $('#previewEditarAdmin').addClass('d-none').attr('src', '');
  }

  $('#modalEditarProductoAdmin').modal('show');
}

// Previsualización de imagen
$('#editarImagenAdmin').on('change', function () {
  const file = this.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      $('#previewEditarAdmin').attr('src', e.target.result).removeClass('d-none');
    };
    reader.readAsDataURL(file);
  } else {
    $('#previewEditarAdmin').addClass('d-none').attr('src', '');
  }
});

// Envío del formulario con imagen
$('#formEditarProductoAdmin').submit(function (e) {
  e.preventDefault();

  const formData = new FormData();
  const file = $('#editarImagenAdmin')[0].files[0];

  if (file) {
    if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
      showToast('Imagen inválida. Debe ser una imagen y menor a 5MB.');
      return;
    }
    formData.append('imagen', file);
  }

  formData.append('id', $('#editarProductoIdAdmin').val());
  formData.append('nombre', $('#editarNombreAdmin').val());
  formData.append('descripcion', $('#editarDescripcionAdmin').val());
  formData.append('fecha_produccion', $('#editarFechaProduccionAdmin').val() || new Date().toISOString().slice(0, 10));
  formData.append('unidad_medida', $('#editarUnidadMedidaAdmin').val());
  formData.append('precio_actual', $('#editarPrecioAdmin').val());
  formData.append('vendido', $('#editarVendidoAdmin').val());
  formData.append('imagen_url', $('#editarImagenUrl').val());

  $.ajax({
    url: '../controller/actualizarProductoAdmin.php',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function (respuesta) {
      console.log(respuesta);
      showToast('Producto actualizado correctamente');
      $('#modalEditarProductoAdmin').modal('hide');
      cargarAdminProductos();
    },
    error: function () {
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

  const editarUsuarioId = $('#editarUsuarioId').val();
  const editarNombreUsuario = $('#editarNombreUsuario').val();
  const editarEmailUsuario = $('#editarEmailUsuario').val();
  const editarTelefonoUsuario = $('#editarTelefonoUsuario').val();
  const editarDireccionUsuario = $('#editarDireccionUsuario').val();
  const editarAdministradorUsuario = $('#editarAdministradorUsuario').val();

  const datos = {
    usuarioId: editarUsuarioId,
    nombre: editarNombreUsuario,
    email: editarEmailUsuario,
    telefono: editarTelefonoUsuario,
    direccion: editarDireccionUsuario,
    administrador: editarAdministradorUsuario
  };

  $.ajax({
      url: '../controller/actualizarUsuarioAdmin.php',
      method: 'POST',
      data: datos,
      success: function (respuesta) {
        console.log(respuesta)
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

  const editarCompraId = $('#editarCompraId').val();
  const editarNombrePagador = $('#editarNombrePagador').val();
  const editarDestinatario = $('#editarDestinatario').val();
  const editarDireccionEntrega = $('#editarDireccionEntrega').val();

  const datos = {
    compraId: editarCompraId,
    nombrePagador: editarNombrePagador,
    destinatario: editarDestinatario,
    direccionEntrega: editarDireccionEntrega
  };

  $.ajax({
    url: '../controller/actualizarCompraAdmin.php',
    method: 'POST',
    data: datos,
    success: function (data) {
      console.log(data)
      showToast('Compra actualizada correctamente');
      $('#modalEditarCompra').modal('hide');
      cargarAdminCompras();
    },
    error: function () {
      showToast('Error al actualizar la compra');
    }
  });
});











$(document).on('click', '.editar-alerta', function () {
  const isMobile = window.innerWidth < 768;  // Verificar si es móvil
  const $modalEl = $('#modalModificarAlerta');
  const $btn = $(this);

  // Si estamos en móvil y el modal está activo, cerrar el modal antes de mostrar
  if (isMobile && $modalEl.hasClass('show')) {
    $modalEl.modal('hide');
    $('.modal-backdrop').remove();
    mostrarModalEditarAlerta($btn);
  } else {
    mostrarModalEditarAlerta($btn);
  }
});

function mostrarModalEditarAlerta($btn) {
  // Obtener el ID de la alerta desde el botón que fue presionado
  const alertaId = $btn.data('id');

  // Obtener los datos de la alerta a través de AJAX
  $.ajax({
    url: '../controller/obtenerAlertaPorId.php',
    method: 'GET',
    data: { id: alertaId },
    dataType: 'json',
    success: function (alerta) {
      if (alerta) {
        // Asignar los datos de la alerta al formulario del modal
        $('#alertaPalabraClaveModificar').val(alerta.nombre_clave);
        $('#alertaCategoriaModificar').val(alerta.categoria_id);
        $('#alertaActivaModificar').prop('checked', alerta.activo == 1);

        // Mostrar el modal
        $('#modalModificarAlerta').modal('show');
      } else {
        showToast('No se pudo cargar la alerta.');
      }
    },
    error: function () {
      showToast('Error al obtener la alerta.');
    }
  });
}

// Enviar actualización
$('#formModificarAlerta').submit(function (e) {
  e.preventDefault();

  const datos = {
    id: $('#formModificarAlerta').data('id'),
    nombre_clave: $('#alertaPalabraClaveModificar').val(),
    categoria_id: $('#alertaCategoriaModificar').val(),
    activo: $('#alertaActivaModificar').is(':checked') ? 1 : 0
  };

  // Hacer el envío de los datos con AJAX
  $.ajax({
    url: '../controller/actualizarAlerta.php',
    method: 'POST',
    data: datos,
    success: function (response) {
      if (response.success) {
        showToast('Alerta actualizada correctamente');
        $('#modalModificarAlerta').modal('hide');
        cargarAlertas();  // Recargar las alertas después de la actualización
      } else {
        showToast('Error al actualizar la alerta');
      }
    },
    error: function () {
      showToast('Error al actualizar la alerta');
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

  const editarPedidoId = $('#editarPedidoId').val();
  const editarEstadoPedido = $('#editarEstadoPedido').val();
  const editarNotasPedido = $('#editarNotasPedido').val();

  const datos = {
    pedidoId: editarPedidoId,
    estado: editarEstadoPedido,
    notas: editarNotasPedido
  };

  $.ajax({
    url: '../controller/actualizarPedidoAdmin.php',
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

  const editarCategoriaId = $('#editarCategoriaId').val();
  const editarNombreCategoria = $('#editarNombreCategoria').val();
  const editarDescripcionCategoria = $('#editarDescripcionCategoria').val();

  const datos = {
    categoriaId: editarCategoriaId,
    nombre: editarNombreCategoria,
    descripcion: editarDescripcionCategoria
  };

  $.ajax({
    url: '../controller/actualizarCategoriaAdmin.php',
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
  console.log(id)

  if (!confirm('¿Estás seguro de que deseas eliminar este producto?')) return;

  $.ajax({
    url: '../controller/eliminarProductoAdmin.php',
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
    url: '../controller/eliminarUsuarioAdmin.php',
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
  console.log(id)

  if (!confirm('¿Seguro que deseas eliminar esta compra?')) return;

  $.ajax({
    url: '../controller/eliminarCompraAdmin.php',
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







$(document).on('click', '.eliminar-alerta-admin', function () {
  const id = $(this).data('id');
  console.log(id)

  if (!confirm('¿Seguro que deseas eliminar esta alerta?')) return;

  $.ajax({
    url: '../controller/eliminarAlertaAdmin.php',
    method: 'POST',
    data: { id },
    success: function (respuesta) {
      try {
        const res = JSON.parse(respuesta);
        if (res.status === 'ok') {
          showToast('Alerta eliminada correctamente');
          cargarAdminAlertas(); // Refresca la tabla
        } else {
          showToast('Error al eliminar la alerta');
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
    url: '../controller/eliminarPedidoAdmin.php',
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
    url: '../controller/eliminarCategoriaAdmin.php',
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






















// Oculta offcanvas en móviles al abrir el modal
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

  const fileInput = $('#nuevoImagen')[0];
  const file = fileInput.files[0];

  if (!file || !file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
    showToast('Imagen inválida.');
    return;
  }

  const formData = new FormData(this);

  // Si no se proporciona fecha, establecer fecha actual
  if (!formData.get('fecha_produccion')) {
    const hoy = new Date().toISOString().slice(0, 10);
    formData.set('fecha_produccion', hoy);
  }

  $.ajax({
    url: '../controller/crearProducto.php',
    type: 'POST',
    data: formData,
    processData: false,  // No procesar como query string
    contentType: false,  // No establecer content-type, lo hace automáticamente FormData
    success: function (response) {
      showToast('Producto añadido');
      console.log(response);
      cargarProductos();
      $('#modalProducto').modal('hide');
      $('#formNuevoProducto')[0].reset();
      $('#previewNueva').attr('src', '').addClass('d-none');
    },
    error: function (xhr) {
      showToast('Error al crear el producto');
      console.error(xhr.responseText);
    }
  });
});




















let productoEditando = null;

// Abrir modal de edición
$(document).on('click', '.editar-producto', function () {
  console.log('Botón editar clickeado');
  const isMobile = window.innerWidth < 768;
  const $offcanvasEl = $('#offcanvasContent');
  const offcanvasInstance = bootstrap.Offcanvas.getInstance($offcanvasEl[0]);
  const $btn = $(this);

  // Obtener el id del producto desde el data-id del botón
  const id = $btn.data('id');
  
  // Buscar el producto en el DOM utilizando el id
  productoEditando = $btn.closest('.producto');

  const mostrarModal = () => {
    const cardBody = productoEditando.find('.card-body');

    const nombre = cardBody.find('.card-title').text();
    const descripcion = cardBody.find('.card-text').eq(0).text().replace('Sin descripción', '').trim();
    const fecha = cardBody.find('.card-text').eq(1).text().replace('Fecha de producción: ', '').trim();
    const unidad = cardBody.find('.card-text').eq(2).text().replace('Unidad: ', '').trim();
    const precio = cardBody.find('.card-text').eq(3).text().replace('Precio: ', '').trim();
    const imagen = productoEditando.find('img').attr('src');

    // Llenar formulario
    $('#editarProductoId').val(id);
    $('#editarNombre').val(nombre);
    $('#editarDescripcion').val(descripcion);
    $('#editarUnidadProducto').val(unidad);
    $('#editarFechaProduccionProducto').val(fecha !== 'No especificada' ? fecha : '');
    $('#editarPrecioProducto').val(precio);
    $('#previewEditar').attr('src', imagen).removeClass('d-none');
    $('#editarImagen').val('');

    const modalEditarProducto = new bootstrap.Modal(document.getElementById('modalEditarProducto'));
    modalEditarProducto.show();
  };

  if (isMobile && offcanvasInstance) {
    $offcanvasEl.one('hidden.bs.offcanvas', mostrarModal);
    offcanvasInstance.hide();
  } else {
    mostrarModal();
  }
});

// Previsualizar nueva imagen
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

// Enviar formulario con imagen
$('#formEditarProducto').on('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const file = $('#editarImagen')[0].files[0];

  // Verificar si la imagen fue modificada
  if (file && (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024)) {
    showToast('Imagen inválida. Asegúrate de que es una imagen y menor de 5MB.');
    return;
  }

  // Si no se modificó la imagen, no se necesita enviar el campo de la imagen
  if (!file) {
    formData.delete('imagen'); // Eliminar el campo 'imagen' si no se modificó
  }

  // Si no hay fecha, establecer fecha actual
  if (!formData.get('fecha_produccion')) {
    const hoy = new Date().toISOString().slice(0, 10);
    formData.set('fecha_produccion', hoy);
  }

  $.ajax({
    url: '../controller/actualizarProducto.php',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      showToast('Producto actualizado');
      console.log(response);
      $('#modalEditarProducto').modal('hide');
      cargarProductos();
    },
    error: function (xhr) {
      showToast('Error al actualizar el producto');
      console.error(xhr.responseText);
    }
  });
});














$(document).ready(function () {
  $('#formCrearAlerta').on('submit', function (e) {
    e.preventDefault();

    const datosAlerta = {
      palabra_clave: $('#alertaPalabraClave').val(),
      categoria: $('#alertaCategoria').val(),
      activa: $('#alertaActiva').is(':checked') ? 1 : 0
    };

    $.ajax({
      url: '../controller/crearAlerta.php',
      type: 'POST',
      data: JSON.stringify(datosAlerta),
      contentType: 'application/json',
      success: function (response) {
        showToast('Alerta añadida correctamente');
        $('#modalCrearAlerta').modal('hide');
        $('#formCrearAlerta')[0].reset();
        cargarAlertas(); // función que debes tener para refrescar la lista
        console.log(response);
      },
      error: function (xhr, status, error) {
        showToast('Error al crear la alerta');
        console.error(xhr.responseText);
      }
    });
  });
});















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


// Abrir el modal de edición y cargar los datos de la alerta
$(document).on('click', '.editar-alerta', function () {
    const alertaId = $(this).data('id');

    $.ajax({
        url: '../controller/obtenerAlertaPorId.php',
        method: 'GET',
        data: { id: alertaId },
        dataType: 'json',
        success: function (alerta) {
            if (alerta) {
                $('#alertaPalabraClaveModificar').val(alerta.nombre_clave);
                $('#alertaCategoriaModificar').val(alerta.categoria_id);
                $('#alertaActivaModificar').prop('checked', alerta.activo == 1);
                $('#formModificarAlerta').data('id', alertaId);
                $('#modalModificarAlerta').modal('show');
            } else {
                alert("No se pudo cargar la alerta.");
            }
        },
        error: function () {
            alert("Error al obtener la alerta.");
        }
    });
});

// Guardar cambios de la alerta modificada
$(document).on('submit', '#formModificarAlerta', function (e) {
    e.preventDefault();

    const alertaId = $(this).data('id');
    const palabraClave = $('#alertaPalabraClaveModificar').val();
    const categoria = $('#alertaCategoriaModificar').val();
    const activa = $('#alertaActivaModificar').is(':checked') ? 1 : 0;

    $.ajax({
        url: '../controller/actualizarAlerta.php',
        method: 'POST',
        data: {
            id: alertaId,
            nombre_clave: palabraClave,
            categoria_id: categoria,
            activo: activa
        },
        success: function () {
            $('#modalModificarAlerta').modal('hide');
            cargarAlertas();
        },
        error: function () {
            alert("Error al actualizar la alerta.");
        }
    });
});






// ELIMINAR ALERTA
$(document).on('click', '.eliminar-alerta', function () {
  const alertaId = $(this).data('id'); // Obtener el ID de la alerta

  // Confirmar la eliminación
  const confirmDelete = confirm('¿Estás seguro de que quieres eliminar esta alerta?');

  if (confirmDelete) {
    // Realizar la solicitud AJAX para eliminar la alerta
    $.ajax({
      url: '../controller/eliminarAlerta.php',
      method: 'POST',
      data: { id: alertaId },
      success: function (response) {
          showToast('Alerta eliminada correctamente');
          cargarAlertas();  // Recargar las alertas después de la eliminación
      },
      error: function () {
        showToast('Error al eliminar la alerta');
      }
    });
  }
});















$(document).on('submit', '#formPerfil', function (e) {
  e.preventDefault();

  const datos = $(this).serialize(); // convierte inputs en string tipo "nombre=...&email=..."

  $.ajax({
    url: '../controller/actualizarPerfil.php',
    type: 'POST',
    data: datos,
    success: function (respuesta) {
      if (respuesta.status === 'ok') {
        showToast('Perfil actualizado correctamente');
      } else {
        showToast(respuesta.mensaje || 'Error al actualizar el perfil');
      }
    },
    error: function (xhr) {
      console.error(xhr.responseText);
      showToast('Error en la solicitud');
    }
  });
});










$(document).on('click', '#btn-actualizar-contrasena', function () {
  const actual = $('#current-password').val().trim();
  const nueva = $('#new-password').val().trim();

  if (!actual || !nueva) {
    showToast('Completa ambos campos de contraseña');
    return;
  }

  $.ajax({
    url: '../controller/actualizarContrasena.php',
    type: 'POST',
    dataType: 'json',
    data: {
      contrasena_actual: actual,
      contrasena_nueva: nueva
    },
    success: function (respuesta) {
      if (respuesta.status === 'ok') {
        showToast('Contraseña actualizada correctamente');
        $('#current-password').val('');
        $('#new-password').val('');
        cargarSeguridad(); // Vuelve a cargar los datos de seguridad
      } else {
        showToast(respuesta.mensaje || 'Error al actualizar la contraseña');
      }
    },
    error: function (xhr) {
      console.error(xhr.responseText);
      showToast('Error del servidor al cambiar contraseña');
    }
  });
});



















  // Eliminar producto
$(document).on('click', '.eliminar-producto', function () {
  const $btn = $(this);
  const id = $btn.data('id');

  if (!confirm('¿Estás seguro de que deseas eliminar este producto?')) return;

  $.ajax({
    url: '../controller/eliminarProductoAdmin.php',
    type: 'POST',
    data: { id: id },
    success: function (response) {
      const res = JSON.parse(response);
      if (res.status === 'ok') {
        showToast('Producto eliminado correctamente');
        cargarProductos();
      } else {
        showToast(response.mensaje || 'No se pudo eliminar el producto');
      }
    },
    error: function (xhr) {
      showToast('Error al eliminar el producto');
      console.error(xhr.responseText);
    }
  });
});









  if($(".active").attr("data-section")=="productos"){
      cargarProductos();
  }
  else{
    cargarAdminProductos();
  }
  // Cargar sección inicial

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
  $('#modalEditarUsuario').on('hidden.bs.modal', function () {
    // Siempre eliminar cualquier backdrop colgado
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open').css('padding-right', '');
  
    // Si estamos en móvil, volver a mostrar el offcanvas
    if (window.innerWidth < 768) {
      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }
  });
  $('#modalEditarCompra').on('hidden.bs.modal', function () {
    // Siempre eliminar cualquier backdrop colgado
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open').css('padding-right', '');
  
    // Si estamos en móvil, volver a mostrar el offcanvas
    if (window.innerWidth < 768) {
      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }
  });
  $('#modalEditarPedido').on('hidden.bs.modal', function () {
    // Siempre eliminar cualquier backdrop colgado
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open').css('padding-right', '');
  
    // Si estamos en móvil, volver a mostrar el offcanvas
    if (window.innerWidth < 768) {
      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }
  });
  $('#modalEditarCategoria').on('hidden.bs.modal', function () {
    // Siempre eliminar cualquier backdrop colgado
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open').css('padding-right', '');
  
    // Si estamos en móvil, volver a mostrar el offcanvas
    if (window.innerWidth < 768) {
      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }
  });
  $('#modalEditarProductoAdmin').on('hidden.bs.modal', function () {
    // Siempre eliminar cualquier backdrop colgado
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open').css('padding-right', '');
  
    // Si estamos en móvil, volver a mostrar el offcanvas
    if (window.innerWidth < 768) {
      const offcanvas = new bootstrap.Offcanvas('#offcanvasContent');
      offcanvas.show();
    }
  });
  $('#modalModificarAlertaAdmin').on('hidden.bs.modal', function () {
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