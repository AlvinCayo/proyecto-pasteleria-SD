import React from "react";
import "./card1.css";
import { Button1 } from "../../components/button1/button1";

export const Card1 = () => {
  return (
    <div className="p1">
      <img src="./public/pasteleria-san-diego.jpg" alt="imagen" />
      <div className="titulo1">San Diego</div>
      <div className="titulo2">Pastelería Artesanal</div>
      <Button1></Button1>
    </div>
  );
};
