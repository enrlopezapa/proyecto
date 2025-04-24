$(document).ready(function() {
    // Establecemos el evento de clic sobre la imagen
    $('.btn-favorite img').click(function() {
      // Comprobamos si la imagen actual es "imagen1.jpg"
      if ($(this).attr('src') === 'img/heart.svg') {
        $(this).attr('src', 'img/heart-fill.svg'); // Cambiamos la imagen a imagen2.jpg
      } else {
        $(this).attr('src', 'img/heart.svg'); // Si ya es imagen2.jpg, volvemos a imagen1.jpg
      }
    });
  });