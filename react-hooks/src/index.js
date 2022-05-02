import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseEffectTest from './UseEffectTest';
import UseReducerTest from './UseReducerTest';
import UseStateTest from './UseStateTest';
import UseRefTest from './UseRefTest';
import ControlledComponentTest from './ControlledComponentTest';
import CustomHookTest from './CustomHookTest';
import ContextTest from './ContextTest';
import FetchComponent from './FetchComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchComponent />
    <ContextTest />
    <CustomHookTest />
    <ControlledComponentTest />
    <UseRefTest />
    <UseReducerTest />
    <UseEffectTest />
    <UseStateTest />
  </React.StrictMode>
);
