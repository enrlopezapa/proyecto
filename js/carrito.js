function cargarCarrito() {
    $.getJSON('../php/traerDatosCarrito.php', function(productos) {
        const tbody = $('#carrito-table tbody');
        tbody.empty();

        let subtotal = 0;
        const productoIds = []; // Aquí almacenaremos los IDs de los productos

        productos.forEach(producto => {
            subtotal += parseFloat(producto.precio);
            productoIds.push(producto.id); // Guardar ID

            const fila = `
                <tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio}</td>
                    <td><button class="btn btn-danger btn-sm eliminar" data-id="${producto.id}">Eliminar</button></td>
                </tr>`;
            tbody.append(fila);
        });

        if(productos && productos.length > 0){
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

                // Enviar los IDs de productos al servidor
                $.ajax({
                    url: '../php/marcarProductosVendidos.php',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({ productos: productoIds }),
                    success: function(response) {
                        console.log('Productos marcados como vendidos:', response);
                        window.location.href = "gracias.html";
                    },
                    error: function(xhr, status, error) {
                        console.error("Error al actualizar productos:", error);
                        alert("Ocurrió un error al actualizar los productos. Por favor contáctanos.");
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
    $('#carrito-table').on('click', '.eliminar', function() {
        const id = $(this).data('id');
        eliminarProducto(id);
    });
});