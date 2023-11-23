import "./registrar.css";
import React from "react";

export const Registrar = ({
  name,
  backgroundColor,
  textColor,
  fontSize,
  fontFamily,
  svg,
}) => {
  return (
    <button
      className="registrar"
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
