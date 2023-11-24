import React from 'react'
import './view2.css'
import { Button2 } from '../../components/button2/button2'
import buttonData2 from '../../components/button2/buttonData2'
import { Tittle } from '../../components/tittle/tittle'
import { BackButton } from '../../components/backButton/backButton'
import { Buscador } from '../../components/buscador/buscador'
import { IncomeD } from '../../components/incomeData/incomeD'
import { ButtonE } from '../../components/buttonEntry/buttonE'
import { Tittle2 } from '../../components/tittle2/tittle2'
import { Label } from '../../components/label/label'

export const View2 = () => {
  return (
    <div className="p2">
      <div className="containerButtons2">
        {buttonData2.map((button, index) => (
          <Button2
            key={index}
            name={button.name}
            backgroundColor={button.backgroundColor}
            textColor={button.textColor}
            fontSize={button.fontSize}
            fontFamily={button.fontFamily}
            svg={button.svg}
          />
        ))}
      </div>
      <div className="registro">
        <Label contenido="No tienes una cuenta? Registrate" tamano="13px" />
      </div>
    </div>
  )
}
