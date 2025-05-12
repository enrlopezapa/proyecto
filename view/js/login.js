$(document).ready(function() {
    // Manejar el envío del formulario
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        // Limpiar el mensaje de error anterior
        $('#error-message').addClass('d-none').text('');

        // Obtener los valores del formulario
        var email = $('#email').val();
        var password = $('#password').val();

        // Enviar la solicitud AJAX
        $.ajax({
            url: '../controller/login.php',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ email: email, password: password }),
            success: function(response) {
                if (response.success) {
                    window.location.href = 'home.php';  // Redirige a index.php
                }
            },
            error: function(xhr) {
                var error = JSON.parse(xhr.responseText);
                $('#error-message').removeClass('d-none').text(error.error || 'Ocurrió un error');
            }
        });
    });
});