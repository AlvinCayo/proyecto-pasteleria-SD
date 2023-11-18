// Button1.js

import React from "react";
import "./button1.css";

export const Button1 = ({
  name,
  backgroundColor,
  textColor,
  fontSize,
  fontFamily,
}) => {
  return (
    <button
      className="botones"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: fontSize,
        fontFamily: fontFamily,
      }}
    >
      {name}
    </button>
  );
};

