import React, { useReducer } from 'react';

const initialState={message: "hi"};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I just said ${state.message}`
      };
    default:
    case "whisper":
      return {
        message: `excuse me, I just said ${state.message}`
      };
  }
}

function UseReducerTest() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  const [checked, toggleChecked] = useReducer(
    (checked) => !checked,
    false
  );
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <h1 onClick={() => setNumber(1)}>
        {number}
      </h1>

      <input type="checkbox" value={checked}
        onChange={toggleChecked}
      />
      <p>{checked ? "checked" : "not checked"}</p>

      <p>Mesage: {state.message}</p>
      <button onClick={() => dispatch({type: "yell"})}>YELL</button>
      <button onClick={() => dispatch({type: "whisper"})}>whisper</button>
    </>
  )
}

export default UseReducerTest;