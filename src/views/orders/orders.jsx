import React from 'react'
import { Buscador } from '../../components/buscador/buscador'
import { ButtonLupa } from '../../components/buttonLupa/buttonLupa'
import { Tort } from '../../components/cakePrincipal/tort'

import './orders.css'

export const Orders = () => {
  return (
    <div className="rectangulo">
      <div className="rojo"></div>
      <p className="local"> La Paz, Bolivia</p>
      <p className="mm"> Pedidos</p>
      <div className="tor">
        <Tort></Tort>
      </div>
      <div className="bus">
        <Buscador letras={'Buscar mi orden'}></Buscador>
        <div className="lup">
          <ButtonLupa></ButtonLupa>
        </div>
      </div>
    </div>
  )
}

export default Orders
