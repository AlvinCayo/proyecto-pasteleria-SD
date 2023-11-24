import React from "react";
import "./view3.css";
import { Tittle } from "../../components/tittle/tittle";
import { BackButton } from "../../components/backButton/backButton";
import { IncomeD } from "../../components/incomeData/incomeD";
import { ButtonE } from "../../components/buttonEntry/buttonE";
import { Tittle2 } from "../../components/tittle2/tittle2";
import { Label } from "../../components/label/label";

export const View3 = () => {
  return (
    <div className="p3">
      <div className="arriba">
        <Tittle />
        <BackButton />
      </div>

      <div className="Dregistro">
        <Label contenido="Correo" tamano="15px" />
        <IncomeD letras="Ingresa tu Correo aquí" />
        <Label contenido="Número de teléfono" tamano="15px" />
        <IncomeD letras="+591 68789511" />
        <Label contenido="Contraseña" tamano="15px" />
        <IncomeD letras="************" />
        <Label contenido="Confirmar Contraseña" tamano="15px" />
        <IncomeD letras="************" />
      </div>

      <div className="tittle3">
        <Tittle2 titulo="Bienvenido Registrate para continuar!" />
      </div>
      <div className="registrar">
        <Label
          contenido="Al continuar, acepta nuestros Terminos de Servicio y Politica de Privacidad"
          tamano="11px"
        />
        <ButtonE nombre="Registrar" />
        <Label contenido="Ya eres miembro? Entra" tamano="13px" />
      </div>
    </div>
  );
};
