import React, { useState } from "react";
import Error from "./Error";

export default function Header({ setTodo, setI, i, todo }) {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [mostrarError, setMostrarError] = useState(false);

  const botonCliqueado = () => {
    if (nuevaTarea.trim() === "") {
      setMostrarError(true);
      return;
    } else {
      setMostrarError(false);
      const task = {
        contenido: nuevaTarea,
        id: i,
        fechaCreacion: new Date().toLocaleDateString("es-ES"),
        fechaTerminado: null,
        terminado: false,
      };

      setTodo((prev) => [...prev, task]);
      console.log(todo);
      setI((prev) => prev + 1);
      setNuevaTarea("");
    }
  };

  return (
    <>
      <div id="myDIV" className="header">
        <h2>Mi Lista de Tareas</h2>
        <input
          type="text"
          id="myInput"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe tu tarea..."
        />

        <button id="btn" onClick={botonCliqueado}>
          Agregar
        </button>
      </div>
      {mostrarError && <Error />}
    </>
  );
}
