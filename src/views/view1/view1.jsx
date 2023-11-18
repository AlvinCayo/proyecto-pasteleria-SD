import React from "react";
import "./view1.css";
import { Button } from "../../components/button/button";
import buttonData from "../../components/button/buttonData";

export const View1 = () => {
  return (
    <div className="p1">
      <img src="./public/pasteleria-san-diego.jpg" alt="imagen" />
      <div className="titulo1">San Diego</div>
      <div className="titulo2">Pastelería Artesanal</div>
      {
        <div className="searchButtons">
          {buttonData.map((button, index) => (
            <Button
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
