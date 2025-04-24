$(document).ready(function() {
    // Establecemos el evento de clic sobre la imagen
    $('.btn-favorite img').click(function() {
      // Comprobamos si la imagen actual es "imagen1.jpg"
      if ($(this).attr('src') === '../img/heart.svg') {
        $(this).attr('src', '../img/heart-fill.svg'); // Cambiamos la imagen a imagen2.jpg
      } else {
        $(this).attr('src', '../img/heart.svg'); // Si ya es imagen2.jpg, volvemos a imagen1.jpg
      }
    });
  });
  

  $(document).ready(function () {
    const toast = new bootstrap.Toast($('#toastConfirmacion'));

    function showToast(mensaje) {
        $('#toastConfirmacion .toast-body').text(mensaje);
        toast.show();
    }
    // Ver detalles
    $('.btn-detalle').on('click', function () {
      const form = $(this).closest('form')
      const productoId = form.find('input[name="productoId"]').val()
  
      const postForm = $('<form>', {
        method: 'POST',
        action: 'detalle-producto.html'
      }).append($('<input>', {
        type: 'hidden',
        name: 'productoId',
        value: productoId
      }))
  
      $('body').append(postForm)
      postForm.submit()
    })
  
    // Comprar
     $('.btn-buy').on('click', function () {
        const form = $(this).closest('form');
        const productoId = form.find('input[name="productoId"]').val();
      
        $.post('php/agregar-carrito.php', { productoId }, function (res) {
            showToast('Producto añadido');
        }).fail(function () {
            showToast('Error al añadir el producto');
        });
      });
  })













  

  $(document).ready(function () {
    const toast = new bootstrap.Toast($('#toastConfirmacion'));

    function showToast(mensaje) {
        $('#toastConfirmacion .toast-body').text(mensaje);
        toast.show();
    }
    // Al hacer clic en "Aplicar filtros"
    $('.btn-success').on('click', function () {
      const form = $(this).closest('form');
  
      // Obtener valores de filtros
      const filtros = {
        categoria: form.find('#categoria').val(),
        precio: form.find('#precio').val(),
        calificacion: form.find('[name="calificacion"]').val(),
        stock: form.find('#stock').is(':checked') ? 1 : 0,
        proximamente: form.find('#proximamente').is(':checked') ? 1 : 0,
        ordenar: form.find('#ordenar').val()
      };
  
      // Llamada AJAX al backend
      $.ajax({
        url: 'php/filtrar-productos.php',
        method: 'POST',
        data: filtros,
        dataType: 'json',
        success: function (productos) {
          mostrarProductos(productos); // Mostrar los productos devueltos
        },
        error: function () {
            showToast('Error al cargar los productos');
        }
      });
    });
  
    function mostrarProductos(productos) {
      const contenedor = $('#productos-container'); // Asegúrate de tener este div
      contenedor.empty();
  
      if (productos.length === 0) {
        contenedor.append('<p>No se encontraron productos con esos filtros.</p>');
        return;
      }
  
      productos.forEach(p => {
        const card = `
          <article class="col-6 col-md-3">
            <figure class="card h-100 product-card">
              <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
              <figcaption class="card-body">
                <div class="price">
                  <span class="old-price">${p.precio_original} €</span>
                  <span class="current-price">${p.precio_actual} €</span>
                </div>
                <p class="text-muted mb-0">${p.nombre}</p>
                <div class="card-actions">
                  <button class="btn-favorite" type="button">
                    <img src="../img/heart.svg" alt="favorito">
                  </button>
                  <div class="rating">
                    ${generarEstrellas(p.calificacion)}
                  </div>
                </div>
                <div class="mt-3 d-flex justify-content-between">
                  <form class="d-flex gap-2">
                    <input type="hidden" name="productoId" value="${p.id}" />
                    <input type="button" class="btn btn-outline-secondary btn-detalle" value="Ver detalles" />
                    <input type="button" class="btn btn-buy" value="Comprar" />
                  </form>
                </div>
              </figcaption>
            </figure>
          </article>
        `;
        contenedor.append(card);
      });
    }
  
    function generarEstrellas(calificacion) {
      let estrellas = '';
      for (let i = 1; i <= 5; i++) {
        estrellas += `<img src="../img/${i <= calificacion ? 'star-fill' : 'star'}.svg" class="star" alt="${i <= calificacion ? '★' : '☆'}">`;
      }
      return estrellas;
    }
  });
  










  $(document).ready(function () {
    const stars = $('#star-calification img');
    stars.tooltip();
  
    // Hover: muestra la cantidad de estrellas hasta la actual
    stars.on('mouseenter', function () {
      const hoverValue = $(this).data('value');
      updateStars(hoverValue);
    });
  
    // Mouse out: vuelve al valor guardado
    $('#star-calification').on('mouseleave', function () {
      const savedRating = $('#calificacion').val();
      updateStars(savedRating);
    });
  
    // Click: guarda el valor
    stars.on('click', function () {
      const selectedValue = $(this).data('value');
      $('#calificacion').val(selectedValue);
      updateStars(selectedValue);
    });

    // Función para actualizar visualmente las estrellas
    function updateStars(value) {
      stars.each(function () {
        const starValue = $(this).data('value');
        if (starValue <= value) {
            $(this).attr('src','../img/star-fill.svg');
        } else {
            $(this).attr('src','../img/star.svg');
        }
      });
    }
  });










  $(document).ready(function () {
    const $slider = $('#precio');
    const $tooltip = $('#precioTooltip');
  
    // Setear valor inicial al máximo
    const max = $slider.attr('max');
    $slider.val(max);
    $tooltip.text(`${max} €`);
  
    // Posicionar y actualizar el tooltip
    function updateTooltip() {
      const value = $slider.val();
      const percent = (value - $slider.attr('min')) / (max - $slider.attr('min'));
      const sliderWidth = $slider.width();
      const tooltipLeft = percent * sliderWidth;
  
      $tooltip.text(`${value} €`);
      $tooltip.css('left', tooltipLeft + 'px');
    }
  
    // Actualizar cuando cambia el valor
    $slider.on('input', updateTooltip);
  
    // Llamar al cargar
    updateTooltip();
  });