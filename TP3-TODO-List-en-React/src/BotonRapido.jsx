import React from 'react'

export default function BotonRapido({ todo, setTodo, setMsg }) {
  const handleMostrarRapida = () => {
    const completadas = todo.filter(t => t.terminado && t.fechaTerminado);

    if (completadas.length === 0) {
        setMsg({ text: "No hay tareas completadas.", type: "black" });
        return;
    }

    const ordenadas = [...completadas].sort((a, b) => new Date(a.fechaTerminado) - new Date(b.fechaTerminado));
    const masRapida = ordenadas[0];
      console.log(masRapida);
    setMsg({ text:`La tarea más rápida fue: ${masRapida.contenido}`, type: "black" });
    
};
const handleBorrarTareas = () => {
  if (todo.length === 0) {
      setMsg({ text: "La lista ya está vacía.", type: "black" });
  } else {
      setTodo([]);
      setMsg({ text: "", type: "" });
  }
};

  return (
    <div>
      <button id="btnFastest" onClick={handleMostrarRapida}>Tarea más rápida</button>
      <button id="btnFastest" onClick={handleBorrarTareas}>Borrar tareas</button>
    </div>
  )
}
