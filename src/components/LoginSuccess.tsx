import "src/CSS/bienvenida.css";

export const LoginSuccess = () => {
  return (
    <>
      <div id="home-button-container"></div>

      <div className="welcome-container">
        <h1>¡Registro Exitoso! 🎉</h1>
        <p>
          Bienvenido a nuestra tienda en línea. Ahora puedes explorar y comprar
          los mejores productos.
        </p>
        <a href="../HTML/usuario.html" className="btn">
          Ir a la Tienda
        </a>
      </div>
    </>
  );
};
