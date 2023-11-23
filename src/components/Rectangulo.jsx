import React from "react";
import "../styles/Rectangulo.css";

function Rectangulo() {
  return (
    <section>
      <div className="rectangulo">
        <div className="pais">
          <div className="paisicono">
            <img
              src="https://s3-alpha-sig.figma.com/img/9c35/9877/62b5a9e977bb7d87dd9fe5a49cfe1880?Expires=1701648000&Signature=ZDAT2z0OFZij-Xxve39E0gFeZXzZBG5CBQhFC~jr-Rguvy04CSyze0f2Ftq4kU3PyanIZN0ICNgmeAvLPKuqr5XC6s6UQpozqGJCXCOCWZXU-AFqiZq3g-a0t9hnlp9mOXjvAyWroDWYmdJdoHVA2woJXZDV2EYf5qtVuSg1sJV9xheS6gfbStAWkVwWnU6oaKtHuFdzdWVeDP43LFWQLfAQMuSUCADtR80R-h0nboESK9ZPfnACxK1LrWjOTe2RSB-Zt9oh5aDUexP1zeDXQkmRv1UHAAxeQS5OhoZBdaO4XlYbTaGDRz9gMVkfNaUFinOnX5UtgS4mH0gUYS7j2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="icono"
              className="icono"
            />
            <h3 className="lapazbo">La Paz, Bolivia</h3>
          </div>

          <h3 className="nombres">Frionel Fressi Cuchitini</h3>
          <h3 className="nombres2">
            <strong>24 junio 1987</strong>
          </h3>
        </div>
        <img src="messi.jpg" alt="messi" className="messi" />
      </div>
      <h3 className="cuenta">Cuenta</h3>
    </section>
  );
}
export default Rectangulo;
