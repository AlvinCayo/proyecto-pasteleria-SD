import React from "react";
import "./card1.css";
import { Button1 } from "./button1";
import { Button2 } from "./button2";
import { Button3 } from "./button3";

export const Card1 = () => {
  return (
    <div className="p1">
      <img src="./public/pasteleria-san-diego.jpg" alt="imagen" />
      <div className="titulo1">San Diego</div>
      <div className="titulo2">Pastelería Artesanal</div>
      <Button1></Button1>
      <Button2></Button2>
      <Button3></Button3>
    </div>
  );
};
