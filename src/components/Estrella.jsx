import React from "react";
import "../styles/Estrella.css";

function Estrella() {
  return (
    <section className="seccion2">
      <div>
        <div>
          <p className="descripcion">
            Acumula estrellas. Con Pastelería San Diego® Rewards, cada 20 Bs.
            gastado en tus compras, automaticamente se convertirá en 100
            estrellas en tu app. Tantas estrellas 🌟 que necesitarás tus 🕶️.
            3.000 Estrellas Cada 3.000 estrellas acumuladas te regalaremos tu
            cupcake favorito. 🧁 ¡Tus días brillaran más! 10.000 Estrellas Al
            conseguir 10.000 estrellas en 12 meses te regalaremos tu pastel
            favorito. 🎂{" "}
          </p>
        </div>
        <div className="acumuladas">
          <h2>Estrellas Acumuladas </h2>
          <h2 className="total">Total _______________ 100 🌟</h2>
          <button className="estrellaboton">Ganar Estrellas</button>
        </div>
      </div>
    </section>
  );
}
export default Estrella;
