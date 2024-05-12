import { useState } from 'react'

import './App.css'
import UserContext from './Context/UserContext'
import Information from './componentes/informacion'

function App() {
  const UserData = {
    nombres: "julio marin",
    edad: 23,
    correo: "@gmail.com",
    genero: "masculino"

  }

  return (
    
    <UserContext.Provider value = {UserData}>
      <div className='app'>
        <h1> Ejercicio usando Context</h1>
        <Information/>

      </div>
          
    </UserContext.Provider>

  )
}

export default App
