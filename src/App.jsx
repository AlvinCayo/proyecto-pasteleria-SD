import { useState } from 'react'
import './App.css'
import Back from './components/Back'
import Logo from './components/Logo'
import Welcome from './components/Welcome'
import Datos from './components/Datos'
import Registrar from './components/Registrar'
import Ac_pol from './components/Ac_pol'
import Entra from './components/Entra'

function App() {

  return (
    <>
      <Back/>
      <Logo/>
      <Welcome/>
      <Datos/>
      <Ac_pol/>
      <Registrar/>
      <Entra/>
    </>
  )
}

export default App
