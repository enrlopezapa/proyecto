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





    // Boton Ver detalles
    $('.btn-detalle').on('click', function () {
      const form = $(this).closest('form')
      const producto_id = form.find('input[name="productoId"]').val()
      //Creamos la cookie
      document.cookie = `producto_id=${producto_id}; path=/; max-age=86400`;

      window.location.href = 'detalle-producto.html';
    })
  






    // Boton Comprar
    $('.btn-buy').on('click', function () {
      const form = $(this).closest('form');
      const productoId = form.find('input[name="productoId"]').val();
  
      // Enviar por fetch a PHP (sesión)
      $.post('agregar_a_carrito.php', { productoId: productoId }, function (data) {
        showToast('Producto agregado al carrito');
        console.log(data);
      });
    });

  });





  $(document).ready(function () {
  const btn = document.getElementById("toggleFiltrosBtn");
    const filtros = document.getElementById("filtrosContainer");

    btn.addEventListener("click", () => {
      filtros.classList.toggle("d-none");
      btn.textContent = filtros.classList.contains("d-none") ? "Abrir filtros" : "Cerrar filtros";
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
          <product-card
          ruta-html="../components/product-card/product-card-template.html"
            image="${p.imagen}"
            alt="${p.nombre}"
            old-price="${p.precio_original} €"
            price="${p.precio_actual} €"
            title="${p.nombre}"
            stars="${p.calificacion}">
          </product-card>
        `;
        contenedor.append(card);
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