import React, { useState, useEffect } from 'react';

function UseEffectTest() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(true);

  useEffect(() => {
    console.log(`Celebrate ${name}`)
    document.title= `Celebrate ${name}`;
  }, [name]);

  useEffect(() => {
    console.log(`The user is ${admin}`)
  }, [admin]);

  useEffect(() => {
    fetch("http://api.github.com/users")
      .then(response => response.json())
      .then(setData)
    ;
  }, [admin]);

  return (
    <section>
      <p>Congratualtions {name}</p>
      <button onClick={() => setName("Will")}>Change Winner</button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin(!admin)}>Login</button>
      <p>{data.length === 0 ? "No Users" : "Some users"}</p>
      <button onClick={() => setData([])}>Remove Data</button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </section>
  )
}

export default UseEffectTest;