import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'
import Notificaciones from './components/Notificaciones'

function App() {

  return (
    <>
    <div>
      <Notificaciones/>
    </div>
    <div>
      <Registro/>
    </div>
    </>
  )
}

export default App
