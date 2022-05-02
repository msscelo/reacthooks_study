import React, { useState } from 'react';
import './index.css';
import  { FaStar } from 'react-icons/fa';

const createArray = (length) => [
  ...Array(length)
];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "gray" }
      onClick={onSelect}
    />
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);


  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i+1)}/>
      ))}
      <p>{selectedStars} of {totalStars}</p>
    </>
  );
}

function UseStateTest() {
  const [status, setStatus] = useState("Not Delivered");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>The package is: {status}</h1>
      <input type="checkbox" value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
      <StarRating totalStars={4}/>
    </div>
  )
}

export default UseStateTest;