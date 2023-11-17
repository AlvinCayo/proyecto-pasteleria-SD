import React from 'react'
import { Cat1 } from './cat1'
import { Cat2 } from './cat2'
import { Cat3 } from './cat3'
import { Cat4 } from './cat4'
import './categories.css'

export const Categories = () => {
  return (
    <div className='categories'>
        <Cat1></Cat1>
        <Cat2></Cat2>
        <Cat3></Cat3>
        <Cat4></Cat4>
    </div>
  )
}
