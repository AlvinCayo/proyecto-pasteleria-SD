import React from "react";
import '../styles/Datos.css'
function Datos(){
    return (
        <section>
            <div className="style3">
                <h3 >Correo</h3>
                <input type="text" className="box1"/>
                <h3 >Numero de telefono</h3>
                <input type="text" className="box1"/>
                <h3 >Contraseña</h3>
                <input type="text" className="box1"/>
                <h3 >Confirmar contraseña</h3>
                <input type="text" className="box1"/>

            </div>
        </section>
    )   
}
export default Datos