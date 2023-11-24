import React from 'react'
import './label.css'

export const Label = (props) => {
  const style = {
    fontSize: props.tamano
  };

  return (
    <div className='label' style={style}>{props.contenido}</div>
  )
}


