import React, { useRef } from 'react';


function UseRefTest() {
  const sound = useRef();
  const color = useRef();
  
  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value
    const colorVal = color.current.value
    alert(`${soundVal} sounds like ${colorVal}`)
    sound.current.value = "";
    color.current.value = "";
  }

  return (
    <>
      <form onSubmit={submit}>
        <input ref={sound} type="text" placeholder="Sound..." />
        <input ref={color} type="color" />
        <button>Add</button>
      </form>
    </>
  )
}

export default UseRefTest;