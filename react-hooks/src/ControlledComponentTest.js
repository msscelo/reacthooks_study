import React, { useState } from 'react';


function ControlledComponentTest() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`)
    setSound("");
    setColor("#000000");
  }

  return (
    <>
      <form onSubmit={submit}>
        <input value={sound} type="text" placeholder="Sound..." onChange={(e) => setSound(e.target.value)} />
        <input value={color} type="color" onChange={(e) => setColor(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  )
}

export default ControlledComponentTest;