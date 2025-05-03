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
            const err = JSON.parse(xhr.responseText);
            $('#register-error').removeClass('d-none').text(err.error || 'Error en el registro');
          }
        });
      });
});
