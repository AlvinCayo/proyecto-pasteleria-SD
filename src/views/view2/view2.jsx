import React from "react";
import "./view2.css";
import { Button2 } from "../../components/button2/button2";
import buttonData2 from "../../components/button2/buttonData2";
import { Tittle } from "../../components/tittle/tittle";
import { BackButton } from "../../components/backButton/backButton";

export const View2 = () => {
  return (
    <div className="p2">
      <Tittle/>
      <BackButton className="bButton"/>
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
