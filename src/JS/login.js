document.addEventListener("DOMContentLoaded", function() {
    // Cargar el botón de Home en todas las páginas
    fetch("home-button.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("home-button-container").innerHTML = data;
        });

    // Validación de login
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const username = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");

        // Credenciales predefinidas
        const validUser = "usuario123@gmail.com";
        const validPassword = "contraseña123";

        if (username === validUser && password === validPassword) {
            window.location.href = "bienvenida.html"; // Redirige si es correcto
        } else {
            errorMessage.textContent = "Usuario o contraseña incorrectos";
        }
    });
});
