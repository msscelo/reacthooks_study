import React, { useState, createContext, useContext } from 'react';
import {useInput} from "./useInput"
import ChildContextTest from "./ChildContextTest"

const TreesContext = createContext();

export const useTrees = () => useContext(TreesContext);
const trees = [
  {id: "1", type: "meh1"},
  {id: "2", type: "meh2"},
  {id: "3", type: "meh3"},
  {id: "4", type: "meh4"}
];


function ContextTest() {

  return (
    <TreesContext.Provider value={ {trees} }>
      <ChildContextTest />
    </TreesContext.Provider>
  )
}

export default ContextTest;