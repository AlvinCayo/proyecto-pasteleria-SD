import { useState } from 'react'
import { Card2 } from './components/pages/localitation/card2'
import { Burb } from './components/atoms/burb'
import { Alarm } from './components/atoms/alarm'
import { Card } from './components/pages/shopping/card'
import './App.css'
import { View1 } from './views/view1/view1'
import { View2 } from './views/view2/view2'
import { Home } from './views/home/home'

function App() {
  return (
    <>
      {/* <div className="rectangulo">
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
      </div> */}
      <Card></Card>
    </>
  )
}

export default App
