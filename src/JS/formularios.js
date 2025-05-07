document.addEventListener("DOMContentLoaded", function() {
    const productForm = document.getElementById("productForm");
    const contactForm = document.getElementById("contactForm");
    const searchForm = document.getElementById("searchForm");

    if (productForm) {
        productForm.addEventListener("submit", function(event) {
            const nombre = document.getElementById("nombre").value.trim();
            const precio = document.getElementById("precio").value;
            if (nombre === "" || precio <= 0) {
                alert("Por favor, ingrese un nombre y precio válido.");
                event.preventDefault();
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const email = document.getElementById("email").value.trim();
            if (!email.includes("@")) {
                alert("Ingrese un correo válido.");
                event.preventDefault();
            }
        });
    }

    if (searchForm) {
        searchForm.addEventListener("submit", function(event) {
            const minPrice = document.getElementById("precioMin").value;
            const maxPrice = document.getElementById("precioMax").value;
            if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
                alert("El precio mínimo no puede ser mayor que el máximo.");
                event.preventDefault();
            }
        });
    }
});
