$(document).ready(function () {
    const toast = new bootstrap.Toast($('#toastConfirmacion'));

    function showToast(mensaje) {
        $('#toastConfirmacion .toast-body').text(mensaje);
        toast.show();
    }
    $.ajax({
        url: '../php/obtenerProductosUsuario.php',
        method: 'GET',
        success: function(datosProducto) {
          console.log(datosProducto)
        },
          error: function(xhr) {
            console.log("error al cargar los datosProducto")
          }
        })

    // Configuración del gráfico de historial de precios
    const ctx = document.getElementById('graficoPrecios').getContext('2d');
    const priceHistoryChart = new Chart(ctx, {
        type: 'line', // Gráfico de línea
        data: {
            labels: historialPrecios.fechas, // Etiquetas de los meses
            datasets: [{
                label: 'Precio (€)', // Etiqueta del gráfico
                data: historialPrecios.precios, // Datos de precios
                borderColor: '#198754', // Color de la línea
                backgroundColor: 'rgba(25, 135, 84, 0.2)', // Color del área debajo de la línea
                fill: true, // Rellenar el área bajo la línea
                tension: 0.3, // Curvatura de la línea
                pointRadius: 5, // Tamaño de los puntos
                pointHoverRadius: 7 // Tamaño al pasar el ratón por los puntos
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false // No empezar desde cero
                }
            },
            plugins: {
                legend: {
                    display: true, // Mostrar leyenda
                    labels: {
                        color: '#212529', // Color de la leyenda
                        font: {
                            size: 14 // Tamaño de la fuente de la leyenda
                        }
                    }
                }
            }
        }
    });

    // Función para añadir al carrito con jQuery
    $('.btn-buy').on('click', function () {
        const form = $(this).closest('form');
        const productoId = form.find('input[name="productoId"]').val();
      
        $.post('../php/agregar-carrito.php', { productoId }, function (res) {
            showToast('Producto añadido');
        }).fail(function () {
            showToast('Error al añadir el producto');
        });
      });
});