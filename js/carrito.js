function cargarCarrito() {
    $.getJSON('../php/traerDatosCarrito.php', function(productos) {
        const tbody = $('.table tbody');
        tbody.empty();

        let subtotal = 0;
        const productoIds = [];
        console.log(productos)

        productos.forEach(producto => {
            subtotal += parseFloat(producto.precio_actual);
            productoIds.push(producto.id);

            const fila = `
                <tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio_actual}</td>
                    <td><button class="btn btn-danger btn-sm eliminar" data-id="${producto.id}">Eliminar</button></td>
                </tr>`;
            tbody.append(fila);
        });

        if (productos && productos.length > 0) {
            renderResumenCarrito(subtotal, productoIds);
        }
    });
}

function eliminarProducto(id) {
    $.post('../php/eliminarProductoCarrito.php', { id }, function(response) {
        if (response.success) {
            cargarCarrito();
        }
    }, 'json');
}

function renderResumenCarrito(subtotal, productoIds) {
    const total = subtotal;

    const resumenHTML = `
<div class="row mt-5">
  <div class="col-12 col-md-4 offset-md-8">
    <div class="card shadow-sm">
      <div class="card-header bg-success text-white">
        <strong>Resumen del Carrito</strong>
      </div>
      <div class="card-body">

        <!-- Formulario de Dirección -->
        <form id="form-envio">
          <div class="mb-2">
            <label>Destinatario</label>
            <input type="text" id="nombre" class="form-control" required>
          </div>
          <div class="mb-2">
            <label>Direccion</label>
            <input type="text" id="calle" class="form-control" required>
          </div>
        </form>

        <!-- Resumen del carrito -->
        <ul class="list-unstyled">
          <li class="d-flex justify-content-between">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
          </li>
          <li class="d-flex justify-content-between">
            <span>Envío:</span>
            <span>Gratis</span>
          </li>
          <li class="d-flex justify-content-between">
            <span><strong>Total:</strong></span>
            <span><strong>$${total.toFixed(2)}</strong></span>
          </li>
        </ul>

        <div id="paypal-button-container"></div>
      </div>
    </div>
  </div>
</div>`;

    $.ajax({
  url: '../php/obtenerDatosUsuario.php',
  method: 'GET',
  success: function(data) {
    const usuario = JSON.parse(data);
    $('#resumen-carrito-container').html(resumenHTML);
    $('#nombre').val(usuario.nombre);
    $('#calle').val(usuario.calle);
  },
  error: function() {
    alert("No se pudieron cargar los datos del usuario.");
  }
});

    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
        purchase_units: [{
            amount: {
                value: total.toFixed(2)
            }
        }]
    });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Pago completado por ' + details.payer.name.given_name);
                            const nombre = $('#nombre').val();
    const calle = $('#calle').val();

                // Datos que necesitas
                const datosCompra = {
                    direccion_entrega: calle,
                    destinatario: nombre
                };

                // Enviar datos de la compra al servidor
                $.ajax({
                    url: '../php/registrarCompra.php',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(datosCompra),
                    success: function(response) {
                        console.log('Compra registrada:', response);

                        // Ahora marcamos los productos vendidos
                        $.ajax({
                            url: '../php/marcarProductosVendidos.php',
                            method: 'POST',
                            contentType: 'application/json',
                            data: JSON.stringify({ productos: productoIds }),
                            success: function(response) {
                                console.log('Productos marcados como vendidos:', response);
                                window.location.href = "gracias.php";
                            },
                            error: function(xhr, status, error) {
                                console.error("Error al actualizar productos:", error);
                                alert("Ocurrió un error al actualizar los productos.");
                            }
                        });
                    },
                    error: function(xhr, status, error) {
                        console.error("Error al registrar la compra:", error);
                        alert("Ocurrió un error al registrar la compra.");
                    }
                });
            });
        },
        onError: function(err) {
            console.error("Error en el pago: ", err);
            alert("Ocurrió un error al procesar el pago. Intenta nuevamente.");
        }
    }).render('#paypal-button-container');
}

$(document).ready(function() {
    cargarCarrito();
    $('.table').on('click', '.eliminar', function() {
        const id = $(this).data('id');
        eliminarProducto(id);
    });
});