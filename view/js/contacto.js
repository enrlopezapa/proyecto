$(document).ready(function(){
    $('#form-contacto').on('submit', function (e) {
  e.preventDefault();

  const nombre = $('#nombre').val().trim();
  const email = $('#email').val().trim();
  const mensaje = $('#mensaje').val().trim();
  const estado = $('#mensaje-estado');
  estado.html('');

  $.ajax({
    url: '../controller/enviarFormulario.php',
    type: 'POST',
    data: {
      nombre: nombre,
      email: email,
      mensaje: mensaje
    },
    success: function (response) {
      estado.html(`<div class="alert alert-success">Mensaje enviado. Muchas gracias por contactar con nosotros!</div>`);
      $('#form-contacto')[0].reset();
    },
    error: function (xhr) {
      const errorText = xhr.responseText || 'Error al enviar el mensaje. Intenta más tarde.';
      estado.html(`<div class="alert alert-danger">${errorText}</div>`);
    }
  });
});
});