import React from "react";
import "./product.css";

export const Product = ({ nombre, precio, png = "" }) => {
  return (
    <div className="producto">
      {png && <img src={png} alt="" style={{ marginRight: "10px" }} />}
      <div className="detalles">
        <div className="nProducto">{nombre}</div>
        <div className="precio">{precio}</div>

        <button className="cartera">
          <img src="./public/cartera.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
