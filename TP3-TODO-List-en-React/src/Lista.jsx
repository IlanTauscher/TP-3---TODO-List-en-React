import React from "react";
import TareaRapida from './TareaRapida.jsx'

export default function Lista({ todo, setTodo, setMsg }) {
  const toggleTarea = (id) => {
    const nuevasTareas = todo.map((task) => {
      if (task.id === id) {
        const now = new Date().toLocaleString("es-ES");
        return {
          ...task,
          fechaTerminado: !task.terminado ? now : null,
          terminado: !task.terminado
        };
      }
      return task;
    });

    setTodo(nuevasTareas);
  };

  return (
    <ul>
      {todo.map((task) => (
        <li key={task.id} className={task.terminado ? "checked" : "elemento"}>
          <input type="checkbox" className="task_input" checked={task.terminado} onChange={() => toggleTarea(task.id)}/>
          <h3 style={{ margin: 0 }} className={task.terminado ? "tachar" : ""}>{task.contenido}</h3>
          <span>Creada: {task.fechaCreacion}</span>
        </li>
      ))}
    
    <TareaRapida todo={todo} setTodo={setTodo}/>
    </ul>
  );
}
