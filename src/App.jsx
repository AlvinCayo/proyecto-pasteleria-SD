import { useState } from 'react'
import './App.css'
import { Card2 } from './components/pages/localitation/card2'
import { Burb } from './components/atoms/burb'

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
        </div>
      </div>
    </>
  )
}

export default App
