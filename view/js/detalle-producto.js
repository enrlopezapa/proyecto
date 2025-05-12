function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

$(document).ready(function () {
    const toast = new bootstrap.Toast($('#toastConfirmacion'));

    function showToast(mensaje) {
        $('#toastConfirmacion .toast-body').text(mensaje);
        toast.show();
    }

    const productoId = getCookie('producto_id');

    if (!productoId) {
        showToast('Producto no especificado.');
        return;
    }

    let chart;
    function generarEstrellas(cantidad) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<img src="img/${i <= cantidad ? 'star-fill' : 'star'}.svg" class="star" alt="${i <= cantidad ? '★' : '☆'}">`;
  }
  return html;
}

    $.getJSON(`../controller/obtenerDetalleProducto.php?id=${productoId}`, function (data) {
        if (data && data.producto) {
            const p = data.producto;

            $('.col-md-5 img')
                .attr('src', p.imagen_url || 'img/default.svg')
                .attr('alt', p.nombre);

            $('.col-md-7 h1').text(p.nombre);
            $('.col-md-7 p.text-muted').text(p.descripcion);
            $('.col-md-7 .fs-4.text-success').text(`${p.precio_actual} €`);

            // Mostrar precio original solo si es distinto del actual
            if (p.precio_original && p.precio_original !== p.precio_actual) {
                $('.col-md-7 .text-decoration-line-through')
                    .text(`${p.precio_original} €`)
                    .show();
            } else {
                $('.col-md-7 .text-decoration-line-through').text('').hide();
            }

            $('.col-md-7').find('p:contains("Vendedor")')
                .html(`<strong>Vendedor:</strong> ${p.vendedor || 'No disponible'}`);

            $('.col-md-7').find('p:contains("Valoración")')
                .html(`<strong>Valoración media del vendedor:</strong> ${generarEstrellas(p.valoracion_media)})`);

            // Crear gráfico de historial de precios
            const ctx = document.getElementById('graficoPrecios').getContext('2d');

            if (chart) chart.destroy();

            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.historial.map(h => h.fecha_inicio),
                    datasets: [{
                        label: 'Precio (€)',
                        data: data.historial.map(h => h.precio),
                        borderColor: '#198754',
                        backgroundColor: 'rgba(25, 135, 84, 0.2)',
                        fill: true,
                        tension: 0.3,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }]
                },
                options: {
                    scales: {
                        y: { beginAtZero: false }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                color: '#212529',
                                font: { size: 14 }
                            }
                        }
                    }
                }
            });

        } else {
            showToast('Producto no encontrado');
        }
    }).fail(() => {
        showToast('Error al cargar datos del producto');
    });

$(document).on('click', ".btn-buy", function () {
        $.post('../controller/agregarACarrito.php', { productoId: productoId }, function (response) {
            showToast('Producto añadido');
            console.log(response); // Opcional: para verificar qué devuelve el servidor
        }).fail(() => {
            showToast('Error al añadir el producto');
        });
    }); // Agregar al carrito
})