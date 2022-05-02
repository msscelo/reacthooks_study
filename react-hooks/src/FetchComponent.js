import React from 'react';
import {useFetch} from "./useFetch";

function App({login}) {
  const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`)
  if (loading) return <h1>loading...</h1>
  if (error) return <pre>ERROR: {JSON.stringify(error, null, 2)}</pre>
  if (!data) return <h1>empty</h1>

  return (
    <div>
      <pre>SUCCESS: {JSON.stringify(data, null, 2)}</pre>
      <p>{data.name}</p>
    </div>
  )
}

function FetchComponent() {
  return (
    <App login="msscelo" />
  )
}

export default FetchComponent;
