document.addEventListener("DOMContentLoaded", function() {
    // Comprobar si hay un correo guardado en localStorage
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
        document.getElementById("remember-me").checked = true;
    }
    
    // Validación del formulario
    document.getElementById("login-form").onsubmit = function(event) {
        // Prevenir el envío del formulario por defecto
        event.preventDefault();
        
        // Obtener los valores de los campos
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        // Validación del email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            errorMessage.textContent = "Por favor, ingresa un correo electrónico válido.";
            return;
        }

        // Validación de la contraseña
        if (password.length < 6) {
            errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres.";
            return;
        }

        // Si todo es válido, guardar el correo si "Recuérdame" está seleccionado
        if (document.getElementById("remember-me").checked) {
            localStorage.setItem("savedEmail", email);
        } else {
            localStorage.removeItem("savedEmail");
        }

        // Limpiar mensaje de error y enviar el formulario
        errorMessage.textContent = ""; // Limpiar mensaje de error
        document.getElementById("login-form").submit();
    };
});
