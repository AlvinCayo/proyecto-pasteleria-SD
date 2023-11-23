import React from 'react'
import './buscador.css'

export const Buscador = ({ letras }) => {
  return (
    <div className='buscador'>
        <div className='letras'>{letras}</div>
    </div>
  )
}

