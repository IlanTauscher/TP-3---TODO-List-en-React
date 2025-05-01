import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Lista from './Lista.jsx'

function App() {
  const [todo, setTodo] = useState([]);
  const [i, setI] = useState(0);
  return (
    <>
      <Header setTodo={setTodo} setI={setI} i={i} todo={todo}/>
      <Lista todo={todo} setTodo={setTodo}/>
    </>
  )
}

export default App
