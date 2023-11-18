import React from "react";
import "./card1.css";
import { Button1 } from "../../components/button1/button1";
import buttonData from "../../components/button1/buttonData";

export const Card1 = () => {
  return (
    <div className="p1">
      <img src="./public/pasteleria-san-diego.jpg" alt="imagen" />
      <div className="titulo1">San Diego</div>
      <div className="titulo2">Pastelería Artesanal</div>
      {
        <div className="searchButtons">
          {buttonData.map((button, index) => (
            <Button1
              key={index}
              name={button.name}
              backgroundColor={button.backgroundColor}
              textColor={button.textColor}
              fontSize={button.fontSize}
              fontFamily={button.fontFamily}
            />
          ))}
        </div>
      }
    </div>
  );
};
