import { useState } from 'react'
import './App.css'
import Back from './components/Back'
import Logo from './components/Logo'
import Welcome from './components/Welcome'
import Datos from './components/Datos'

function App() {

  return (
    <>
      <Back/>
      <Logo/>
      <Welcome/>
      <Datos/>
    </>
  )
}

export default App
