document.addEventListener("DOMContentLoaded", function() {
    // Cargar el botón de Home en todas las páginas
    fetch("home-button.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("home-button-container").innerHTML = data;
        });
});

// Función para ir a la tienda
function goToStore() {
    window.location.href = "home.html";  // Redirige a la página de inicio
}

// Función para redirigir a la página de pedidos
function goToOrders() {
    window.location.href = "listado_pedidos.html";  // Redirige a la página de pedidos
}

// Cargar el botón de Home en todas las páginas
document.addEventListener("DOMContentLoaded", function() {
    const homeButtonHTML = `<button id="home-button" onclick="window.location.href='home.html'">Inicio</button>`;
    document.getElementById("home-button-container").innerHTML = homeButtonHTML;
});


  // Lista de pedidos ficticios
  const orderList = document.getElementById("orderList");
  if (orderList) {
      const orders = [
          { id: 101, product: "Smartphone Galaxy S21", price: 799, status: "Enviado", date: "2025-04-01" },
          { id: 102, product: "Laptop Dell XPS 13", price: 1299, status: "Pendiente", date: "2025-04-02" },
          { id: 103, product: "Auriculares Bluetooth", price: 120, status: "Entregado", date: "2025-03-29" },
          { id: 104, product: "Smartwatch Series 7", price: 399, status: "Enviado", date: "2025-04-03" },
          { id: 105, product: "PlayStation 5", price: 499, status: "Pendiente", date: "2025-04-04" }
      ];

      orders.forEach(order => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${order.id}</td>
              <td>${order.product}</td>
              <td>$${order.price}</td>
              <td class="status ${order.status.toLowerCase()}">${order.status}</td>
              <td>${order.date}</td>
          `;
          orderList.appendChild(row);
      });
  }
