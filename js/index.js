$(document).ready(function () {
  // Establecemos el evento de clic sobre la imagen
  
});

$(document).ready(function () {
  // Array de productos
  const productos = [
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 4,  // Número de estrellas llenas (del 1 al 5)
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 3,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 5,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 2,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 4,  // Número de estrellas llenas (del 1 al 5)
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 3,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 5,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 2,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 4,  // Número de estrellas llenas (del 1 al 5)
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 3,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 5,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 2,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 4,  // Número de estrellas llenas (del 1 al 5)
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 3,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 5,
    },
    {
      imgSrc: 'img/manzana.svg',
      alt: 'Manzanas',
      oldPrice: '4,00 €',
      currentPrice: '3,00 €',
      description: 'Manzanas rojas',
      rating: 2,
    },
  ];

  // Función para generar un artículo de producto
  function generarProducto(producto,pos) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= producto.rating) {
        stars += `<img src="img/star-fill.svg" alt="estrella llena" class="star">`;
      } else {
        stars += `<img src="img/star.svg" alt="estrella vacia" class="star">`;
      }
    }

    if((pos+1) % 4 === 2 || (pos+1) % 4 === 3){
      anadirClase = "d-none d-md-block";
    }
    else{
      anadirClase = "";
    }

    return `
            <article class="col-6 col-md-3 ${anadirClase}">
                <figure class="card h-100 product-card">
                    <img src="${producto.imgSrc}" class="card-img-top" alt="${producto.alt}">
                    <figcaption class="card-body">
                        <div class="price">
                            <span class="old-price">${producto.oldPrice}</span>
                            <span class="current-price">${producto.currentPrice}</span>
                        </div>
                        <p class="text-muted mb-0">${producto.description}</p>
                        <div class="card-actions">
                            <button class="btn-favorite">
                                <img src="img/heart.svg" alt="favorito">
                            </button>
                            <div class="rating">
                                ${stars}
                            </div>
                            <button class="btn btn-buy">Comprar</button>
                        </div>
                    </figcaption>
                </figure>
            </article>
        `;
  }

  // Llenar el carrusel con los productos
  let contentHTML = '';
  let itemsCount = productos.length;
  let productosEnSlide = "";
  // Recorrer los productos y generar los slides
  for (let i = 0; i < itemsCount; i++) {
    const producto = productos[i];
    const isActive = i === 3 ? 'active' : '';  // Primer slide activo
    productosEnSlide += generarProducto(producto,i)
    if ((i+1) % 4 == 0) {
      contentHTML += `
            <div class="carousel-item ${isActive}">
                <div class="row">
                    ${productosEnSlide}
                </div>
            </div>
        `;
      productosEnSlide = ""
    }
  }

  // Insertar los productos generados dentro del contenedor del carrusel
  $('#carouselProductos1 .carousel-inner').html(contentHTML);

  $('.btn-favorite img').click(function () {
    // Comprobamos si la imagen actual es "imagen1.jpg"
    if ($(this).attr('src') === 'img/heart.svg') {
      $(this).attr('src', 'img/heart-fill.svg'); // Cambiamos la imagen a imagen2.jpg
    } else {
      $(this).attr('src', 'img/heart.svg'); // Si ya es imagen2.jpg, volvemos a imagen1.jpg
    }
  });
});