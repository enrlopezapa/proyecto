$(document).ready(function () {
  function cargarProductos(categoria, carruselID) {
    $.ajax({
      url: '../controller/traerProductos.php',
      method: 'GET',
      data: { categoria: categoria }, // Enviamos la categoría por GET
      success: function (data) {
        const productos = data;
        let contentHTML = '';
        let productosEnSlide = '';

        productos.forEach((producto, i) => {
          let stars = '';
          for (let j = 1; j <= 5; j++) {
            stars += `<img src="img/${j <= producto.rating ? 'star-fill' : 'star'}.svg" class="star" alt="estrella">`;
          }

          const anadirClase = ((i + 1) % 4 === 2 || (i + 1) % 4 === 3) ? 'd-none d-md-block' : '';

          productosEnSlide += `
            <article class="col-6 col-md-3 ${anadirClase}">
              <figure class="card h-100 product-card">
                <img src="${producto.imgSrc}" class="card-img-top" alt="${producto.alt}">
                <figcaption class="card-body">
                  <div class="price">
                    <span class="old-price">${(producto.oldPrice != producto.currentPrice) ? (producto.oldPrice ?? '') : ''}</span>
                    <span class="current-price">${producto.currentPrice}</span>
                  </div>
                  <p class="text-muted mb-0">${producto.nombre}</p>
                  <div class="card-actions">
                    <div class="rating">${stars}</div>
                  </div>
                </figcaption>
              </figure>
            </article>`;

          if ((i + 1) % 4 === 0 || i === productos.length - 1) {
            const isActive = (i + 1) === 4 ? 'active' : '';
            contentHTML += `
              <div class="carousel-item ${isActive}">
                <div class="row">${productosEnSlide}</div>
              </div>`;
            productosEnSlide = '';
          }
        });

        $(`#${carruselID} .carousel-inner`).html(contentHTML);
      },
      error: function (xhr) {
        console.error(`Error al cargar productos de ${categoria}:`, xhr.responseText);
      }
    });
  }

  // Cargar los tres carruseles
  cargarProductos('todos', 'carouselProductos1');
  cargarProductos('fruta', 'carouselProductos2');
  cargarProductos('verdura', 'carouselProductos3');

  $(document).on('click', '.btn-favorite img', function () {
    const src = $(this).attr('src');
    $(this).attr('src', src.includes('fill') ? 'img/heart.svg' : 'img/heart-fill.svg');
  });

  $('.btn-category').on('click', function () {
  const categoria = $(this).attr('title').toLowerCase();
  window.location.href = `productos.php?categoria=${categoria}`;
});
});