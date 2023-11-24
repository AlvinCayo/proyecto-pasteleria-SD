import React from 'react'
import './producto.css'
import buttonCarrito from '../../components/button2/buttonCarrito'
import { BackButton } from '../../components/backButton/backButton'
import { Button } from '../../components/button/button'
import { Stock } from '../../components/stock/stock'
import { Amount } from '../../components/amount/amount'

export const Producto = () => {
  return (
    <div className="p3">
      <Amount/>
      <div className="inicio">
        <BackButton/>
        <img src="alfajor.png" alt="alfajor" className='alfajor' />
      </div>
      <div>
        <h3 className='alfajores'>Alfajores</h3>
      </div>
      <div>
        <h3 className='disp'>Stock:</h3>
        <Stock enStock={15}/>
      </div>
        <button className='boton10'>
          <div><img src="Vector2.png" alt="vector2" className='vector2' /></div>
          <div><h2 className='cantidad'>15</h2></div>
          <div><img src='Vector.png' alt='vector' className='vector1'/></div>
        </button>
        <div className='price'>
          <h2 className='bs'>3 Bs.</h2>
        </div>
      <div>
        <img src="star.png" alt="star" className='estrella' />
        <h2 className='calificacion'>4.8</h2>
      </div>
      <div className="containerButtonCarrito">
        {buttonCarrito.map((button, index) => (
            <Button
                key={index}
                name={button.name}
                backgroundColor={button.backgroundColor}
                textColor={button.textColor}
                fontSize={button.fontSize}
                fontFamily={button.fontFamily}
            />
        ))}
      </div>
      <div>
        <h4 className='desProducto'>Suaves y mantecosas, a menudo con una textura similar a la masa de pastelería. El dulce de leche, que es una mezcla caramelizada de leche y azúcar, es el componente central que le proporciona su sabor característico y suavidad. Después de unir las capas, el alfajor puede ser cubierto con chocolate, espolvoreado con coco rallado o glaseado con azúcar, lo que agrega una capa adicional de sabor y textura.</h4>
      </div>
    </div>
  )
}
