import React from "react";
import '../styles/Notificaciones.css'
function Notificaciones(){
    return (
            <div className="notificaciones">
                <section>
                    <div className="portada">
                        <h4 className="ubicacion">La Paz, Bolivia</h4>
                        <h2 className="titulo">Notificaciones</h2>
                        <div>
                            <div className="estrella">
                                <img src="estrella.png" alt="estrella" className="estrellita" />
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <input type="text"className="buscador"/>
                </div>
                <div>
                        <div>
                            <button className="lupa">
                                <img src="Vector.svg" alt="lupita" />
                            </button>
                        </div>
                </div>
                <div>
                    <h3 className="novedades">Novedades y Promociones</h3>
                </div>
                <section>
                <div className="cuadro">
                    <img src="credit.png" alt="credit" className="credito" />
                    <h4 className="descripcion1">Descubre una experiencia única en nuestra pasteleria. Este fin de semana, las primeras 100 personas recibirán un cupon de descuento para una proxima compra. ¡No te lo pierdas!</h4>
                    <h4 className="fecha1">15/11/2023 8:00 AM</h4>
                </div>
                </section>
            </div>
    )   
}
export default Notificaciones