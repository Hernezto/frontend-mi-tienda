document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const togglePasswordButton = document.getElementById("togglePassword");
    const toggleConfirmPasswordButton = document.getElementById("toggleConfirmPassword");
    const errorMessages = document.querySelectorAll(".error-message");

    // Validación del formulario
    registerForm.addEventListener("submit", function(event) {
        let isValid = true;

        if (nombreInput.value.trim().length < 3) {
            errorMessages[0].style.display = "block";
            isValid = false;
        } else {
            errorMessages[0].style.display = "none";
        }

        if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
            errorMessages[1].style.display = "block";
            isValid = false;
        } else {
            errorMessages[1].style.display = "none";
        }

        if (passwordInput.value.length < 6) {
            errorMessages[2].style.display = "block";
            isValid = false;
        } else {
            errorMessages[2].style.display = "none";
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            errorMessages[3].style.display = "block";
            isValid = false;
        } else {
            errorMessages[3].style.display = "none";
        }

        if (!isValid) {
            event.preventDefault(); // Evita que el formulario se envíe si hay errores
        }
    });

    // Mostrar/Ocultar contraseña
    togglePasswordButton.addEventListener("click", function() {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });

    toggleConfirmPasswordButton.addEventListener("click", function() {
        confirmPasswordInput.type = confirmPasswordInput.type === "password" ? "text" : "password";
    });
});
