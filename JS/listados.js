document.addEventListener("DOMContentLoaded", function() {
    // Botón de Home
    fetch("home-button.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("home-button-container").innerHTML = data;
        });

    // Listado de productos (productos simulados)
    const productList = document.getElementById("productList");
    if (productList) {
        const products = [
            { name: "Smartphone Galaxy S21", price: 799, image: "../img/sam.jpg", description: "Pantalla AMOLED 6.2'', 128GB, 5G." },
            { name: "Laptop Dell XPS 13", price: 1299, image: "../img/dell.jpg", description: "Intel i7, 16GB RAM, SSD 512GB." },
            { name: "Auriculares Bluetooth", price: 120, image: "../img/aud.jpg", description: "Cancelación de ruido, 20h de batería." },
            { name: "Smartwatch Series 7", price: 399, image: "../img/smart.jpg", description: "Monitoreo cardíaco, GPS, sumergible." },
            { name: "Consola PlayStation 5", price: 499, image: "../img/play.jpg", description: "Ultra HD, 825GB SSD, DualSense." },
            { name: "Cámara Canon EOS R5", price: 3899, image: "../img/camara.jpg", description: "45MP, 8K video, sensor full-frame." },
            { name: "Monitor Gaming 27''", price: 350, image: "../img/monit.jpg", description: "144Hz, 1ms, G-Sync compatible." },
            { name: "Teclado Mecánico RGB", price: 99, image: "../img/tecla.jpg", description: "Switches rojos, retroiluminado RGB." }
        ];

        products.forEach(product => {
            const item = document.createElement("div");
            item.classList.add("product-item");
            item.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price}</p>
                <button class="btn">Añadir al carrito</button>
            `;
            productList.appendChild(item);
        });
    }
});
