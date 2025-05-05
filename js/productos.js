$(document).ready(function () {

  const toast = new bootstrap.Toast($('#toastConfirmacion'));

    function showToast(mensaje) {
        $('#toastConfirmacion .toast-body').text(mensaje);
        toast.show();
    }
  // Obtener productos al cargar
  cargarProductos();

    // Al hacer clic en "Aplicar filtros"
$('.btn.btn-success').on('click', function () {
  const form = $('#filtrosContainer form');

  // Obtener valores de los filtros
  const filtros = {
    categoria: form.find('#categoria').val(),
    precio: form.find('#precio').val(),
    calificacion: form.find('#calificacion').val() || 0, // Del input hidden
    ordenar: form.find('#ordenar').val()
  };

  // Llamada AJAX al backend para filtrar
  $.ajax({
    url: '../php/filtrarProductos.php', // asegúrate de que esta ruta es correcta
    method: 'POST',
    data: filtros,
    dataType: 'json',
    success: function (productos) {
      mostrarProductos(productos); // ya definida más arriba
    },
    error: function () {
      showToast('Error al aplicar filtros');
    }
  });
});

  function cargarProductos() {
    $.ajax({
      url: '../php/traerProductosBuscados.php',
      method: 'GET',
      dataType: 'json',
      success: function (productos) {
        mostrarProductos(productos);
      },
      error: function () {
        $('#productos-container').html('<p>Error al cargar productos.</p>');
      }
    });
  }

  function mostrarProductos(productos) {
    const contenedor = $('#productos-container');
    contenedor.empty();

    if (productos.length === 0) {
      contenedor.append('<p>No se encontraron productos.</p>');
      return;
    }

    productos.forEach(p => {
      const estrellas = generarEstrellas(p.calificacion);

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
      contenedor.append(card);
    });

    // Reasignar eventos dinámicos
    asignarEventos();
  }

  function generarEstrellas(calificacion) {
    let estrellas = '';
    for (let i = 1; i <= 5; i++) {
      estrellas += `<img src="../img/${i <= calificacion ? 'star-fill' : 'star'}.svg" class="star" alt="${i <= calificacion ? '★' : '☆'}">`;
    }
    return estrellas;
  }

  function asignarEventos() {
    $('.btn-favorite img').off().on('click', function () {
      const img = $(this);
      img.attr('src', img.attr('src') === '../img/heart.svg' ? '../img/heart-fill.svg' : '../img/heart.svg');
    });

    $('.btn-detalle').off().on('click', function () {
      const productoId = $(this).closest('form').find('input[name="productoId"]').val();
      document.cookie = `producto_id=${productoId}; path=/; max-age=86400`;
      window.location.href = 'detalle-producto.html';
    });

    $('.btn-buy').off().on('click', function () {
      const productoId = $(this).closest('form').find('input[name="productoId"]').val();
      $.post('agregar_a_carrito.php', { productoId }, function () {
        const toast = new bootstrap.Toast($('#toastConfirmacion'));
        $('#toastConfirmacion .toast-body').text('Producto agregado al carrito');
        toast.show();
      });
    });
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