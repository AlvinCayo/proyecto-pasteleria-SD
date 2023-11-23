import React from "react";
import "./home.css";
import { Buscador } from "../../components/buscador/buscador";
import { NamePage } from "../../components/namePage/namePage";
import { Options } from "../../components/options/options";

export const Home = () => {
  return (
    <div className="p3">
      <div className="inicio">
        <Buscador letras="Buscar Pastel" />
        <NamePage nombrePagina="carrito" />
      </div>
      <Options/>
    </div>
  );
};
