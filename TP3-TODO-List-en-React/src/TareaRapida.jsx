import React from 'react'
import { useState } from 'react'
import BotonRapido from './BotonRapido'
import MensajeRapido from './MensajeRapido'

export default function TareaRapida({todo, setTodo}) {
  const [msg, setMsg] = useState({ text: "", type: "" });  

  return (
    <div className="fastest-container">
        <BotonRapido todo={todo} setTodo={setTodo} setMsg={setMsg}/>
        <MensajeRapido msg={msg}/>
    </div>
  )
}
