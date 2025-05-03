function cargarCarrito() {
    $.getJSON('../php/traerDatosCarrito.php', function(productos) {
        const tbody = $('#carrito-table tbody');
        tbody.empty();

        let subtotal = 0;

        productos.forEach(producto => {
            subtotal += parseFloat(producto.precio);

            const fila = `
                <tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio}</td>
                    <td><button class="btn btn-danger btn-sm eliminar" data-id="${producto.id}">Eliminar</button></td>
                </tr>`;
            tbody.append(fila);
        });

        renderResumenCarrito(subtotal);
    });
}

function eliminarProducto(id) {
    $.post('../php/eliminarProductoCarrito.php', { id }, function(response) {
        if (response.success) {
            cargarCarrito();
        }
    }, 'json');
}

function renderResumenCarrito(subtotal) {
    const total = subtotal; // Envío es gratis
    const resumenHTML = `
    <div class="row mt-5">
      <div class="col-12 col-md-4 offset-md-8">
        <div class="card shadow-sm">
          <div class="card-header bg-success text-white">
            <strong>Resumen del Carrito</strong>
          </div>
          <div class="card-body">
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

    $('#resumen-carrito-container').html(resumenHTML);

    // Aquí se carga el botón de PayPal ----------------------------------------------------------------------------------------------------- credenciales sandbox Paypal
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
                // Aquí podrías redirigir, limpiar carrito, guardar en base de datos, etc.
                // Redirigir después del pago
                window.location.href = "gracias.html";  // Página de agradecimiento o éxito
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

    $('#carrito-table').on('click', '.eliminar', function() {
        const id = $(this).data('id');
        eliminarProducto(id);
    });
});