import React from 'react'
import { Ubuc } from '../../molecules/ubuc'
import { Tort } from '../../molecules/tort'
import './card.css'

export const Card = () => {
  return (
    <div className="rectangu">
      <div className="rojo"></div>
      <Ubuc></Ubuc>
      <p className="local"> La Paz, Bolivia</p>
      <p className="mm"> Mi Carrito</p>
      <Tort></Tort>
      <input
        type="text"
        className="busqueda"
        placeholder="Buscar en mi carrito"
      ></input>
    </div>
  )
}

export default Card
