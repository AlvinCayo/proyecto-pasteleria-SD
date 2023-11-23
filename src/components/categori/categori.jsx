import React from "react";
import "./categori.css";

export const Categori = (props) => {
  return (
    <button className="cat">
      {props.svg && <img className="ico" src={props.svg} alt="" style={{ marginRight: '5px' }}/>}
      {props.name}
    </button>
  );
};
