<<<<<<< HEAD
import React from "react";
import "./home.css";
import { Buscador } from "../../components/buscador/buscador";
import { NamePage } from "../../components/namePage/namePage";
import { Options } from "../../components/options/options";
=======
import React from 'react'
import './home.css'
import { Buscador } from '../../components/buscador/buscador'
import { NamePage } from '../../components/namePage/namePage'
import { Options } from '../../components/options/options'
>>>>>>> Derix

export const Home = () => {
  return (
    <div className="p3">
      <div className="inicio">
        <Buscador letras="Buscar Pastel" />
        <NamePage nombrePagina="Productos" />
      </div>
<<<<<<< HEAD
      <Options/>
    </div>
  );
};
=======
      <Options />
    </div>
  )
}
>>>>>>> Derix
