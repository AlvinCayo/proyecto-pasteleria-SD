import React from "react";
import "./button.css";

export const Button = ({
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

