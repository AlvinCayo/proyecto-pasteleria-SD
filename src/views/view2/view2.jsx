import React from "react";
import "./view2.css";
import { Button2 } from "../../components/button2/button2";
import buttonData2 from "../../components/button2/buttonData2";
import { Tittle } from "../../components/tittle/tittle";
import { BackButton } from "../../components/backButton/backButton";
import { Buscador } from "../../components/buscador/buscador";
import { IncomeD } from "../../components/incomeData/incomeD";
import { ButtonE } from "../../components/buttonEntry/buttonE";
import { Tittle2 } from "../../components/tittle2/tittle2";

export const View2 = () => {
  return (
    <div className="p2">
      <div className="arriba">
        <Tittle />
        <BackButton />
      </div>

      <div className="Dingreso">
        <IncomeD letras="Ingresa tu Correo" />
        <IncomeD letras="Ingresa tu contraseña" />
        <ButtonE />
      </div>

      <div className="tittle2">
        <Tittle2 titulo="Bienvenido Inicia tu Sesión!" />
      </div>
      <div className="containerButtons2"> 
        {buttonData2.map((button, index) => (
          <Button2
            key={index}
            name={button.name}
            backgroundColor={button.backgroundColor}
            textColor={button.textColor}
            fontSize={button.fontSize}
            fontFamily={button.fontFamily}
            svg={button.svg}
          />
        ))}
      </div>
    </div>
  );
};
