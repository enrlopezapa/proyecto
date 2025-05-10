$(document).ready(function(){
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();
        $('#register-error').addClass('d-none');
        $('#register-success').addClass('d-none');
    
        const data = {
          nombre: $('#fullName').val(),
          email: $('#emailReg').val(),
          password: $('#passwordReg').val(),
          confirmPassword: $('#confirmPassword').val()
        };
    
        if (data.password !== data.confirmPassword) {
          $('#register-error').removeClass('d-none').text('Las contraseñas no coinciden');
          return;
        }
    
        $.ajax({
          url: '../php/registro.php',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(data),
          success: function(response) {
            $('#register-success').removeClass('d-none').text(response.message);
          },
          error: function(xhr) {
            // Intentar analizar la respuesta como JSON
            let err = { error: 'Error inesperado del servidor. Intenta más tarde.' };

            // Si la respuesta es válida JSON, asignar el error del servidor
            try {
              err = JSON.parse(xhr.responseText);
            } catch (e) {
              // Si ocurre un error al parsear, se mantendrá el mensaje por defecto
              console.error('No se pudo analizar la respuesta del servidor');
            }

            // Mostrar el error en el frontend
            $('#register-error').removeClass('d-none').text(err.error || 'Error en el registro');
          }
        });
      });
});
