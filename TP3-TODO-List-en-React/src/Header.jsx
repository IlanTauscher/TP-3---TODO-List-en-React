import React from 'react'
import EscribirTarea from './EscribirTarea'
import AgregarTarea from './AgregarTarea'

export default function Header() {
  return (
    <>
      <div id="myDIV" class="header">
            <h2>Mi Lista de Tareas</h2>
            <EscribirTarea/>
            <AgregarTarea/>
        </div>
    </>
  )
}