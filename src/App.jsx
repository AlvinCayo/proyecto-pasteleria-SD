import { useState } from 'react'
import './App.css'
import Back from './components/Back'
import Logo from './components/Logo'
import Welcome from './components/Welcome'
import Datos from './components/Datos'
import Registrar from './components/Registrar'

function App() {

  return (
    <>
      <Back/>
      <Logo/>
      <Welcome/>
      <Datos/>
      <Registrar/>
    </>
  )
}

export default App
