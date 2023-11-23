import { useState } from "react";
import "./App.css";
import Rectangulo from "./components/Rectangulo";
import Boton from "./components/Boton";
import RectanguloV2 from "./components/RectanguloV2";
import Estrella from "./components/Estrella";

function App() {
  return (
    <>
      <div>
        <Rectangulo />
      </div>
      <div>
        <Boton />
      </div>
      <div>
        <RectanguloV2 />
        <Estrella />
      </div>
    </>
  );
}

export default App;
