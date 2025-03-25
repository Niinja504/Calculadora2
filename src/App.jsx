import { useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora/Calculadora'
import Todo from './components/Todo/Todo'
import Estudiantes from './components/Estudiantes/Estudiantes'

function App() {

  return (
    <>
     <h1>Hook UseState</h1>

     <Calculadora/>
     <Todo/>
     <Estudiantes/>
    </>
  )
}

export default App