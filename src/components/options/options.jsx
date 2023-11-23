import React from "react";
import "./options.css";
import { Option } from "../option/option";
import optionData from "../option/optionData";

export const Options = () => {
  return (
    <div className="opciones">
      {optionData.map((option, index) => (
        <Option key={index} svg={option.svg} />
      ))}
    </div>
  );
};
