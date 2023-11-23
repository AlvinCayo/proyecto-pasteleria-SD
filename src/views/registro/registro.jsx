import React from "react";
import "./registro.css";
import { Button2 } from "../../components/button2/button2";
import buttonData2 from "../../components/button2/buttonData2";
import { Tittle } from "../../components/tittle/tittle";
import { BackButton } from "../../components/backButton/backButton";
import { Registrar } from "../../components/registrar/registrar";
import registrarData from "../../components/registrar/registrarData";
import { Buscador } from "../../components/buscador/buscador";
import { NamePage } from "../../components/namePage/namePage";

export const Registro = () => {
  return (
    <div className="p2">
      <Tittle/>
      <BackButton/>
      <div>
        <NamePage/>
      </div>
      <section className="datos">
        <div className="co">
            <Buscador/>
        </div>
        <div className="num">
            <Buscador/>
        </div>
        <div className="cont">
            <Buscador/>
        </div>
        <div className="conf">
            <Buscador/>
        </div>
      </section>
      <div className="containerRegistro">
        {registrarData.map((button, index) => (
          <Registrar
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