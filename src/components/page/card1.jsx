import React from "react";
import "./card1.css";
import { Button1 } from "./button1";
import { Button2 } from "./button2";

export const Card1 = () => {
  return (
    <div className="p1">
      <img src="./public/pasteleria-san-diego.jpg" alt="imagen" />
      <Button1></Button1>
      <Button2></Button2>
    </div>
  );
};
