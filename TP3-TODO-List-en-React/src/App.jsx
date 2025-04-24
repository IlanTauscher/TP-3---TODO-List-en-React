import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Tarea from './Tarea.jsx'
import TareaRapida from './TareaRapida.jsx'

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <Header todo={todo} setTodo={setTodo}/>
      <Tarea todo={todo} setTodo={setTodo}/>
      <TareaRapida/>
    </>
  )
}

export default App
