import React from "react";
import './amount.css'
const Amount = ({text}) => {
    return(
        <div>
            <button className="bder">
                <img src="der.svg" alt="vector"></img>
            </button>
            <label>{text}</label>
            <button className="bizq"></button>
            <img src="izq.svg"></img>
            <label>{text}</label>
        </div>
    )
}
export default Amount