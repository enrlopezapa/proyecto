$(document).ready(function(){
    $('#verifyForm').on('submit', function(e) {
        e.preventDefault();
        $('#verify-error').addClass('d-none');
        $('#verify-success').addClass('d-none');
    
        const data = {
          email: $('#email').val(),
          codigo: $('#codigo').val()
        };
    
        $.ajax({
          url: '../php/validar.php',
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(data),
          success: function(response) {
            $('#verify-success').removeClass('d-none').text(response.message);
          },
          error: function(xhr) {
            const err = JSON.parse(xhr.responseText);
            $('#verify-error').removeClass('d-none').text(err.error || 'Error al validar');
          }
        });
      });
});