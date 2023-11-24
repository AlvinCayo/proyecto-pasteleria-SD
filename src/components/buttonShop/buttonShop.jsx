// ButtonShop.jsx
import React from 'react'
import './buttonShop.css'

const ButtonShop = ({ image, name, price, rating }) => {
  return (
    <button className="button-shop">
      <img src={image} alt={name} />
      <div className="info">
        <h3>{name}</h3>
        <p>{`Bs ${price}`}</p>
        <div className="rating">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index}>⭐</span>
          ))}
        </div>
      </div>
    </button>
  )
}

export default ButtonShop
