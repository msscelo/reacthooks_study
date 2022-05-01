import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseEffectTest from './UseEffectTest';
import UseStateTest from './UseStateTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseEffectTest />
    {/* <UseStateTest /> */}
  </React.StrictMode>
);
