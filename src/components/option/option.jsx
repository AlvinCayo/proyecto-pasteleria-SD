import React from 'react'
import './option.css'

export const Option = ({ svg }) => {
  return (
    <button className='option'><img src={svg} alt="" /></button>
  )
}
