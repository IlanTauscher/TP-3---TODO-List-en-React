import React, { useState } from 'react'

export default function MensajeRapido({msg}) {
  
  return (
    <div>
      <span id="fastestTask" className={msg.type}>{msg.text}</span>
    </div>
  )
}
