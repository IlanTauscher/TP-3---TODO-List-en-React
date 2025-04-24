import React, { useState } from 'react'
import Error from './Error'

export default function Header({ todo, setTodo }) {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [mostrarError, setMostrarError] = useState(false);

  const botonCliqueado = () => {
    if (nuevaTarea.trim() === "") {
      setMostrarError(true);
      return;
    }
    setMostrarError(false);
    let aux = [...todo];
    aux.push(nuevaTarea);
    setTodo(aux);
    setNuevaTarea("");
  }

  return (
    <>
      <div id="myDIV" className="header">
        <h2>Mi Lista de Tareas</h2>
        <input type="text" id="myInput" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Escribe tu tarea..."/>
        <button id="btn" onClick={botonCliqueado}>Agregar</button>
      </div>
      {mostrarError && <Error />}
    </>
  )
}
