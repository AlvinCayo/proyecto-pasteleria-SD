import React from "react";
import '../styles/Registro.css'
function Registro(){
    return (
            <div className="registro">
                <section>
            <div className="style">
                <i className="back_button"></i>
            </div>
        </section>
                <div className="style1">
                <h1 className="logo">San Diego</h1>
            </div>
                <div className="style2">
                <h2 className="welcome">Bienvenido!</h2>
                <p className="welcome2">Registrarse para continuar</p>
            </div>
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
                <div className="style5">
            <h5 className="Primera">
                Al continuar, acepta nuestros <span className="Segunda">Términos de Servicio y Política de Privacidad</span>.
            </h5>
            </div>
                <div className="style4">
                <button className="Boton1">
                    <h1 className="registrar">Registrar</h1>
                </button>
            </div>
                <div className="style5">
            <h5 className="Miembro">
                Ya eres miembro? <span className="Entra">Entra</span>.
            </h5>
            </div>
            </div>
            
    )   
}
export default Registro