import { useState } from 'react'
import './App.css'
import { Card2 } from './components/pages/localitation/card2'
import { Burb } from './components/atoms/burb'
import { Alarm } from './components/atoms/alarm'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
