import "./button2.css";
import React from "react";

export const Button2 = ({
  name,
  backgroundColor,
  textColor,
  fontSize,
  fontFamily,
  svg,
}) => {
  return (
    <button
      className="botones2"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: fontSize,
        fontFamily: fontFamily,
      }}
    >
      {/* {svg && <img src={svg} alt="" />} */}
      {svg && <img src={svg} alt="" style={{ marginRight: '10px' }} />}
      {name}
    </button>
  );
};
