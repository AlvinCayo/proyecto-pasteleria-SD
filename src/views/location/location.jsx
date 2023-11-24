import React from 'react'
import { Card2 } from '../../components/icon/card2'
import { Burb } from '../../components/icon/burb'
import { Alarm } from '../../components/icon/alarm'
import './location.css'

export const Location = () => {
  return (
    <div className="rectangulo">
      <img src="map.png" alt=""></img>
      <p className="h">0h 15m</p>
      <p className="d">El delivery llegara</p>
      <div className="rect">
        <p className="t">SN-3836</p>
        <Card2></Card2>
        <Burb></Burb>
        <p className="cr">El Bicho</p>
        <p className="cr7">
          Vehiculo: Bugatti Centodieci. <br />N CR7 SIU.
        </p>
        <Alarm></Alarm>
      </div>
    </div>
  )
}

export default Location
