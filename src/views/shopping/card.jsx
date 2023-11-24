import React from 'react'
import { Ubuc } from '../../components/icon/ubuc'
import { Tort } from '../../components/cakePrincipal/tort'
import ButtonShop from '../../components/buttonShop/buttonShop'
import { Buscador } from '../../components/buscador/buscador'
import { ButtonLupa } from '../../components/buttonLupa/buttonLupa'
import './card.css'

export const Card = () => {
  return (
    <div className="rectangu">
      <div className="rojo"></div>
      <Ubuc></Ubuc>
      <p className="local"> La Paz, Bolivia</p>
      <p className="mm"> Mi Carrito</p>
      <div className="torta">
        <Tort></Tort>
      </div>
      <div className="busC">
        <Buscador letras={'Buscar en mi Carrito'}></Buscador>
        <div className="lu">
          <ButtonLupa></ButtonLupa>
        </div>
      </div>
      <div className="app-container">
        <div className="button-container">
          <ButtonShop
            image="path_to_your_image.svg"
            name="Chocolate Cake"
            price="20.00"
            rating={4}
          />
          <ButtonShop
            image="path_to_your_image2.svg"
            name="Strawberry Cake"
            price="18.00"
            rating={5}
          />
          <ButtonShop
            image="path_to_your_image2.svg"
            name="Strawberry Cake"
            price="18.00"
            rating={5}
          />
          <ButtonShop
            image="path_to_your_image2.svg"
            name="Strawberry Cake"
            price="18.00"
            rating={5}
          />
          <ButtonShop
            image="path_to_your_image2.svg"
            name="Strawberry Cake"
            price="18.00"
            rating={5}
          />
          <ButtonShop
            image="path_to_your_image2.svg"
            name="Strawberry Cake"
            price="18.00"
            rating={5}
          />
          <ButtonShop
            image="path_to_your_image2.svg"
            name="Strawberry Cake"
            price="18.00"
            rating={5}
          />
          <ButtonShop
            image="path_to_your_image2.svg"
            name="Strawberry Cake"
            price="18.00"
            rating={5}
          />
          <ButtonShop
            image="path_to_your_image2.svg"
            name="Strawberry Cake"
            price="18.00"
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Card
