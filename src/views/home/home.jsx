import React from "react";
import "./home.css";
import { Buscador } from "../../components/buscador/buscador";
import { NamePage } from "../../components/namePage/namePage";

export const Home = () => {
  return (
    <div className="p3">
      <div className="inicio">
        <Buscador letras="Buscar Pastel" />
        <NamePage nombrePagina="Productos" />
      </div>
    </div>
  );
};
