import React, { useState } from 'react'
// import EscribirTarea from './EscribirTarea'
// import AgregarTarea from './AgregarTarea'
import Error from './Error'

export default function Header({todo, setTodo}) {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const botonCliqueado = () => {
    let aux = [...todo];
    aux.push(nuevaTarea);
    setTodo(aux);
  }
  
  return (
    <>
      <div id="myDIV" className="header">
          <h2>Mi Lista de Tareas</h2>
          <input type="text" id="myInput" onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Escribe tu tarea..."/>
          <button id="btn" onClick={botonCliqueado}>Agregar</button>
      </div>
      <Error/>
    </>
  )
}