import React from "react";
import "./viewpay.css";
import { BackButton } from "../../components/backButton/backButton";
import { Tittle2 } from "../../components/tittle2/tittle2";
import { Label } from "../../components/label/label";
import { ButtonE } from "../../components/buttonEntry/buttonE";
export const Viewpay = () => {
  return (
    <div className="viewP">
      <div className="viewP_up">
        <BackButton />
        <Tittle2 titulo="Método de Pago" />
      </div>
      <div className="detailsD">
        <Tittle2 titulo="Detalles de compra" />
        <Label contenido="Detalles de compra" tamano="16px" />
        <Label contenido="Pastel de chocolate" tamano="16px" />
        <Tittle2 titulo="Total" />
        <div className="detailsP">
          <Label contenido="100 bs" tamano="16px" />
          <Label contenido="200 bs" tamano="16px" />
          <Label contenido="300 bs" tamano="16px" />
        </div>
        <ButtonE nombre="Verificar" />
      </div>
      <div className="metPay">
        <Tittle2 titulo="Tarjeta de Débito/Crédito" />
        <Tittle2 titulo="QR Simple" />
        <Tittle2 titulo="Pago en efectivo" />
      </div>
    </div>
  );
};
