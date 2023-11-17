import React from "react";
import "./card3.css";
import { Buscador } from "./buscador";

export const Card3 = () => {
  return (
    <div className="p3">
      <div className="rectangle10"></div>
      <div className="group6">
        <div className="image">
          <img src="./public/cesar-guel.png" alt="imagen" />
        </div>
        <div className="icon">
          <img src="./public/pin 1.svg" alt="icono" />
        </div>
        <div className="carrito">Carrito</div>
        <div className="direction">La Paz, Bolivia</div>
        <div className="tittle">Productos</div>
        <i className="iconI">
          <img src="./public/instagram 1.svg" alt="icono" />
        </i>
        <i className="iconF">
          <img src="./public/Facebook.svg" alt="icono" />
        </i>
      </div>
      <div className="group5">
        <Buscador></Buscador>
      </div>
    </div>
  );
};
